//获取应用实例
const app = getApp()
import api from '../../constants/api'
const { regeneratorRuntime } = global
Page({
  data: {
    tabbar: {},
    data: {},
    active: 0
  },
  onLoad(){
    app.editTabbar();
    this.team_rank()
  },
  async team_rank(page){
    let res = await api.team_rank()
    this.setData({
      data: res.data
    })
  },
  handlechange(e){
    this.setData({
      active: Number(e.target.dataset.tab)
    })
  }
})