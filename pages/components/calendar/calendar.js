// pages/components/calendar/calendar.js
import util from '../../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    calendarInfo: '',
    calendarList: [],
    plusStock: {},
    smokeList: {
      '2018-01-01': 1,
      '2018-01-02': 2,
      '2018-01-03': 1,
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addSmoke() {
      const now = new Date()
      const year = now.getFullYear()
      const mouth = now.getMonth() + 1
      const day = now.getDate()
      const label = util.getFormate(year, mouth, day)
      const smokeList = this.data.smokeList;
      if(smokeList[label]) {
        smokeList[label] += 1
      }else{
        smokeList[label] = 1;
      }
      this.setData({
        smokeList: {...smokeList}
      })
      if(Object.values(this.data.smokeList).reduce((a,b) => a + b) > 5){
        return true;
      }else{
        return false;
      }
    }
  },
  attached() {
    const now = new Date()
    const year = now.getFullYear()
    const mouth = now.getMonth() + 1
    const days = new Date(year, mouth, 0).getDate()
    const weekMap = ['日', '一', '二', '三', '四', '五', '六']
    const firstWeek = new Date(year, mouth - 1, 1).getDay()
    const calendarList = []
    for(let i = 1; i < days + firstWeek + 1; i++) {
      const day = i - firstWeek
      const item = {
        day: day > 0 ? day : '',
        week: weekMap[(firstWeek + i + 1) % 7],
        id: util.getFormate(year, mouth, day)
      }
      calendarList.push(item)
    }
    this.setData({
      calendarInfo: `${year}年${mouth}月`,
      calendarList: calendarList
    })
  }
})
