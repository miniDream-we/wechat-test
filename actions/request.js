/**
 * 后端ajax请求promise化公共接口
 * @Author   yansanmu
 * @DateTime 2018-03-01
 * @param    {[type]}   opts [description]
 * @return   {[type]}        [description]
 */
export default function(opts) {
	return new Promise((resolve, reject) => {
    const {
      url
    } = opts
    // 如果url值为data,说明为测试数据
    // 因为wx.request只能请求https接口，不能做本地调试，所以这里统一判断
    if(Object.prototype.toString.call(url).slice(8, -1) === 'Object'){
      resolve(url.default) // 由于import方式固定，且仅为测试，所以直接输出default
      return
    }
		wx.request({
		  url: opts.url,
		  data: opts.data || {},
		  header: {
		      'content-type': 'application/json' 
		  },
		  success: function(res) {
		    resolve(res)
		  },
		  fail: function(...args) {
		  	reject(...args)
		  }
		})
	})
}