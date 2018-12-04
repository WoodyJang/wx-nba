import wxRequest from '../utils/request'

const api = {
  nab_schedule(params){
    return wxRequest('Nba.schedule', params)
  },
  news_list(params){
    return wxRequest('Nba.new_list', params)
  }

};
export default  api