// pages/detailnews/detailnews.js
var common=require('../../utils/common.js')
const db=wx.cloud.database()
const news=db.collection('news')
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */


  data : {
  article: {
    // id: '239875',
    // title: '记者手记：国家庆典，每个人都是记录者',
    // poster: 'http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg',
    // add_date: '2019 - 10 - 01',
    // content: '    10月1日凌晨3时，大批中外记者先后乘坐巴士，向天安门方向出发。仍处于夜幕中的北京，多数市民正在享受难得的假期时光。此刻长安街上的安静，将与7个小时后形成巨大反差。'

  },
  // isAdd: false

},

  /**
   * 组件的方法列表
   */
  methods: {

  },
  onLoad: function (options)
  {
    //console.log(options.id),
    let id=options.id
    // console.log(id)
    // let result= common.getNewsDetail(id)
    // if(result.code=='200')
    // {
    //   this.setData({
    //     article:result.news
    //   })
    // }
    var newarticle=wx.getStorageSync(id)
    if(newarticle!=''){
      this.setData({
        isAdd:true,
      article:newarticle})
    }
    else{
    //   let result=common.getNewsDetail(id)
    //   if(result.code=='200')
    // {
    //   this.setData({
    //     article:result.news,
    //     isAdd:false
    //   })
    // }
    // 根据id在云数据库中查
      news.doc(id).get({
        success:res=>{
          //更新界面哈桑的新闻信息和收藏状态
          this.setData({
          article:res.data,
          isAdd:false
          })
        }
      })
    }
  },
  cancelFavorites: function(){
    let article=this.data.article
    wx.removeStorageSync(article._id)
    this.setData({isAdd:false})
  }
  ,
  addFavorites: function(){
    let article=this.data.article
    wx.setStorageSync(article._id, article)
    this.setData({
      isAdd:true
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  CopyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

