const PayTR = require('../index');

async function makeDirectPayment() {
  // PayTR yapılandırması
  const paytr = new PayTR({
    merchantId: 'YOUR_MERCHANT_ID',
    merchantKey: 'YOUR_MERCHANT_KEY',
    merchantSalt: 'YOUR_MERCHANT_SALT',
    testMode: true
  });

  try {
    // Sipariş numarası oluştur
    const merchantOid = `SIP_${Date.now()}`;
    
    // Direct API ile ödeme al
    const result = await paytr.direct.createPayment({
      userIp: '192.168.1.1', // Gerçek kullanımda müşterinin IP'si dinamik olarak alınmalı
      merchantOid: merchantOid,
      email: 'customer@example.com',
      paymentAmount: '10000', // 100.00 TL = 10000
      cardOwner: 'Test Card',
      cardNumber: '4355084355084358', // Test kartı
      cardExpireMonth: '12',
      cardExpireYear: '30',
      cardCvc: '000',
      userName: 'John Doe',
      userAddress: 'Customer Address',
      userPhone: '05001234567',
      merchantOkUrl: 'https://yoursite.com/success',
      merchantFailUrl: 'https://yoursite.com/fail',
      userBasket: [
        ['Test Ürün', '10000', 1]
      ]
    });

    console.log('Ödeme sonucu:', result);
    
    // 3D Secure sayfası URL'i
    if (result.html && result.html.length > 0) {
      console.log('3D Secure sayfası için HTML içeriği:', result.html.substring(0, 100) + '...');
    } else if (result.url && result.url.length > 0) {
      console.log('3D Secure sayfası URL:', result.url);
    }
    
  } catch (error) {
    console.error('Ödeme hatası:', error.message);
  }
}

makeDirectPayment();
