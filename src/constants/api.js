import wxRequest from '../utils/request'

const api = {
  //赛事直播
  nab_schedule(params){
    return wxRequest('Nba.schedule', params)
  },
  //新闻资讯
  news_list(params){
    return wxRequest('Nba.new_list', params)
  },
  //球队排行
  team_rank(params){
    return wxRequest('Nba.team_rank', params)
  },
  //数据统计
  player_top(params) {
    return wxRequest('Nba.player_top', params)
  },
  player_Game(params){
    return wxRequest('Nba.playerGame',params)
  },
  player_detail(params){
    return wxRequest('Nba.player_detail', params)
  }

};
export default  api