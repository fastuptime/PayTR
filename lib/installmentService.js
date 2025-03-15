const api = require('./api');
const hash = require('./hash');
const crypto = require('crypto');

/**
 * Taksit oranlarını sorgular
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} options - Sorgu seçenekleri
 * @returns {Promise<Object>} Taksit oranları
 */
async function getRates(config, options = {}) {
  // Rastgele bir request_id oluştur
  const requestId = crypto.randomBytes(16).toString('hex');
  
  // Token oluştur
  const paytrToken = hash.createHash(config.merchantId + requestId + config.merchantSalt, config.merchantKey);
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    request_id: requestId,
    paytr_token: paytrToken
  };
  
  // Opsiyonel parametreler
  if (options.singleRatio) data.single_ratio = options.singleRatio;
  if (options.abroadRatio) data.abroad_ratio = options.abroadRatio;
  
  // API isteği gönder
  return await api.request(config, '/odeme/taksit-oranlari', data);
}

module.exports = {
  getRates
};
