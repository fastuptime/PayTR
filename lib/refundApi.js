const api = require('./api');
const hash = require('./hash');

/**
 * İade işlemi oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {string} merchantOid - Sipariş numarası
 * @param {number} amount - İade edilecek tutar
 * @param {Object} options - İade seçenekleri
 * @returns {Promise<Object>} İade sonucu
 */
async function create(config, merchantOid, amount, options = {}) {
  if (!merchantOid) {
    throw new Error('merchantOid parametresi gereklidir');
  }
  
  if (!amount || amount <= 0) {
    throw new Error('amount parametresi geçersiz');
  }
  
  // Token oluştur
  const paytrToken = hash.createHash(
    config.merchantId + merchantOid + amount + config.merchantSalt,
    config.merchantKey
  );
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    merchant_oid: merchantOid,
    return_amount: amount,
    paytr_token: paytrToken
  };
  
  // Opsiyonel referans numarası
  if (options && options.referenceNo) {
    data.reference_no = options.referenceNo;
  }
  
  // API isteği gönder
  return await api.request(config, '/odeme/iade', data);
}

module.exports = {
  create
};
