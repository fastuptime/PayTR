const axios = require('axios');

/**
 * PayTR API'sine istek gönderir
 * @param {Object} config - PayTR yapılandırması
 * @param {string} endpoint - API endpoint
 * @param {Object} data - POST verileri
 * @param {Object} options - İstek seçenekleri
 * @returns {Promise<Object>} API yanıtı
 */
async function request(config, endpoint, data, options = {}) {
  const url = `${config.baseUrl}${endpoint}`;
  
  try {
    const response = await axios.post(url, data, {
      timeout: options.timeout || config.timeout,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...options.headers
      },
      validateStatus: () => true
    });

    if (config.debug) {
      console.log('PayTR API Request:', { url, data });
      console.log('PayTR API Response:', response.data);
    }

    // PayTR hata kontrolü
    const responseData = response.data;
    
    if (responseData && responseData.status === 'error') {
      throw new Error(responseData.err_msg || 'PayTR API hatası');
    }
    
    if (responseData && responseData.status === 'failed') {
      throw new Error(responseData.reason || 'PayTR işlem başarısız');
    }

    return responseData;
  } catch (error) {
    if (error.response) {
      throw new Error(`PayTR API hatası: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error('PayTR API yanıt vermedi');
    } else {
      throw error;
    }
  }
}

module.exports = {
  request
};
