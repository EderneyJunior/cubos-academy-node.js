const axios = require('axios')

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1',
    params: {
        api_key: '2be93dc687cb4d21838f6c1a236bfdb5'
    }
})

module.exports = instanciaAxios