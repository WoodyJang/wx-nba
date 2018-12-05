import api from '../../constants/api'
const { regeneratorRuntime } = global
Page({
  data: {
    data: {},
    active: 0
  },
  onLoad(){
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