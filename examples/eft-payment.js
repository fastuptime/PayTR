const PayTR = require('../index');

/**
 * Bu örnek, PayTR EFT/Havale entegrasyonu için bir token oluşturma işlemini gösterir
 * EFT/Havale işlemleri iFrame API ile benzer şekilde çalışır, ancak payment_type 'eft' olarak ayarlanır
 */
async function createEftPayment() {
  // PayTR yapılandırması
  const paytr = new PayTR({
    merchantId: 'YOUR_MERCHANT_ID',
    merchantKey: 'YOUR_MERCHANT_KEY',
    merchantSalt: 'YOUR_MERCHANT_SALT',
    testMode: true
  });

  try {
    // Sipariş numarası oluştur
    const merchantOid = `SIPARIS_${Date.now()}`;
    
    // iFrame token'ı oluştur - EFT/Havale için paymentType 'eft' olmalı
    const result = await paytr.iframe.createToken({
      userIp: '192.168.1.1',  // Gerçek kullanımda müşterinin IP'si dinamik olarak alınmalı
      merchantOid: merchantOid,
      email: 'customer@example.com',
      paymentAmount: '10000',  // 100.00 TL = 10000
      paymentType: 'eft',      // EFT/Havale işlemi için bu değer 'eft' olmalıdır
      userName: 'John Doe',
      userAddress: 'Customer Address',
      userPhone: '05001234567',
      merchantOkUrl: 'https://yoursite.com/success',
      merchantFailUrl: 'https://yoursite.com/fail',
      userBasket: [
        ['Ürün 1', '5000', 1],
        ['Ürün 2', '5000', 1]
      ],
      // Opsiyonel: Belirli bir bankayı göstermek için
      // bank: 'isbank', // isbank, akbank, denizbank, finansbank, halkbank, ptt, teb, vakifbank, yapikredi, ziraat
      timeoutLimit: '60'  // İşlem süresi (dakika)
    });

    console.log('EFT/Havale token oluşturuldu:', result);
    
    // HTML iframe örneği
    const iframeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>PayTR EFT/Havale Ödeme</title>
          <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
          <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { color: #333; }
              .container { max-width: 800px; margin: 0 auto; }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>PayTR EFT/Havale Ödeme Sayfası</h1>
              <iframe src="https://www.paytr.com/odeme/guvenli/${result.token}" id="paytriframe" frameborder="0" scrolling="no" style="width: 100%;"></iframe>
              <script>iFrameResize({}, '#paytriframe');</script>
          </div>
      </body>
      </html>
    `;
    
    console.log('iFrame HTML sayfasını kullanarak EFT/Havale ödeme formunu gösterebilirsiniz:');
    console.log('--------------------------------------------------------------');
    console.log(iframeHtml);
    
    console.log('\nÖNEMLİ: EFT/Havale işlemlerinde ödeme bildirimi kontrolü için bildirim URL ayarlamalısınız.');
    console.log('PayTR, ödeme onaylandıktan sonra bildirim URL\'nize bir POST isteği gönderecektir.');
    console.log('Bu bildirimi validateHash metodu ile doğrulayabilirsiniz.');
    
  } catch (error) {
    console.error('EFT/Havale token oluşturma hatası:', error.message);
  }
}

createEftPayment();
