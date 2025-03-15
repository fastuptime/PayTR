const crypto = require('crypto');

/**
 * HMAC-SHA256 hash oluşturur ve base64 formatına çevirir
 * @param {string} data - Hash'lenecek veri
 * @param {string} key - Hash anahtarı
 * @returns {string} Base64 formatında hash
 */
function createHash(data, key) {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest('base64');
}

/**
 * iFrame API için token oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Token parametreleri
 * @returns {string} Oluşturulan token
 */
function createIframeToken(config, params) {
  const hashStr = 
    config.merchantId + 
    params.userIp + 
    params.merchantOid + 
    params.email + 
    params.paymentAmount + 
    params.paymentType + 
    params.installmentCount + 
    params.currencyCode + 
    params.testMode + 
    params.noInstallment + 
    params.maxInstallment + 
    params.noPayment + 
    config.merchantSalt;

  return createHash(hashStr, config.merchantKey);
}

/**
 * Direct API için token oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Token parametreleri
 * @returns {string} Oluşturulan token
 */
function createDirectToken(config, params) {
  const hashStr = 
    config.merchantId + 
    params.userIp + 
    params.merchantOid + 
    params.email + 
    params.paymentAmount + 
    params.paymentType + 
    params.installmentCount + 
    params.currencyCode + 
    params.testMode + 
    params.non3d + 
    config.merchantSalt;

  return createHash(hashStr, config.merchantKey);
}

/**
 * Link API için token oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Token parametreleri
 * @returns {string} Oluşturulan token
 */
function createLinkToken(config, params) {
  let requiredData = 
    params.name +
    params.price + 
    params.currency +
    params.maxInstallment +
    params.linkType +
    params.lang;

  if (params.linkType === 'product') {
    requiredData += params.minCount;
  } else if (params.linkType === 'collection') {
    requiredData += params.email;
  }

  return createHash(requiredData + config.merchantSalt, config.merchantKey);
}

/**
 * Geri bildirim hash doğrulaması yapar
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Geri bildirim parametreleri
 * @returns {boolean} Hash doğrulama sonucu
 */
function validateCallback(config, params) {
  const hashStr = params.merchantOid + config.merchantSalt + params.status + params.totalAmount;
  const hash = createHash(hashStr, config.merchantKey);
  
  return hash === params.hash;
}

/**
 * Link API geri bildirim hash doğrulaması yapar
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Geri bildirim parametreleri
 * @returns {boolean} Hash doğrulama sonucu
 */
function validateLinkCallback(config, params) {
  const hashStr = params.callbackId + params.merchantOid + config.merchantSalt + params.status + params.totalAmount;
  const hash = createHash(hashStr, config.merchantKey);
  
  return hash === params.hash;
}

module.exports = {
  createHash,
  createIframeToken,
  createDirectToken,
  createLinkToken,
  validateCallback,
  validateLinkCallback
};
