const api = require('./api');
const hash = require('./hash');

/**
 * Sipariş durumunu sorgular
 * @param {Object} config - PayTR yapılandırması
 * @param {string} merchantOid - Sipariş numarası
 * @returns {Promise<Object>} Sipariş durum bilgileri
 */
async function query(config, merchantOid) {
  if (!merchantOid) {
    throw new Error('merchantOid parametresi gereklidir');
  }
  
  // Token oluştur
  const paytrToken = hash.createHash(
    config.merchantId + merchantOid + config.merchantSalt,
    config.merchantKey
  );
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    merchant_oid: merchantOid,
    paytr_token: paytrToken
  };
  
  // API isteği gönder
  return await api.request(config, '/odeme/durum-sorgu', data);
}

module.exports = {
  query
};
