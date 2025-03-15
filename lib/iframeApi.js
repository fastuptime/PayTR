const api = require('./api');
const hash = require('./hash');

/**
 * iFrame token oluşturur
 * @param {Object} config - PayTR yapılandırması
 * @param {Object} params - Token parametreleri
 * @returns {Promise<Object>} Token yanıtı
 */
async function createToken(config, params) {
  // Gerekli parametreleri kontrol et
  const requiredParams = ['userIp', 'merchantOid', 'email', 'paymentAmount', 'userName', 'userAddress', 'userPhone', 'merchantOkUrl', 'merchantFailUrl', 'userBasket'];
  
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
  const noInstallment = params.noInstallment || '0';
  const maxInstallment = params.maxInstallment || '0';
  const noPayment = params.noPayment || '0';
  
  // Sepet JSON formatına çevrilmiş olmalı
  const userBasket = typeof params.userBasket === 'string' 
    ? params.userBasket 
    : JSON.stringify(params.userBasket);
  
  // Token oluştur
  const paytrToken = hash.createIframeToken(config, {
    userIp: params.userIp,
    merchantOid: params.merchantOid,
    email: params.email,
    paymentAmount: params.paymentAmount,
    paymentType,
    installmentCount,
    currencyCode,
    testMode,
    noInstallment,
    maxInstallment,
    noPayment
  });

  // API isteği için veri oluştur
  const data = {
    merchant_id: config.merchantId,
    user_ip: params.userIp,
    merchant_oid: params.merchantOid,
    email: params.email,
    payment_amount: params.paymentAmount,
    paytr_token: paytrToken,
    user_basket: userBasket,
    debug_on: params.debug || '0',
    no_installment: noInstallment,
    max_installment: maxInstallment,
    no_payment: noPayment,
    user_name: params.userName,
    user_address: params.userAddress,
    user_phone: params.userPhone,
    merchant_ok_url: params.merchantOkUrl,
    merchant_fail_url: params.merchantFailUrl,
    timeout_limit: params.timeoutLimit || '30',
    currency: currencyCode,
    test_mode: testMode,
    payment_type: paymentType
  };
  
  // Opsiyonel parametreler
  if (params.lang) data.lang = params.lang;
  if (params.cardType) data.card_type = params.cardType;

  // API isteği gönder
  return await api.request(config, '/odeme/api/get-token', data);
}

module.exports = {
  createToken
};
