// pages/detail/detail.js
import * as actions from '../../actions/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    title: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    actions.getProductDetail().then(res => {
      this.setData(res.data)
      wx.setNavigationBarTitle({
        title: res.data.title
      })
    })
  }
})