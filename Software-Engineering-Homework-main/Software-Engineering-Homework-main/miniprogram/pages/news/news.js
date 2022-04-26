// pages/news/news.js
// import { getNewList } from "../../utils/common.js"
const db=wx.cloud.database()
const news=db.collection('news')
const row=7
var page=0
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
    TabCur: 0,
    scrollLeft:0,
    loading:false,
    loadMoreText:"加载更多",
    newsList:[],
    swiperImg:[
      {src:"/images/swiper2.jpg"},
      {src:"/images/swiper1.jpg"},
      {src:"/images/swiper3.jpg"}
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  onLoad: function(options){
    news.limit(row).orderBy('add_date', 'desc').get({
      success:res=>{
        //console.log(res);
        this.setData({
          newsList:res.data
        })
      },
    })
  },
  onReachBottom:function()
  {
    //翻下一页
    page++
    //获取当前页面的新闻记录
    news.skip(row*page).limit(row).orderBy('add_date', 'desc').get({
      success:res=>{
        //获取原有的新闻记录
        let old_data=this.data.newsList
        //获取新页面的新闻记录
        let new_data=res.data
        //更新新闻列表
        this.setData({
          newsList:old_data.concat(new_data)
        })
      }
    })
  },
  goToDetail: function(e)
  {
    let id=e.currentTarget.dataset.id
    console.log(e)
    //携带新闻ID进行界面跳转
    wx.navigateTo({
      url: '../detailnews/detailnews?id='+id,
    })
  }

})

