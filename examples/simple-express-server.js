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

// Ana sayfa
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>PayTR Örnek</title></head>
      <body>
        <h1>PayTR Örnek Ödeme Sayfası</h1>
        <form action="/create-payment" method="POST">
          <button type="submit">Ödeme Yap</button>
        </form>
      </body>
    </html>
  `);
});

// Ödeme token'ı oluştur ve iframe sayfasını göster
app.post('/create-payment', async (req, res) => {
  try {
    // Sipariş numarası oluştur
    const merchantOid = `SIP_${Date.now()}`;
    
    // Müşteri IP adresini al
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // Ödeme token'ı oluştur
    const result = await paytr.iframe.createToken({
      userIp: userIp,
      merchantOid: merchantOid,
      email: 'customer@example.com',
      paymentAmount: '10000', // 100.00 TL = 10000
      userName: 'John Doe',
      userAddress: 'Customer Address',
      userPhone: '05001234567',
      merchantOkUrl: `http://localhost:${port}/success`,
      merchantFailUrl: `http://localhost:${port}/fail`,
      userBasket: JSON.stringify([
        ['Ürün 1', '5000', 1], // Ürün adı, fiyat (50.00 TL), adet
        ['Ürün 2', '5000', 1]
      ])
    });

    // Token ile iframe sayfası göster
    res.send(`
      <html>
        <head>
          <title>PayTR Ödeme</title>
          <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
        </head>
        <body>
          <h1>PayTR Ödeme Sayfası</h1>
          <iframe src="https://www.paytr.com/odeme/guvenli/${result.token}" id="paytriframe" frameborder="0" scrolling="no" style="width: 100%;"></iframe>
          <script>iFrameResize({}, '#paytriframe');</script>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`Hata: ${error.message}`);
  }
});

// Başarılı ödeme dönüş sayfası
app.get('/success', (req, res) => {
  res.send(`
    <html>
      <head><title>Ödeme Başarılı</title></head>
      <body>
        <h1>Ödeme Başarılı</h1>
        <p>Siparişiniz alınmıştır.</p>
        <a href="/">Ana Sayfaya Dön</a>
      </body>
    </html>
  `);
});

// Başarısız ödeme dönüş sayfası
app.get('/fail', (req, res) => {
  res.send(`
    <html>
      <head><title>Ödeme Başarısız</title></head>
      <body>
        <h1>Ödeme Başarısız</h1>
        <p>Siparişiniz oluşturulamadı.</p>
        <a href="/">Ana Sayfaya Dön</a>
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
      const { merchant_oid, status } = req.body;
      
      // İşlem başarılı ise
      if (status === 'success') {
        console.log(`Sipariş onaylandı: ${merchant_oid}`);
        // Siparişi veritabanında onayla
        // db.confirmOrder(merchant_oid);
      } else {
        console.log(`Sipariş reddedildi: ${merchant_oid}`);
        // Siparişi veritabanında iptal et
        // db.cancelOrder(merchant_oid);
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
