import api from '../../../constants/api'
const { regeneratorRuntime } = global
Page({
  data: {
    data: {},
    detail: {}
  },
  onLoad(option){
    this.player_Game(option.id)
    this.player_detail(option.id)
  },
  async player_Game(id){
    let res = await api.player_Game({
      playerId: id || 4612,
      seasonId: +new Date().getFullYear()
    })
    this.setData({
      data: res.data,
    })
  },
  async player_detail(id) {
    let res = await api.player_detail({
      playerid: id || 4612
    })
    this.setData({
      detail: res.data,
    })
  }
})