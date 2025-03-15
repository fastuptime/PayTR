const api = require('./api');
const hash = require('./hash');

/**
 * BIN numarası sorgular
 * @param {Object} config - PayTR yapılandırması
 * @param {string} binNumber - Kart BIN numarası (ilk 6 veya 8 hane)
 * @returns {Promise<Object>} BIN bilgileri
 */
async function query(config, binNumber) {
  if (!binNumber || binNumber.length < 6) {
    throw new Error('BIN numarası geçersiz. Minimum 6 hane gereklidir.');
  }

  // BIN numarasını maksimum 8 haneye sınırla
  const trimmedBin = binNumber.replace(/\s/g, '').substring(0, 8);
  
  // Token oluştur
  const paytrToken = hash.createHash(trimmedBin + config.merchantId + config.merchantSalt, config.merchantKey);
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    bin_number: trimmedBin,
    paytr_token: paytrToken
  };
  
  // API isteği gönder
  return await api.request(config, '/odeme/api/bin-detail', data);
}

module.exports = {
  query
};
