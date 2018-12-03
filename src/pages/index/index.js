//index.js
//获取应用实例
const app = getApp()
import regeneratorRuntime from "../../packages/regenerator-runtime/runtime";
import api from '../../constants/api'
Page({
  data: {
    date: {},
    list: []
  },
  
  onLoad: function () {
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
