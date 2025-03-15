const PayTR = require('../index');

async function handleSavedCardPayment() {
  // PayTR yapılandırması
  const paytr = new PayTR({
    merchantId: 'YOUR_MERCHANT_ID',
    merchantKey: 'YOUR_MERCHANT_KEY',
    merchantSalt: 'YOUR_MERCHANT_SALT',
    testMode: true
  });

  try {
    // Örnek bir utoken (uygulamanızda önceden kaydedilmiş olmalı)
    const userToken = 'SAVED_USER_TOKEN';
    
    // Kullanıcının kayıtlı kartlarını getir
    const cards = await paytr.card.list(userToken);
    
    console.log('Kullanıcının kayıtlı kartları:');
    cards.forEach((card, index) => {
      console.log(`${index + 1}. Kart: ${card.c_name} - **** **** **** ${card.last_4}`);
    });
    
    // İlk kartı kullanarak ödeme yap (gerçek uygulamada kullanıcı seçim yapmalı)
    if (cards && cards.length > 0) {
      const selectedCard = cards[0];
      console.log(`${selectedCard.c_name} kartıyla ödeme yapılıyor...`);
      
      // Sipariş numarası oluştur
      const merchantOid = `SIP_${Date.now()}`;
      
      // Kayıtlı kart ile ödeme
      const result = await paytr.card.payWithSavedCard({
        userIp: '192.168.1.1', // Gerçek kullanımda müşterinin IP'si dinamik olarak alınmalı
        merchantOid: merchantOid,
        email: 'customer@example.com',
        paymentAmount: '25000', // 250.00 TL = 25000
        userName: 'John Doe',
        userAddress: 'Customer Address',
        userPhone: '05001234567',
        merchantOkUrl: 'https://yoursite.com/success',
        merchantFailUrl: 'https://yoursite.com/fail',
        userBasket: [
          ['Premium Paket', '25000', 1]
        ],
        utoken: userToken,            // Kullanıcının token'ı
        ctoken: selectedCard.ctoken,  // Seçilen kartın token'ı
        cvv: '000'                    // Kart CVV gerektiriyorsa
      });
      
      console.log('Ödeme sonucu:', result);
    } else {
      console.log('Kullanıcının kayıtlı kartı bulunamadı.');
    }
    
  } catch (error) {
    console.error('İşlem hatası:', error.message);
  }
}

handleSavedCardPayment();
