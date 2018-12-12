// components/listItem/index.js
const app = getApp();
Component({
  properties: {
    tabbar: {
      type: Object,
      value: {
        "list": [
          {
            "pagePath": "pages/index/index",
            "text": "赛事直播",
            "iconPath": "../../images/navbar/ball.png",
            "selectedIconPath": "../../images/navbar/ball-active.png"
          },
          {
            "pagePath": "pages/news/index",
            "text": "NBA资讯",
            "iconPath": "../../images/navbar/news.png",
            "selectedIconPath": "../../images/navbar/news-active.png"
          },
          {
            "pagePath": "pages/rank/index",
            "text": "球队战绩",
            "iconPath": "../../images/navbar/rank.png",
            "selectedIconPath": "../../images/navbar/rank-active.png"
          },
          {
            "pagePath": "pages/stats/index",
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
  },
  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
  },
});