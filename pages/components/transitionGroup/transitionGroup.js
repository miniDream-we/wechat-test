// pages/components/transitionGroup/transitionGroup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    timeout: Number,
    enterTimeout: Number,
    leaveTimeout: Number,
    isShow: {
      type: Boolean, 
      observer: function (newVal, oldVal) {
        this._timeout && clearTimeout(this._timeout)

        const {
          enterTimeout,
          leaveTimeout,
          timeout,
          name,
        } = this.properties;
        if (newVal && !oldVal){ //如果从false 变成 true
          this.setData({
            enter: `${name}-enter`,
            enterActive: '',
            leave: '',
            leaveActive: '',
            wxIf: true,
          })
          setTimeout(() => {
            this.setData({
              enterActive: `${name}-enter-active`,
            })
          }, 10)  //为什么0不好使····
          this._timeout = setTimeout(() => {
            this.setData({
              enter: '',
              enterActive: '',
              leave: '',
              leaveActive: '',
            })
          }, enterTimeout || timeout || 0)
        } else {
          this.setData({
            enter: '',
            enterActive: '',
            leave: `${name}-leave`,
            leaveActive: '',
          })
          setTimeout(() => {
            this.setData({
              leaveActive: `${name}-leave-active`,
            })
          }, 0)
          this._timeout = setTimeout(() => {
            this.setData({
              enter: '',
              enterActive: '',
              leave: '',
              leaveActive: '',
              wxIf: false,
            })
          }, leaveTimeout || timeout || 0)
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    wxIf: false,
    enter: '',
    enterActive: '',
    leave: '',
    leaveActive: '',
    style: ""
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached() {
    this.setData({
      wxIf: this.properties.isShow
    })
  }
})
