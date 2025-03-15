const assert = require('assert');
const PayTR = require('../index');

describe('PayTR', () => {
  describe('Yapılandırma', () => {
    it('Gerekli parametreler olmadan yapılandırılamaz', () => {
      assert.throws(() => new PayTR(), Error);
      assert.throws(() => new PayTR({}), Error);
      assert.throws(() => new PayTR({ merchantId: '123' }), Error);
      assert.throws(() => new PayTR({ merchantId: '123', merchantKey: 'key' }), Error);
      
      assert.doesNotThrow(() => new PayTR({
        merchantId: '123',
        merchantKey: 'key',
        merchantSalt: 'salt'
      }));
    });
    
    it('Varsayılan değerlerle yapılandırılabilir', () => {
      const paytr = new PayTR({
        merchantId: '123',
        merchantKey: 'key',
        merchantSalt: 'salt'
      });
      
      assert.strictEqual(paytr.config.testMode, false);
      assert.strictEqual(paytr.config.debug, false);
      assert.strictEqual(paytr.config.timeout, 30000);
      assert.strictEqual(paytr.config.baseUrl, 'https://www.paytr.com');
    });
    
    it('Özel değerlerle yapılandırılabilir', () => {
      const paytr = new PayTR({
        merchantId: '123',
        merchantKey: 'key',
        merchantSalt: 'salt',
        testMode: true,
        debug: true,
        timeout: 60000,
        baseUrl: 'https://test.paytr.com'
      });
      
      assert.strictEqual(paytr.config.testMode, true);
      assert.strictEqual(paytr.config.debug, true);
      assert.strictEqual(paytr.config.timeout, 60000);
      assert.strictEqual(paytr.config.baseUrl, 'https://test.paytr.com');
    });
  });
  
  describe('API Metodları', () => {
    it('Tüm gerekli API metodları mevcut', () => {
      const paytr = new PayTR({
        merchantId: '123',
        merchantKey: 'key',
        merchantSalt: 'salt'
      });
      
      // iFrame API
      assert.strictEqual(typeof paytr.iframe.createToken, 'function');
      assert.strictEqual(typeof paytr.iframe.validateHash, 'function');
      
      // Direct API
      assert.strictEqual(typeof paytr.direct.createPayment, 'function');
      
      // Link API
      assert.strictEqual(typeof paytr.link.create, 'function');
      assert.strictEqual(typeof paytr.link.delete, 'function');
      assert.strictEqual(typeof paytr.link.sendSms, 'function');
      assert.strictEqual(typeof paytr.link.sendEmail, 'function');
      
      // Kart Saklama
      assert.strictEqual(typeof paytr.card.store, 'function');
      assert.strictEqual(typeof paytr.card.list, 'function');
      assert.strictEqual(typeof paytr.card.delete, 'function');
      assert.strictEqual(typeof paytr.card.payWithSavedCard, 'function');
      
      // Diğer metodlar
      assert.strictEqual(typeof paytr.bin.query, 'function');
      assert.strictEqual(typeof paytr.installment.getRates, 'function');
      assert.strictEqual(typeof paytr.refund.create, 'function');
      assert.strictEqual(typeof paytr.status.query, 'function');
      assert.strictEqual(typeof paytr.transaction.list, 'function');
      assert.strictEqual(typeof paytr.report.summary, 'function');
      assert.strictEqual(typeof paytr.report.detail, 'function');
      assert.strictEqual(typeof paytr.platform.transfer, 'function');
    });
  });
});
