module.exports = [
  {
    text: '限时领取5000肥料礼包',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        swipeView()
        let t = setInterval(() => {
          let el = text('滑动浏览得').findOnce()
          if (!el) {
            desc('返回').findOnce().click()
            clearInterval(t)
            resolve(true)
            return
          }
          swipeView()
        }, 3000)
      })

      // sleep(20000)
    }
  },
  {
    text: '逛好物最高得2000肥料',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        swipeView()
        let t = setInterval(() => {
          let el = text('浏览最高得').findOnce()
          if (!el) {
            desc('返回').findOnce().click()
            clearInterval(t)
            resolve(true)
            return
          }
          swipeView()
        }, 3000)
      })
    }
  },
  {
    text: '看精选商品得1500肥料',
    value: true,
    num: 3,
    script: function () {
      sleep(1000)
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        swipeView()
        let t = setInterval(() => {
          let el = text('滑动浏览得').findOnce()
          if (!el) {
            desc('返回').findOnce().click()
            clearInterval(t)
            resolve(true)
            return
          }
          swipeView()
        }, 3000)
      })
    }
  },
  {
    text: '逛优选好物领1000肥料',
    value: true,
    num: 1,
    script: function () {
      let num = 0
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        swipeView()
        let t = setInterval(() => {
          num += 1
          if (num > 7) {
            desc('返回').findOnce().click()
            clearInterval(t)
            resolve(true)
            return
          }
          swipeView()
        }, 3000)
      })
    }
  },
  {
    text: '逛助农好货得肥料',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        swipeView()
        let t = setInterval(() => {
          let el = text('点击或滑动浏览得肥料').findOnce()
          if (!el) {
            desc('返回').findOnce().click()
            clearInterval(t)
            resolve(true)
            return
          }
          swipeView()
        }, 3000)
      })
    }
  },
  {
    text: '逛一逛支付宝会员',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        desc('返回').findOnce().click()
        sleep(1000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        resolve(true)
        return
      })
    }
  },
  {
    text: '逛一逛余额宝10周年',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(5000)
        let t = setInterval(() => {
          let el = textContains('浏览得奖励').findOnce()
          if (!el) {
            desc('返回').findOnce().click()
            clearInterval(t)
            resolve(true)
            return
          }
          swipeView()
        }, 3000)
      })
    }
  },
  {
    text: '逛一逛蚂蚁庄园',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        desc('返回').findOnce().click()
        sleep(1000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50);
        resolve(true)
        return
      })
    }
  },
  {
    text: '逛一逛蚂蚁森林',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        desc('返回').findOnce().click()
        sleep(1000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        resolve(true)
        return
      })
    }
  },
  {
    text: '去积攒芝麻粒',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        desc('返回').findOnce().click()
        sleep(1000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        resolve(true)
        return
      })
    }
  },
  {
    text: '去天猫攒福气兑红包',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        desc('返回').findOnce().click()
        sleep(1000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        resolve(true)
        return
      })
    }
  },
  {
    text: '成功打开立得100肥料',
    value: false,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(5000)
        launchApp("支付宝");
        desc('返回').findOnce().click()
        sleep(2000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y, 50)
        sleep(1000)
        resolve(true)
        return
      })
    }
  },
  {
    text: '逛逛淘宝芭芭农场',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(5000)
        launchApp("支付宝");
        sleep(2000)
        resolve(true)
        return
      })
    }
  },
  {
    text: '去点淘赚元宝提现',
    value: false,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(5000)
        launchApp("支付宝");
        desc('返回').findOnce().click()
        sleep(2000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        sleep(1000)
        resolve(true)
        return
      })
    }
  },
  {
    text: '逛一逛UC浏览器',
    value: false,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(5000)
        launchApp("支付宝");
        desc('返回').findOnce().click()
        sleep(2000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        sleep(1000)
        resolve(true)
        return
      })
    }
  },
  {
    text: '去蚂蚁森林神奇海洋',
    value: true,
    num: 1,
    script: function () {
      return new Promise((resolve, reject) => {
        let bool = getTaskList(this.text)
        if (bool) {
          sendLog(this.text + '：已完成')
          resolve(true)
          return
        }
        let el = isVisibleView(this.text)
        if (!el) return reject(false)
        let r = el.bounds()
        let x = r.centerX() + (r.width() / 2) + 10
        let y = r.centerY()
        press(x, y, 50)
        sleep(2000)
        desc('返回').findOnce().click()
        sleep(1000)
        el = isVisibleView(this.text)
        r = el.bounds()
        x = r.centerX() + (r.width() / 2) + 10
        y = r.centerY()
        press(x, y + 5, 50)
        resolve(true)
        return
      })
    }
  },
]
