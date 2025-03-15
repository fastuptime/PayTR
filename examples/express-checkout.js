const express = require('express');
const bodyParser = require('body-parser');
const PayTR = require('../index');

// Express uygulaması oluştur
const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PayTR yapılandırması
const paytr = new PayTR({
  merchantId: 'YOUR_MERCHANT_ID',
  merchantKey: 'YOUR_MERCHANT_KEY',
  merchantSalt: 'YOUR_MERCHANT_SALT',
  testMode: true // Test modu için true, canlı mod için false
});

// HTML form için ana sayfa
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>PayTR Ödeme Örneği</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; }
          .form-group { margin-bottom: 15px; }
          label { display: block; margin-bottom: 5px; }
          input, select { width: 100%; padding: 8px; box-sizing: border-box; }
          button { padding: 10px 15px; background: #4CAF50; color: white; border: none; cursor: pointer; }
          h1 { color: #333; }
          .payment-methods { display: flex; gap: 10px; margin-bottom: 15px; }
          .payment-method { 
            padding: 10px; 
            border: 1px solid #ddd; 
            border-radius: 5px; 
            cursor: pointer;
            text-align: center;
            flex: 1;
          }
          .payment-method.active { 
            border-color: #4CAF50;
            background-color: #e8f5e9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>PayTR Ödeme Örneği</h1>
          
          <div class="payment-methods">
            <div class="payment-method active" onclick="selectPaymentMethod('card', this)">
              <strong>Kredi Kartı</strong>
            </div>
            <div class="payment-method" onclick="selectPaymentMethod('eft', this)">
              <strong>Havale/EFT</strong>
            </div>
          </div>
          
          <form action="/create-payment" method="POST">
            <input type="hidden" id="payment_type" name="payment_type" value="card">
            
            <div class="form-group">
              <label for="name">Adı Soyadı:</label>
              <input type="text" id="name" name="name" value="Test Kullanıcı" required>
            </div>
            <div class="form-group">
              <label for="email">E-posta:</label>
              <input type="email" id="email" name="email" value="test@example.com" required>
            </div>
            <div class="form-group">
              <label for="phone">Telefon:</label>
              <input type="text" id="phone" name="phone" value="05001234567" required>
            </div>
            <div class="form-group">
              <label for="address">Adres:</label>
              <textarea id="address" name="address" required>Test Adres</textarea>
            </div>
            <div class="form-group">
              <label for="amount">Tutar (TL):</label>
              <input type="number" id="amount" name="amount" value="100" min="1" required>
            </div>
            <div class="form-group">
              <label for="product">Ürün:</label>
              <input type="text" id="product" name="product" value="Test Ürün" required>
            </div>
            <div class="form-group">
              <button type="submit">Ödeme Yap</button>
            </div>
          </form>
        </div>
        
        <script>
          function selectPaymentMethod(type, element) {
            // Ödeme yöntemini ayarla
            document.getElementById('payment_type').value = type;
            
            // Aktif sınıfını güncelle
            const methods = document.querySelectorAll('.payment-method');
            methods.forEach(method => method.classList.remove('active'));
            element.classList.add('active');
          }
        </script>
      </body>
    </html>
  `);
});

// Ödeme token'ı oluştur ve iframe sayfasını göster
app.post('/create-payment', async (req, res) => {
  try {
    // Sipariş numarası oluştur
    const merchantOid = `SIP_${Date.now()}`;
    
    // Form verilerini al
    const { name, email, phone, address, amount, product, payment_type } = req.body;
    
    // Müşteri IP adresini al
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // TL'yi kuruşa çevir (100 TL = 10000 kuruş)
    const paymentAmount = (parseFloat(amount) * 100).toString();
    
    // Ödeme token'ı oluştur
    const result = await paytr.iframe.createToken({
      userIp,
      merchantOid,
      email,
      paymentAmount,
      userName: name,
      userAddress: address,
      userPhone: phone,
      merchantOkUrl: `http://localhost:${port}/success`,
      merchantFailUrl: `http://localhost:${port}/fail`,
      userBasket: JSON.stringify([
        [product, paymentAmount, 1] // Ürün adı, fiyat (kuruş), adet
      ]),
      paymentType: payment_type // 'card' veya 'eft'
    });

    // Token ile iframe sayfası göster
    res.send(`
      <html>
        <head>
          <title>PayTR Ödeme</title>
          <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .container { max-width: 800px; margin: 0 auto; }
            h1 { color: #333; }
            .back-link { margin-top: 20px; display: block; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>PayTR Ödeme Sayfası</h1>
            <iframe src="https://www.paytr.com/odeme/guvenli/${result.token}" id="paytriframe" frameborder="0" scrolling="no" style="width: 100%;"></iframe>
            <a href="/" class="back-link">Ana Sayfaya Dön</a>
          </div>
          <script>iFrameResize({}, '#paytriframe');</script>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`
      <html>
        <head>
          <title>Hata</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; }
            .error { color: red; background: #ffeeee; padding: 10px; border-left: 5px solid red; }
            .back-link { margin-top: 20px; display: block; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Ödeme Hatası</h1>
            <div class="error">
              <p>${error.message}</p>
              <pre>${error.stack}</pre>
            </div>
            <a href="/" class="back-link">Ana Sayfaya Dön</a>
          </div>
        </body>
      </html>
    `);
  }
});

// Başarılı ödeme dönüş sayfası
app.get('/success', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ödeme Başarılı</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; text-align: center; }
          .success { color: green; background: #eeffee; padding: 20px; border-radius: 5px; }
          .back-link { margin-top: 20px; display: inline-block; padding: 10px 20px; background: #4CAF50; color: white; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Ödeme Başarılı</h1>
          <div class="success">
            <p>Siparişiniz alınmıştır. Teşekkür ederiz!</p>
            <p>Not: PayTR geri bildirim mekanizması ile siparişiniz onaylanacaktır.</p>
          </div>
          <a href="/" class="back-link">Ana Sayfaya Dön</a>
        </div>
      </body>
    </html>
  `);
});

