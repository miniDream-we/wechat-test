// pages/module/module.js

import * as actions from '../../actions/index.js'
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    pageNum: 0,
    pageCount: 0,
    list: [],
    isLoading: false,
    isEnd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
    actions.getModuleProducts({id: options.id}).then(({data}) => {
      this.setData({
        id: options.id,
        title: data.title,
        pageNum: data.pageNum,
        pageCount: data.pageCount,
        list: data.list
      })
      wx.setNavigationBarTitle({
        title: data.title
      })
    })
  },
  bindscrolltolower() {
    const {
      isEnd,
      isLoading,
      list,
      id,
    } = this.data
    if(isEnd || isLoading) return
    this.setData({
      isLoading: true
    })
    actions.getModuleProducts({ id: id }).then(({ data }) => {
      this.setData({
        list: list.concat(data.list)
      })
    }).then(res => {
      // @todo 根据后端数据判断是否到底
      this.setData({
        isLoading: false
      })
    })
  }
})