const api = require('./api');
const hash = require('./hash');

/**
 * Tekrarlayan ödeme oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Tekrarlayan ödeme parametreleri
 * @returns {Promise<Object>} Ödeme sonucu
 */
async function createPayment(config, params) {
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
    non3d: '1' // Tekrarlayan ödemeler için non3d zorunlu
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
    non_3d: '1',
    utoken: params.utoken,
    ctoken: params.ctoken,
    recurring_payment: '1'
  };
  
  // Opsiyonel parametreler
  if (params.lang) data.client_lang = params.lang;
  if (params.cardType) data.card_type = params.cardType;

  // API isteği gönder
  return await api.request(config, '/odeme', data);
}

module.exports = {
  createPayment
};
