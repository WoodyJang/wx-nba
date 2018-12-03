import regeneratorRuntime from "../packages/regenerator-runtime/runtime";
import MD5 from '../packages/md5'

const APPKEY = '6fc18957ce391f84a7ce34ce13cd99c4'

/**
 * 将参数+签名的值按照字典排序得到签名sign 参数的值按照升序排列
 * @param {Object} params   参数集合
 */
const getSign = params => {
  for (let key in params){
    if(!params[key]){
      delete params[key]
    }
  }

  params.appKey = APPKEY
  let keyArr = Object.keys(params).sort()

  let Kstr = ''
  for (let key in keyArr){
    Kstr += params[keyArr[key]]
  }
  delete params['appKey']
  return MD5(Kstr)
}
const wxRequest = async (url, params = {}) => {
  params.timestamp = +new Date()
  params.sign = getSign(params)
  let data = params.data || {}
  let method = params.method || 'GET'
  let header = params.header || { 
                "Content-Type": "application/json; charset=utf-8", 
                "token": params.token || ''
              }
  wx.showLoading({
    title: '加载中'
  })
  return await new Promise((resolve,reject) => {
    wx.request({
      url: url,
      method: method,
      data: Object.assign({}, params),
      header: header,
      success:res => {
        if (res.data && +res.data.ret === 200){
          resolve(res.data)
          wx.hideLoading()
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: "none"
          });
          wx.hideLoading()
          return reject(res)
        }
      },
      fail: err => {
        wx.showToast({
          title: "网路开小差，请稍后再试",
          icon: "none"
        });
        wx.hideLoading()
        return reject(err)
      }
    })
  })
}
  
export default wxRequest