// Başarısız ödeme dönüş sayfası
app.get('/fail', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ödeme Başarısız</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; text-align: center; }
          .failure { color: red; background: #ffeeee; padding: 20px; border-radius: 5px; }
          .back-link { margin-top: 20px; display: inline-block; padding: 10px 20px; background: #4CAF50; color: white; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Ödeme Başarısız</h1>
          <div class="failure">
            <p>Ödeme işleminiz tamamlanamadı.</p>
            <p>Lütfen tekrar deneyin veya farklı bir ödeme yöntemi seçin.</p>
          </div>
          <a href="/" class="back-link">Ana Sayfaya Dön</a>
        </div>
      </body>
    </html>
  `);
});

// Ödeme geri bildirim URL'i
app.post('/notification', (req, res) => {
  try {
    // Gelen geri bildirimin hash doğrulaması
    const isValid = paytr.iframe.validateHash(req.body);
    
    if (isValid) {
      const { merchant_oid, status, total_amount, payment_type } = req.body;
      
      // İşlem başarılı ise
      if (status === 'success') {
        console.log(`Sipariş onaylandı: ${merchant_oid}, Tutar: ${total_amount}, Ödeme Tipi: ${payment_type}`);
        // Siparişi veritabanında onayla ve gerekli işlemleri yap
        // Örneğin:
        // - Veritabanında sipariş durumunu güncelle
        // - Müşteriye e-posta gönder
        // - Ürün/hizmet teslimat sürecini başlat
      } else {
        console.log(`Sipariş reddedildi: ${merchant_oid}`);
        // Siparişi veritabanında iptal et
      }
      
      // PayTR'a OK yanıtı gönder
      res.send('OK');
    } else {
      console.error('Geçersiz hash');
      res.status(400).send('Invalid hash');
    }
  } catch (error) {
    console.error('Bildirim işleme hatası:', error);
    res.status(500).send('Error');
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Örnek uygulama http://localhost:${port} adresinde çalışıyor`);
});
