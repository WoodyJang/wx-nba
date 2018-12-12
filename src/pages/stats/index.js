
//获取应用实例
const app = getApp()
import api from '../../constants/api'
const { regeneratorRuntime } = global
Page({
  data: {
    tabbar: {},
    data: {},
    active: 'pt',
    headerText: '得分'
  },
  onLoad(){
    app.editTabbar()
    this.player_top()
  },
  async player_top(page){
    let res = await api.player_top()
    this.setData({
      data: res.data,
      stats: res.data.pt
    })
  },
  handlechange(e) {
    this.setData({
      active: e.target.dataset.tab,
      headerText: e.target.dataset.text,
      stats: this.data.data[e.target.dataset.tab]
    })
  }
})