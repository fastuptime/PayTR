const api = require('./api');
const hash = require('./hash');

/**
 * Kart saklar (ödeme ile birlikte)
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Ödeme ve kart saklama parametreleri
 * @returns {Promise<Object>} Ödeme ve kart saklama sonucu
 */
async function store(config, params) {
  // Direct API ile ödeme yaparken kart saklama için params.storeCard = '1' ayarlanır
  params.storeCard = '1';
  
  // DirectApi modülündeki createPayment fonksiyonunu kullanarak ödeme ve kart saklama yapılır
  const directApi = require('./directApi');
  return directApi.createPayment(config, params);
}

/**
 * Kayıtlı kartları listeler
 * @param {Object} config - PayTR yapılandırması
 * @param {string} utoken - Kullanıcı token
 * @returns {Promise<Array>} Kayıtlı kartlar listesi
 */
async function list(config, utoken) {
  const paytrToken = hash.createHash(utoken + config.merchantSalt, config.merchantKey);
  
  const data = {
    merchant_id: config.merchantId,
    utoken: utoken,
    paytr_token: paytrToken
  };
  
  return await api.request(config, '/odeme/capi/list', data);
}

/**
 * Kayıtlı kart siler
 * @param {Object} config - PayTR yapılandırması
 * @param {string} utoken - Kullanıcı token
 * @param {string} ctoken - Kart token
 * @returns {Promise<Object>} Silme işlemi sonucu
 */
async function deleteCard(config, utoken, ctoken) {
  const paytrToken = hash.createHash(ctoken + utoken + config.merchantSalt, config.merchantKey);
  
  const data = {
    merchant_id: config.merchantId,
    utoken: utoken,
    ctoken: ctoken,
    paytr_token: paytrToken
  };
  
  return await api.request(config, '/odeme/capi/delete', data);
}

/**
 * Kayıtlı kart ile ödeme yapar
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Ödeme parametreleri
 * @returns {Promise<Object>} Ödeme sonucu
 */
async function payWithSavedCard(config, params) {
  // Gerekli parametreleri kontrol et
  const requiredParams = [
    'userIp', 'merchantOid', 'email', 'paymentAmount', 
    'userName', 'userAddress', 'userPhone', 'merchantOkUrl', 'merchantFailUrl', 'userBasket',
    'utoken', 'ctoken'
  ];
  
  for (const param of requiredParams) {
    if (!params[param]) {
      throw new Error(`${param} parametresi gereklidir`);
    }
  }
  
  // Varsayılan değerleri ayarla
  const paymentType = params.paymentType || 'card';
  const installmentCount = params.installmentCount || '0';
  const currencyCode = params.currencyCode || 'TL';
  const testMode = params.testMode || (config.testMode ? '1' : '0');
  const non3d = params.non3d || '0';
  
  // Token oluştur
  const paytrToken = hash.createDirectToken(config, {
    userIp: params.userIp,
    merchantOid: params.merchantOid,
    email: params.email,
    paymentAmount: params.paymentAmount,
    paymentType,
    installmentCount,
    currencyCode,
    testMode,
    non3d
  });
  
  // Sepet JSON formatına çevir
  const userBasket = typeof params.userBasket === 'string' 
    ? params.userBasket 
    : JSON.stringify(params.userBasket);
  
  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    user_ip: params.userIp,
    merchant_oid: params.merchantOid,
    email: params.email,
    payment_type: paymentType,
    payment_amount: params.paymentAmount,
    paytr_token: paytrToken,
    user_basket: userBasket,
    debug_on: params.debug || '0',
    user_name: params.userName,
    user_address: params.userAddress,
    user_phone: params.userPhone,
    merchant_ok_url: params.merchantOkUrl,
    merchant_fail_url: params.merchantFailUrl,
    installment_count: installmentCount,
    currency: currencyCode,
    test_mode: testMode,
    non_3d: non3d,
    utoken: params.utoken,
    ctoken: params.ctoken
  };
  
  // CVV gerekli ise ekle
  if (params.cvv) data.cvv = params.cvv;
  
  // Opsiyonel parametreler
  if (params.lang) data.client_lang = params.lang;
  if (params.cardType) data.card_type = params.cardType;
  if (params.syncMode) data.sync_mode = params.syncMode;

  // API isteği gönder
  return await api.request(config, '/odeme', data);
}

module.exports = {
  store,
  list,
  delete: deleteCard,
  payWithSavedCard
};
