const api = require('./api');
const hash = require('./hash');

/**
 * Platform transfer talebi oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Transfer parametreleri
 * @returns {Promise<Object>} Transfer sonucu
 */
async function transfer(config, params) {
  // Gerekli parametreleri kontrol et
  const requiredParams = [
    'merchantOid', 'transId', 'submerchantAmount', 'totalAmount', 
    'transferName', 'transferIban'
  ];
  
  for (const param of requiredParams) {
    if (!params[param]) {
      throw new Error(`${param} parametresi gereklidir`);
    }
  }
  
  // Token oluştur
  const paytrToken = hash.createHash(
    config.merchantId + params.merchantOid + params.transId + 
    params.submerchantAmount + params.totalAmount + 
    params.transferName + params.transferIban + config.merchantSalt,
    config.merchantKey
  );
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    merchant_oid: params.merchantOid,
    trans_id: params.transId,
    submerchant_amount: params.submerchantAmount,
    total_amount: params.totalAmount,
    transfer_name: params.transferName,
    transfer_iban: params.transferIban,
    paytr_token: paytrToken
  };
  
  // API isteği gönder
  return await api.request(config, '/odeme/platform/transfer', data);
}

/**
 * Geri dönen ödemeleri listeler
 * @param {Object} config - PayTR yapılandırması
 * @param {string} startDate - Başlangıç tarihi (YYYY-MM-DD HH:mm:ss)
 * @param {string} endDate - Bitiş tarihi (YYYY-MM-DD HH:mm:ss)
 * @returns {Promise<Object>} Geri dönen ödemeler listesi
 */
async function getReturnedPayments(config, startDate, endDate) {
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
  return await api.request(config, '/odeme/geri-donen-transfer', data);
}

/**
 * Geri dönen ödeme gönderir
 * @param {Object} config - PayTR yapılandırması
 * @param {string} transId - Transfer ID
 * @param {Array} transfers - Transfer bilgileri
 * @returns {Promise<Object>} İşlem sonucu
 */
async function sendReturnedPayment(config, transId, transfers) {
  if (!transId) {
    throw new Error('transId parametresi gereklidir');
  }
  
  if (!transfers || !Array.isArray(transfers) || transfers.length === 0) {
    throw new Error('transfers parametresi geçerli bir dizi olmalıdır');
  }
  
  // Token oluştur
  const paytrToken = hash.createHash(
    config.merchantId + transId + config.merchantSalt,
    config.merchantKey
  );
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    trans_id: transId,
    trans_info: JSON.stringify(transfers),
    paytr_token: paytrToken
  };
  
  // API isteği gönder
  return await api.request(config, '/odeme/hesaptan-gonder', data);
}

/**
 * Platform transfer geri bildirim doğrulaması yapar
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Geri bildirim parametreleri
 * @returns {boolean} Doğrulama sonucu
 */
function validateCallback(config, params) {
  if (params.mode === 'cashout') {
    // Geri dönen ödemeler geri bildirimi
    const hashStr = params.trans_id + params.processed_result + config.merchantSalt;
    const calculatedHash = hash.createHash(hashStr, config.merchantKey);
    return calculatedHash === params.hash;
  } else {
    // Normal platform transfer geri bildirimi
    const hashStr = JSON.stringify(params.trans_ids) + config.merchantSalt;
    const calculatedHash = hash.createHash(hashStr, config.merchantKey);
    return calculatedHash === params.hash;
  }
}

module.exports = {
  transfer,
  getReturnedPayments,
  sendReturnedPayment,
  validateCallback
};
