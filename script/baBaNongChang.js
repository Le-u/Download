const data = engines.myEngine().execArgv.data
let autoFertilization = false
let isPk = false
let taskList = [
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

taskList = taskList.map((item, index) => {
  return Object.assign({}, item, data.taskList[index])
})
// console.log('成功');
let fertiliPosition = data.point.fertiliPosition || { x: 551, y: 1942 } // 施肥
let receivePosition = data.point.receivePosition || { x: 958, y: 1694 } //点击领取

const onClick = (el) => {
  let tag = el.findOnce();
  if (!tag) return false
  let bool = true;
  while (bool) {
    let isBool = tag.click();
    if (isBool) {
      bool = false;
    } else {
      tag = tag.parent();
    }
  }
  return true;
};


const sendLog = (text) => {
  events.broadcast.emit("log", '芭芭农场：' + text);
}



// 判断该任务控件是否可见，不可见将滚动至可见
const isVisibleView = (select) => {
  let scrollEl = className("android.view.View").scrollable(true).findOnce();
  while (!textContains(select).find()[1].visibleToUser()) {
    scrollEl.scrollForward()
    sleep(1000)
  }
  return textContains(select).find()[1]

}


const getTaskList = (text) => {
  let scrollEls = className("android.view.View").scrollable(true).findOnce().children();
  scrollEls.shift()
  let num = scrollEls.length - 3
  scrollEls.splice(num, 3)

  let taskArr = scrollEls.map((item, index) => {

    if ((index + 1) % 4 === 0) {
      let title = scrollEls[index - 3].text()
      let btn = item.child(0).text()
      return {
        title: title,
        btn: btn,
      }
    } else {
      return null
    }
  })

  let filterEls = taskArr.filter(item => item)
  let itemObj = filterEls.find(item => {
    return item.title.includes(text)
  })
  if (!itemObj) return false
  if (itemObj) return /已完成|已领取/.test(itemObj.btn)
}


// 初始化动态任务
const temporaryTask = () => {
  const signIn = idContains("lottery_plus_icon").findOnce()
  const makeWish = text("再施肥10次领许愿礼").findOnce()
  // const 
  return [
    {
      el: signIn,
      process: function () {
        const isOpenSigninTask = idContains("lottery_plus").find().length
        if (isOpenSigninTask <= 1) this.el.click()
        sleep(1000)
        let bool = onClick(text('领肥料'))
        if (bool) { sendLog('七日签到-签到成功') }
        if (!bool) { sendLog('七日签到-已签到'); onClick(textContains('关闭按钮')) }
      }
    },
    {
      el: makeWish,
      process: function () {
        if (this.el) {
          for (let i = 0; i < 10; i++) {
            sleep(2000)
            press(fertiliPosition.x, fertiliPosition.y, 50)
            onClick(textContains('关闭'))
          }
          sendLog('施肥十次完成')
        }
      }
    }
  ]
}


const swipeView = () => {
  let x = device.width / 2
  let y = device.height / 2
  swipe(x, y, x, y - 200, 100)
}


const performTaskList = () => {
  let index = 0;
  let num;
  function runNextScript() {
    if (index >= taskList.length) return sendLog('任务列表-全部任务已完成');
    num = taskList[index].num
    if (index < taskList.length && taskList[index].value) {
      cdLoop().then(res => {
        index += 1;
        sleep(2000)
        runNextScript();
      }).catch(err => {
        console.log(err);
        index += 1;
        runNextScript();
      })
    } else if (index < taskList.length && !taskList[index].value) {
      index += 1;
      runNextScript()
    }
  }


  const cdLoop = () => {

    const scriptLoop = () => {
      return new Promise((resolve, reject) => {
        if (index == 4) console.log(num);
        if (num !== 0) {
          taskList[index]
            .script()
            .then((res) => {
              sendLog(taskList[index].text + ': 完成')
              num -= 1
              scriptLoop().then(res => {
                resolve(true)
              })
            })
            .catch(error => {
              reject(false)
            });
        } else {
          resolve(true)
        }
      })
    }


    return new Promise((resolve, rejcet) => {
      scriptLoop().then(res => {
        resolve(true)
      }).catch(err => {
        rejcet(false)
      })
    })

  }

  runNextScript();

}



setScreenMetrics(1080, 2400);
launchApp("支付宝");
sleep(1000)
onClick(desc("首页"));
sleep(1000)
onClick(text("芭芭农场"));
sleep(5000)
const temTask = temporaryTask()
temTask.forEach(item => {
  if (!item.el) return
  item.process()
  sleep(1000)
})

press(receivePosition.x, receivePosition.y, 50)
sleep(1000)
let clel = onClick(text('关闭'))
if (clel) { sendLog('每日肥料-已领取') } else { sendLog('每日肥料-领取成功') }
sleep(1000)
onClick(text('任务列表'))
sleep(2000)
let bool = onClick(text('领取'))
if (bool) { sendLog('任务签到-签到成功') }
if (!bool) { sendLog('任务签到-已签到') }
sleep(2000)
performTaskList()