//app.js
App({
  globalData:{
    //globalErrorOptions:[]
  },
  onLaunch: function () {
    wx.cloud.init({
      env:'cloud1-3g711qpj1f6a973c'//初始化云开发环境id
    })
  }
})
