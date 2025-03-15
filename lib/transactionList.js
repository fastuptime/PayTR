const api = require('./api');
const hash = require('./hash');

/**
 * İşlem listesini sorgular
 * @param {Object} config - PayTR yapılandırması
 * @param {string} startDate - Başlangıç tarihi (YYYY-MM-DD HH:mm:ss)
 * @param {string} endDate - Bitiş tarihi (YYYY-MM-DD HH:mm:ss)
 * @returns {Promise<Object>} İşlem listesi
 */
async function list(config, startDate, endDate) {
  if (!startDate || !endDate) {
    throw new Error('startDate ve endDate parametreleri gereklidir');
  }
  
  // Tarih aralığı maksimum 3 gün olmalı
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  
  if (diffDays > 3) {
    throw new Error('Tarih aralığı maksimum 3 gün olabilir');
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
  return await api.request(config, '/rapor/islem-dokumu', data);
}

module.exports = {
  list
};
