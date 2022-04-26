// pages/my/my.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nickName:"未登录",
    src:"/images/touxiang.png",
  },
  CopyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  onShow: function()
  {
  },
  getMyInfo:function(e)
  { // 接受来自 getUserInfo的数据
    console.log(e.detail.userInfo)
    let info=e.detail.userInfo
    this.setData({
      src:info.avatarUrl,
      nickName:info.nickName,
      isLogin:true
    })
  },
  onLoad: function(options)
  {
    // wx.clearStorage({
      
    // })
  }
})
