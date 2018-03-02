//index.js
import * as actions from '../../actions/index.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    scrollTop: 0,
    bannerList: [],
    moduleList: [],
    products: [],
  },
  onPageScroll({ scrollTop }) {
    this.setData({
      scrollTop: scrollTop,
    })
  },
  onLoad() {
    actions.getMainBanners().then(res => {
      this.setData({
        bannerList: res.data.list
      })
    })
    actions.getMainModules().then(res => {
      this.setData({
        moduleList: res.data.list
      })
    })
    actions.getMainProducts().then(res => {
      this.setData({
        products: res.data.moduls
      })
    })
  },
  moreTap({target}) {
    const {
      dataset
    } = target
    if (dataset.productid){
      wx.navigateTo({
        url: '/pages/module/module?id=' + dataset.productid
      })
    }
  }
})
