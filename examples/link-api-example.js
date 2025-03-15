const PayTR = require('../index');

/**
 * Bu örnek, PayTR Link API kullanarak ödeme linkleri oluşturma, silme ve gönderme işlemlerini gösterir
 */
async function linkApiExample() {
  // PayTR yapılandırması
  const paytr = new PayTR({
    merchantId: 'YOUR_MERCHANT_ID',
    merchantKey: 'YOUR_MERCHANT_KEY',
    merchantSalt: 'YOUR_MERCHANT_SALT',
    testMode: true
  });

  try {
    console.log('PayTR Link API Örneği');
    console.log('---------------------');
    
    // 1. Ürün tipi için ödeme linki oluştur
    console.log('\n1. Ürün tipi için ödeme linki oluşturuluyor...');
    const productLink = await paytr.link.create({
      name: 'Premium Üyelik Paketi',
      price: '12500',                  // 125.00 TL = 12500
      currency: 'TL',
      maxInstallment: '12',            // Maksimum taksit sayısı
      linkType: 'product',             // Ürün/Hizmet satışı için "product"
      minCount: '1',                   // Minimum satın alınabilecek adet
      maxCount: '5',                   // Maksimum satın alınabilecek adet (opsiyonel)
      pft: '3',                        // 3 taksite kadar Peşin Fiyatına Taksit
      lang: 'tr',                      // Dil: tr veya en
      getQr: '1',                      // QR kod oluştur
      expiryDate: '2024-12-31 23:59:59', // Son kullanma tarihi (opsiyonel)
      callbackLink: 'https://yoursite.com/link-notifications', // Bildirim URL (opsiyonel)
      callbackId: 'PREMIUM_UYELIK_001', // Bildirimde dönülecek ID (opsiyonel)
      debug: '1'                       // Debug modu (opsiyonel)
    });
    
    console.log('Ürün linki oluşturuldu:');
    console.log('ID:', productLink.id);
    console.log('Link:', productLink.link);
    
    // QR kod base64 oluşturulduysa göster
    if (productLink.qr) {
      console.log('QR Kod (base64):', productLink.qr.substring(0, 50) + '...');
    }
    
    // 2. Tahsilat tipi için ödeme linki oluştur
    console.log('\n2. Tahsilat tipi için ödeme linki oluşturuluyor...');
    const collectionLink = await paytr.link.create({
      name: 'Fatura Ödemesi',
      price: '35000',                  // 350.00 TL = 35000
      currency: 'TL',
      maxInstallment: '6',             // Maksimum taksit sayısı
      linkType: 'collection',          // Fatura/Cari tahsilat için "collection"
      email: 'customer@example.com',   // collection tipinde email zorunlu
      lang: 'tr'                       // Dil: tr veya en
    });
    
    console.log('Tahsilat linki oluşturuldu:');
    console.log('ID:', collectionLink.id);
    console.log('Link:', collectionLink.link);
    
    // 3. Ödeme linkini SMS ile gönder
    console.log('\n3. Ödeme linki SMS ile gönderiliyor...');
    // Not: Gerçek telefon numarası kullanın, örnek amaçlıdır
    const smsResult = await paytr.link.sendSms(productLink.id, '05001234567');
    console.log('SMS gönderim sonucu:', smsResult.status === 'success' ? 'Başarılı' : 'Başarısız');
    
    // 4. Ödeme linkini Email ile gönder
    console.log('\n4. Ödeme linki Email ile gönderiliyor...');
    const emailResult = await paytr.link.sendEmail(productLink.id, 'customer@example.com');
    console.log('Email gönderim sonucu:', emailResult.status === 'success' ? 'Başarılı' : 'Başarısız');
    
    // 5. Link silme örneği
    console.log('\n5. Ödeme linki siliniyor...');
    // Silmek istediğiniz zaman bu kodu kullanabilirsiniz
    /*
    const deleteResult = await paytr.link.delete(productLink.id);
    console.log('Link silme sonucu:', deleteResult.status === 'success' ? 'Başarılı' : 'Başarısız');
    */
    
    console.log('\n6. Bildirim doğrulama örneği:');
    console.log(`
    // Link API Callback URL'inizde bu şekilde bildirim doğrulayabilirsiniz
    app.post('/link-notifications', (req, res) => {
      try {
        const isValid = paytr.link.validateCallback(req.body);
        
        if (isValid) {
          const { status, merchant_oid, total_amount, callback_id } = req.body;
          
          if (status === 'success') {
            console.log('Ödeme başarılı - Callback ID:', callback_id);
            // İşlemlerinizi gerçekleştirin
          }
          
          res.send('OK'); // PayTR'a OK yanıtı vermelisiniz
        } else {
          res.status(400).send('Invalid hash');
        }
      } catch (error) {
        res.status(500).send('Error');
      }
    });`);
    
  } catch (error) {
    console.error('Link API hatası:', error.message);
  }
}

linkApiExample();
