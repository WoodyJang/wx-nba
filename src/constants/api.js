import wxRequest from '../utils/request'
const BASE_URL = 'https://wapapi.it919.cn/?service='
const api = {
  nab_schedule(params){
    return wxRequest(BASE_URL + 'Nba.schedule', params)
  }
};
export default  api