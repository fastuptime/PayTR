const api = require('./api');
const hash = require('./hash');

/**
 * Ödeme özetini sorgular
 * @param {Object} config - PayTR yapılandırması
 * @param {string} startDate - Başlangıç tarihi (YYYY-MM-DD)
 * @param {string} endDate - Bitiş tarihi (YYYY-MM-DD)
 * @returns {Promise<Object>} Ödeme özeti
 */
async function getSummary(config, startDate, endDate) {
  if (!startDate || !endDate) {
    throw new Error('startDate ve endDate parametreleri gereklidir');
  }
  
  // Token oluştur
  const paytrToken = hash.createHash(
    config.merchantId + startDate + endDate + config.merchantSalt,
    config.merchantKey
  );
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    start_date: startDate,
    end_date: endDate,
    paytr_token: paytrToken
  };
  
  // API isteği gönder
  return await api.request(config, '/rapor/odeme-dokumu', data);
}

/**
 * Ödeme detayını sorgular
 * @param {Object} config - PayTR yapılandırması
 * @param {string} date - Tarih (YYYY-MM-DD)
 * @returns {Promise<Object>} Ödeme detayı
 */
async function getDetail(config, date) {
  if (!date) {
    throw new Error('date parametresi gereklidir');
  }
  
  // Token oluştur
  const paytrToken = hash.createHash(
    config.merchantId + date + config.merchantSalt,
    config.merchantKey
  );
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    date: date,
    paytr_token: paytrToken
  };
  
  // API isteği gönder
  return await api.request(config, '/rapor/odeme-detayi', data);
}

module.exports = {
  getSummary,
  getDetail
};
