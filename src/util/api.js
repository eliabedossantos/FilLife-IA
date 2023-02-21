import axios from 'axios';

export const apiIBGE = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1'
})

// export const apiServer = axios.create({
//     baseURL: global.config.basedir+'/rest/v1/rfc'
// })