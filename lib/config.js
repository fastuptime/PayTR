/**
 * Yapılandırma nesnesi oluşturur
 * @param {Object} options - Yapılandırma seçenekleri
 * @returns {Object} Onaylanmış yapılandırma nesnesi
 */
function create(options) {
  if (!options) {
    throw new Error('PayTR yapılandırma seçenekleri gereklidir');
  }

  if (!options.merchantId) {
    throw new Error('PayTR merchantId gereklidir');
  }

  if (!options.merchantKey) {
    throw new Error('PayTR merchantKey gereklidir');
  }

  if (!options.merchantSalt) {
    throw new Error('PayTR merchantSalt gereklidir');
  }

  return {
    merchantId: options.merchantId,
    merchantKey: options.merchantKey,
    merchantSalt: options.merchantSalt,
    testMode: options.testMode || false,
    debug: options.debug || false,
    timeout: options.timeout || 30000,
    baseUrl: options.baseUrl || 'https://www.paytr.com'
  };
}

module.exports = {
  create
};
