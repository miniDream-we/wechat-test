import request from './request'
import * as types from './types'

/**
 * 获取首页banner
 * @Author   yansanmu
 * @DateTime 2018-03-01
 * @return   {[type]}   [description]
 */
export function getMainBanners() {
  return request({
    url: types.GET_MAIN_BANNER
  })
}
/**
 * 获取首页模块
 * @Author   yansanmu
 * @DateTime 2018-03-01
 * @return   {[type]}   [description]
 */
export function getMainModules() {
  return request({
    url: types.GET_MAIN_MODULES
  })
}
/**
 * 获取首页商品
 * @Author   yansanmu
 * @DateTime 2018-03-01
 * @return   {[type]}   [description]
 */
export function getMainProducts() {
  return request({
    url: types.GET_MAIN_PRODUCTS
  })
}
/**
 * 获取类别list
 * @Author   yansanmu
 * @DateTime 2018-03-01
 * @return   {[type]}   [description]
 */
export function getModuleProducts() {
  return request({
    url: types.GET_MODULE_PRODUCTS
  })
}

/**
 * 获取商品详情
 * @Author   yansanmu
 * @DateTime 2018-03-01
 * @return   {[type]}   [description]
 */
export function getProductDetail() {
  return request({
    url: types.GET_PRODUCT_DETAIL
  })
}