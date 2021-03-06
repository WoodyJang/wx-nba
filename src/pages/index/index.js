//index.js
//获取应用实例
const app = getApp()
const { regeneratorRuntime } = global
import api from '../../constants/api'
Page({
  data: {
    //tabbar
    tabbar: {},
    date: {},
    list: []
  },
  
  onLoad: function () {
    app.editTabbar();
    console.log(this.data.tabbar)
    this.nab_schedule()
  },
  async nab_schedule(params){
    let res = await api.nab_schedule({
      date: params
    })

    this.setData({
      data: res.data.data
    })

  },
  bindDateChange(e) {
    this.nab_schedule(e.detail.value)
  },
  bindData(e) {
    this.nab_schedule(e.target.dataset.time)
  },
  handleToStaffInfo () {
    wx.navigateTo({
      url: '/pages/staff/index'
    })
  },
  handleToDoctor(){
    wx.navigateTo({ 
      url: "/pages/doctor/index" 
    });
  }
  
})
