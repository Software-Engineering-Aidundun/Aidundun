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
    number:0,
    newsList:[]
  },
  getMyFavorites:function(){
    let info=wx.getStorageInfoSync();   //读取本地缓存信息
    let keys=info.keys  //获取全部key信息
    let num=keys.length   //获取收藏新闻数量

    let myList=[];
    for(var i =0;i<num; i++)
    {
      let obj=wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    this.setData({
      newsList:myList,
      number:num
    })
  },
  goToDetail: function(e)
  {
    let id=e.currentTarget.dataset.id
    //console.log(e)
    //携带新闻ID进行界面跳转
    wx.navigateTo({
      url: '../detailnews/detailnews?id='+id,
    })
  }
  ,
  getMyInfo:function(e)
  {
    console.log(e.detail.userInfo)
    let info=e.detail.userInfo
    this.setData({
      src:info.avatarUrl,
      nickName:info.nickName,
      isLogin:true
    }),
    this.getMyFavorites()
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  onShow: function()
  {
    // if(this.data.isLogin){
    //   this.getMyFavorites()
    // }
    this.getMyFavorites()
  },
  onLoad: function(options)
  {
    // wx.clearStorage()
  }
})
