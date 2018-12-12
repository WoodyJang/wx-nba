//app.js
const regeneratorRuntime = global.regeneratorRuntime = require( "./packages/regenerator-runtime/runtime");
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();
  },
  getSystemInfo(){
    let self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabbar;
    let currentPages = getCurrentPages();
    let self = currentPages[currentPages.length - 1];
    let pagePath = self.route;

    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);

    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    self.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null,
    tabbar:{
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "赛事直播",
          "iconPath": "../../images/navbar/ball.png",
          "selectedIconPath": "../../images/navbar/ball-active.png"
        },
        {
          "pagePath": "/pages/news/index",
          "text": "NBA资讯",
          "iconPath": "../../images/navbar/news.png",
          "selectedIconPath": "../../images/navbar/news-active.png"
        },
        {
          "pagePath": "/pages/rank/index",
          "text": "球队战绩",
          "iconPath": "../../images/navbar/rank.png",
          "selectedIconPath": "../../images/navbar/rank-active.png"
        },
        {
          "pagePath": "/pages/stats/index",
          "text": "数据统计",
          "iconPath": "../../images/navbar/stats.png",
          "selectedIconPath": "../../images/navbar/stats-active.png"
        }
      ],
      "color": "#999",
      "borderStyle": "#bebebe",
      "selectedColor": "#15BEA4",
      "backgroundColor": "#fff"
    }
  }
})