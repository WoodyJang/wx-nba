import api from '../../constants/api'
const { regeneratorRuntime } = global
Page({
  data: {
    data: [],
    page: 0
  },
  onLoad(){
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