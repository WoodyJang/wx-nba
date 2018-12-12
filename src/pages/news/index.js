
//获取应用实例
const app = getApp()
import api from '../../constants/api'
const { regeneratorRuntime } = global
Page({
  data: {
    tabbar: {},
    data: [],
    page: 0
  },
  onLoad(){
    app.editTabbar();
    this.news_list()
  },
  async news_list(page){
    let res = await api.news_list({
      page: page || 0
    })
    this.setData({
      data: this.data.data.concat(res.data)
    })
  },
  onReachBottom: function () {
    this.setData({
      page: this.page + 1
    })
    this.news_list(this.page)
  },
})