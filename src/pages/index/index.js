//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad: function () {
    
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
