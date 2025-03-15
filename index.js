const iframeApi = require('./lib/iframeApi');
const directApi = require('./lib/directApi');
const linkApi = require('./lib/linkApi');
const cardStorage = require('./lib/cardStorage');
const recurringPayment = require('./lib/recurringPayment');
const binService = require('./lib/binService');
const installmentService = require('./lib/installmentService');
const refundApi = require('./lib/refundApi');
const statusApi = require('./lib/statusApi');
const transactionList = require('./lib/transactionList');
const paymentReport = require('./lib/paymentReport');
const platformTransfer = require('./lib/platformTransfer');
const hash = require('./lib/hash');
const config = require('./lib/config');

/**
 * PayTR ana sınıfı
 */
class PayTR {
  /**
   * PayTR örneği oluşturur
   * @param {Object} options - Yapılandırma seçenekleri
   * @param {string} options.merchantId - PayTR mağaza numarası
   * @param {string} options.merchantKey - PayTR mağaza anahtarı
   * @param {string} options.merchantSalt - PayTR mağaza gizli anahtarı
   * @param {boolean} options.testMode - Test modu aktif mi? (varsayılan: false)
   */
  constructor(options) {
    this.config = config.create(options);
    
    // iFrame API metodları
    this.iframe = {
      createToken: (params) => iframeApi.createToken(this.config, params),
      validateHash: (params) => hash.validateCallback(this.config, params)
    };
    
    // Direct API metodları
    this.direct = {
      createPayment: (params) => directApi.createPayment(this.config, params),
      validateHash: (params) => hash.validateCallback(this.config, params)
    };
    
    // Link API metodları
    this.link = {
      create: (params) => linkApi.create(this.config, params),
      delete: (id) => linkApi.delete(this.config, id),
      sendSms: (id, phoneNumber) => linkApi.sendSms(this.config, id, phoneNumber),
      sendEmail: (id, email) => linkApi.sendEmail(this.config, id, email),
      validateCallback: (params) => linkApi.validateCallback(this.config, params)
    };
    
    // Kart Saklama API metodları
    this.card = {
      store: (params) => cardStorage.store(this.config, params),
      list: (utoken) => cardStorage.list(this.config, utoken),
      delete: (utoken, ctoken) => cardStorage.delete(this.config, utoken, ctoken),
      payWithSavedCard: (params) => cardStorage.payWithSavedCard(this.config, params)
    };
    
    // Tekrarlayan Ödeme API metodları
    this.recurring = {
      createPayment: (params) => recurringPayment.createPayment(this.config, params)
    };
    
    // BIN Sorgulama
    this.bin = {
      query: (binNumber) => binService.query(this.config, binNumber)
    };
    
    // Taksit Oranları
    this.installment = {
      getRates: (options) => installmentService.getRates(this.config, options)
    };
    
    // İade API
    this.refund = {
      create: (merchantOid, amount, options) => refundApi.create(this.config, merchantOid, amount, options)
    };
    
    // Durum Sorgulama API
    this.status = {
      query: (merchantOid) => statusApi.query(this.config, merchantOid)
    };
    
    // İşlem Listesi
    this.transaction = {
      list: (startDate, endDate) => transactionList.list(this.config, startDate, endDate)
    };
    
    // Ödeme Raporu
    this.report = {
      summary: (startDate, endDate) => paymentReport.getSummary(this.config, startDate, endDate),
      detail: (date) => paymentReport.getDetail(this.config, date)
    };
    
    // Platform Transfer (Pazaryeri)
    this.platform = {
      transfer: (params) => platformTransfer.transfer(this.config, params),
      getReturnedPayments: (startDate, endDate) => platformTransfer.getReturnedPayments(this.config, startDate, endDate),
      sendReturnedPayment: (transId, transfers) => platformTransfer.sendReturnedPayment(this.config, transId, transfers),
      validateCallback: (params) => platformTransfer.validateCallback(this.config, params)
    };
  }
}

module.exports = PayTR;
