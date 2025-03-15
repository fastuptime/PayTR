# PayTR Node.js Integration Module

[![npm version](https://img.shields.io/npm/v/paytr-node.svg)](https://www.npmjs.com/package/paytr-node)
[![GitHub license](https://img.shields.io/github/license/fastuptime/PayTR)](https://github.com/fastuptime/PayTR/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/paytr-node.svg)](https://www.npmjs.com/package/paytr-node)

A comprehensive Node.js integration module for [PayTR](https://www.paytr.com) payment gateway. Supports all PayTR payment APIs including iFrame API, Direct API, and Link API.

*[Türkçe açıklamalar için aşağıya bakın](#paytr-nodejs-entegrasyon-modülü)*

## Features

- iFrame API integration
- Direct API integration
- Link API integration
- Card Storage and Payments with Saved Cards
- Recurring Payments
- BIN Inquiry
- Installment Rate Queries
- Refund Operations
- Order Status Queries
- Transaction List
- Payment Reports
- Platform Transfers (Marketplace)
- EFT/Bank Transfer support

## Installation

```bash
npm install paytr-node
```

## Quick Start

### Configuration

```javascript
const PayTR = require('paytr-node');

const paytr = new PayTR({
  merchantId: 'YOUR_MERCHANT_ID',
  merchantKey: 'YOUR_MERCHANT_KEY', 
  merchantSalt: 'YOUR_MERCHANT_SALT',
  testMode: true // true for test mode, false for live mode
});
```

### iFrame API Payment

```javascript
const token = await paytr.iframe.createToken({
  userIp: '192.168.1.1',
  merchantOid: 'ORDER_123',
  email: 'customer@example.com',
  paymentAmount: '10000', // 100.00 TL = 10000
  userName: 'John Doe',
  userAddress: 'Customer Address',
  userPhone: '05001234567',
  merchantOkUrl: 'https://yoursite.com/success',
  merchantFailUrl: 'https://yoursite.com/fail',
  userBasket: [
    ['Product 1', '5000', 1], // Product name, price (50.00 TL), quantity
    ['Product 2', '5000', 1]
  ]
});

// Use token.token to show the payment page
```

HTML iframe usage:
```html
<script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
<iframe src="https://www.paytr.com/odeme/guvenli/<?php echo $token['token']; ?>" id="paytriframe" frameborder="0" scrolling="no" style="width:100%;"></iframe>
<script>iFrameResize({}, '#paytriframe');</script>
```

### Direct API Payment

```javascript
const result = await paytr.direct.createPayment({
  userIp: '192.168.1.1',
  merchantOid: 'ORDER_123',
  email: 'customer@example.com',
  paymentAmount: '10000', // 100.00 TL = 10000
  cardOwner: 'John Doe',
  cardNumber: '4355084355084358',
  cardExpireMonth: '12',
  cardExpireYear: '30',
  cardCvc: '000',
  installmentCount: '0', // Single payment
  userName: 'John Doe',
  userAddress: 'Customer Address',
  userPhone: '05001234567',
  merchantOkUrl: 'https://yoursite.com/success',
  merchantFailUrl: 'https://yoursite.com/fail',
  userBasket: [
    ['Product 1', '5000', 1],
    ['Product 2', '5000', 1]
  ]
});

// Process payment result
```

## Express.js Example

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const PayTR = require('paytr-node');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PayTR configuration
const paytr = new PayTR({
  merchantId: 'YOUR_MERCHANT_ID',
  merchantKey: 'YOUR_MERCHANT_KEY',
  merchantSalt: 'YOUR_MERCHANT_SALT',
  testMode: true
});

// Create payment page
app.post('/create-payment', async (req, res) => {
  try {
    const merchantOid = `ORDER_${Date.now()}`;
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    const result = await paytr.iframe.createToken({
      userIp: userIp,
      merchantOid: merchantOid,
      email: req.body.email || 'customer@example.com',
      paymentAmount: req.body.amount || '10000',
      userName: req.body.name || 'John Doe',
      userAddress: req.body.address || 'Customer Address',
      userPhone: req.body.phone || '05001234567',
      merchantOkUrl: `${req.protocol}://${req.get('host')}/success`,
      merchantFailUrl: `${req.protocol}://${req.get('host')}/fail`,
      userBasket: [
        [req.body.productName || 'Product', req.body.amount || '10000', 1]
      ]
    });

    res.send(`
      <html>
        <head>
          <title>PayTR Payment</title>
          <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
        </head>
        <body>
          <h1>Payment Page</h1>
          <iframe src="https://www.paytr.com/odeme/guvenli/${result.token}" id="paytriframe" frameborder="0" scrolling="no" style="width: 100%;"></iframe>
          <script>iFrameResize({}, '#paytriframe');</script>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Payment callback handler
app.post('/payment-callback', (req, res) => {
  try {
    const isValid = paytr.iframe.validateHash(req.body);
    
    if (isValid) {
      const { merchant_oid, status } = req.body;
      
      if (status === 'success') {
        console.log(`Order confirmed: ${merchant_oid}`);
        // Update order in database
      } else {
        console.log(`Order rejected: ${merchant_oid}`);
        // Cancel order in database
      }
      
      res.send('OK');
    } else {
      res.status(400).send('Invalid hash');
    }
  } catch (error) {
    res.status(500).send('Error');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Complete Documentation

For detailed documentation of all features, [visit our GitHub repository](https://github.com/fastuptime/PayTR).

## License

MIT License

---

# PayTR Node.js Entegrasyon Modülü

[![npm version](https://img.shields.io/npm/v/paytr-node.svg)](https://www.npmjs.com/package/paytr-node)
[![GitHub license](https://img.shields.io/github/license/fastuptime/PayTR)](https://github.com/fastuptime/PayTR/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/paytr-node.svg)](https://www.npmjs.com/package/paytr-node)

[PayTR](https://www.paytr.com) ödeme geçidi için kapsamlı bir Node.js entegrasyon modülüdür. iFrame API, Direct API ve Link API dahil olmak üzere PayTR'nin tüm ödeme API'lerini destekler.

## Özellikler

- iFrame API entegrasyonu
- Direct API entegrasyonu
- Link API entegrasyonu
- Kart Saklama ve Kayıtlı Kart ile Ödeme
- Tekrarlayan Ödemeler
- BIN Sorgulama
- Taksit Oranları Sorgulama
- İade İşlemleri
- Durum Sorgulama
- İşlem Listesi
- Ödeme Raporu
- Platform Transfer (Pazaryeri)
- EFT/Havale desteği

## Kurulum

```bash
npm install paytr-node
```

## Hızlı Başlangıç

### Yapılandırma

```javascript
const PayTR = require('paytr-node');

const paytr = new PayTR({
  merchantId: 'MERCHANT_ID',
  merchantKey: 'MERCHANT_KEY', 
  merchantSalt: 'MERCHANT_SALT',
  testMode: true // Test modu için true, canlı mod için false
});
```

### iFrame API ile Ödeme

```javascript
const token = await paytr.iframe.createToken({
  userIp: '192.168.1.1',
  merchantOid: 'SIPARIS_123',
  email: 'musteri@example.com',
  paymentAmount: '10000', // 100.00 TL = 10000
  userName: 'Ahmet Yılmaz',
  userAddress: 'Müşteri Adresi',
  userPhone: '05001234567',
  merchantOkUrl: 'https://siteniz.com/basarili',
  merchantFailUrl: 'https://siteniz.com/basarisiz',
  userBasket: [
    ['Ürün 1', '5000', 1], // Ürün adı, fiyat (50.00 TL), adet
    ['Ürün 2', '5000', 1]
  ]
});

// token.token kullanılarak ödeme sayfası gösterilir
```

HTML iframe kullanımı:
```html
<script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
<iframe src="https://www.paytr.com/odeme/guvenli/<?php echo $token['token']; ?>" id="paytriframe" frameborder="0" scrolling="no" style="width:100%;"></iframe>
<script>iFrameResize({}, '#paytriframe');</script>
```

### Direct API ile Ödeme

```javascript
const result = await paytr.direct.createPayment({
  userIp: '192.168.1.1',
  merchantOid: 'SIPARIS_123',
  email: 'musteri@example.com',
  paymentAmount: '10000', // 100.00 TL = 10000
  cardOwner: 'Ahmet Yılmaz',
  cardNumber: '4355084355084358',
  cardExpireMonth: '12',
  cardExpireYear: '30',
  cardCvc: '000',
  installmentCount: '0', // Tek çekim
  userName: 'Ahmet Yılmaz',
  userAddress: 'Müşteri Adresi',
  userPhone: '05001234567',
  merchantOkUrl: 'https://siteniz.com/basarili',
  merchantFailUrl: 'https://siteniz.com/basarisiz',
  userBasket: [
    ['Ürün 1', '5000', 1],
    ['Ürün 2', '5000', 1]
  ]
});

// result ile ödeme sonucu işlenir
```

## Express.js Örneği

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const PayTR = require('paytr-node');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PayTR yapılandırması
const paytr = new PayTR({
  merchantId: 'MERCHANT_ID',
  merchantKey: 'MERCHANT_KEY',
  merchantSalt: 'MERCHANT_SALT',
  testMode: true
});

// Ödeme sayfası oluştur
app.post('/odeme-olustur', async (req, res) => {
  try {
    const merchantOid = `SIPARIS_${Date.now()}`;
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    const result = await paytr.iframe.createToken({
      userIp: userIp,
      merchantOid: merchantOid,
      email: req.body.email || 'musteri@example.com',
      paymentAmount: req.body.tutar || '10000',
      userName: req.body.isim || 'Ahmet Yılmaz',
      userAddress: req.body.adres || 'Müşteri Adresi',
      userPhone: req.body.telefon || '05001234567',
      merchantOkUrl: `${req.protocol}://${req.get('host')}/basarili`,
      merchantFailUrl: `${req.protocol}://${req.get('host')}/basarisiz`,
      userBasket: [
        [req.body.urunAdi || 'Ürün', req.body.tutar || '10000', 1]
      ]
    });

    res.send(`
      <html>
        <head>
          <title>PayTR Ödeme</title>
          <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
        </head>
        <body>
          <h1>Ödeme Sayfası</h1>
          <iframe src="https://www.paytr.com/odeme/guvenli/${result.token}" id="paytriframe" frameborder="0" scrolling="no" style="width: 100%;"></iframe>
          <script>iFrameResize({}, '#paytriframe');</script>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`Hata: ${error.message}`);
  }
});

// Ödeme bildirimi işleyici
app.post('/odeme-bildirimi', (req, res) => {
  try {
    const isValid = paytr.iframe.validateHash(req.body);
    
    if (isValid) {
      const { merchant_oid, status } = req.body;
      
      if (status === 'success') {
        console.log(`Sipariş onaylandı: ${merchant_oid}`);
        // Siparişi veritabanında güncelle
      } else {
        console.log(`Sipariş reddedildi: ${merchant_oid}`);
        // Siparişi veritabanında iptal et
      }
      
      res.send('OK');
    } else {
      res.status(400).send('Geçersiz hash');
    }
  } catch (error) {
    res.status(500).send('Hata');
  }
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});
```

## Tüm Dökümanlar

Tüm özelliklerin detaylı dökümentasyonu için [GitHub repomuzu ziyaret edin](https://github.com/fastuptime/PayTR).

## Lisans

MIT Lisansı
