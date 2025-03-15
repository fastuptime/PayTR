const api = require('./api');
const hash = require('./hash');

/**
 * Ödeme linki oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Link parametreleri
 * @returns {Promise<Object>} Oluşturulan link bilgileri
 */
async function create(config, params) {
  // Gerekli parametreleri kontrol et
  const requiredParams = ['name', 'price', 'currency', 'maxInstallment', 'linkType'];
  
  for (const param of requiredParams) {
    if (!params[param]) {
      throw new Error(`${param} parametresi gereklidir`);
    }
  }
  
  // Link tipine göre ek kontroller
  if (params.linkType === 'product' && !params.minCount) {
    throw new Error('product link tipi için minCount parametresi gereklidir');
  }
  
  if (params.linkType === 'collection' && !params.email) {
    throw new Error('collection link tipi için email parametresi gereklidir');
  }
  
  // Token oluştur
  const paytrToken = hash.createLinkToken(config, params);
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    name: params.name,
    price: params.price,
    currency: params.currency,
    max_installment: params.maxInstallment,
    link_type: params.linkType,
    lang: params.lang || 'tr',
    paytr_token: paytrToken
  };
  
  // Link tipine göre ek parametreler
  if (params.linkType === 'product') {
    data.min_count = params.minCount;
    if (params.maxCount) data.max_count = params.maxCount;
  } else if (params.linkType === 'collection') {
    data.email = params.email;
  }
  
  // Opsiyonel parametreler
  if (params.getQr) data.get_qr = params.getQr;
  if (params.pft) data.pft = params.pft;
  if (params.expiryDate) data.expiry_date = params.expiryDate;
  if (params.callbackLink) data.callback_link = params.callbackLink;
  if (params.callbackId) data.callback_id = params.callbackId;
  if (params.debug) data.debug_on = params.debug;
  
  // API isteği gönder
  return await api.request(config, '/odeme/api/link/create', data);
}

/**
 * Ödeme linki siler
 * @param {Object} config - PayTR yapılandırması
 * @param {string} id - Link ID
 * @returns {Promise<Object>} Silme işlemi sonucu
 */
async function deleteLink(config, id) {
  const paytrToken = hash.createHash(id + config.merchantId + config.merchantSalt, config.merchantKey);
  
  const data = {
    merchant_id: config.merchantId,
    id: id,
    paytr_token: paytrToken,
    debug_on: '1'
  };
  
  return await api.request(config, '/odeme/api/link/delete', data);
}

/**
 * Ödeme linkini SMS ile gönderir
 * @param {Object} config - PayTR yapılandırması
 * @param {string} id - Link ID
 * @param {string} phoneNumber - Telefon numarası
 * @returns {Promise<Object>} SMS gönderim sonucu
 */
async function sendSms(config, id, phoneNumber) {
  const paytrToken = hash.createHash(id + config.merchantId + phoneNumber + config.merchantSalt, config.merchantKey);
  
  const data = {
    merchant_id: config.merchantId,
    id: id,
    cell_phone: phoneNumber,
    paytr_token: paytrToken,
    debug_on: '1'
  };
  
  return await api.request(config, '/odeme/api/link/send-sms', data);
}

/**
 * Ödeme linkini email ile gönderir
 * @param {Object} config - PayTR yapılandırması
 * @param {string} id - Link ID
 * @param {string} email - E-posta adresi
 * @returns {Promise<Object>} Email gönderim sonucu
 */
async function sendEmail(config, id, email) {
  const paytrToken = hash.createHash(id + config.merchantId + email + config.merchantSalt, config.merchantKey);
  
  const data = {
    merchant_id: config.merchantId,
    id: id,
    email: email,
    paytr_token: paytrToken,
    debug_on: '1'
  };
  
  return await api.request(config, '/odeme/api/link/send-email', data);
}

/**
 * Link API geri bildirim doğrulaması yapar
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Geri bildirim parametreleri
 * @returns {boolean} Doğrulama sonucu
 */
function validateCallback(config, params) {
  return hash.validateLinkCallback(config, params);
}

module.exports = {
  create,
  delete: deleteLink,
  sendSms,
  sendEmail,
  validateCallback
};
