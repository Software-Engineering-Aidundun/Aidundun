// pages/timeline/timeline.js
// const app = getApp();
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
    ranks: [
      {
        rank: 1,
        name: '挪威',
        flag: '/images/nation/NOR.png',
        gold: 16,
        silver: 8,
        bronze: 13
      },
      {
        rank: 2,
        name: '德国',
        flag: '/images/nation/GER.png',
        gold: 12,
        silver: 10,
        bronze: 5
      },
      {
        rank: 3,
        name: '中国',
        flag: '/images/nation/CHN.png',
        gold: 9,
        silver: 4,
        bronze: 2
      },
      {
        rank: 4,
        name: '美国',
        flag: '/images/nation/USA.png',
        gold: 8,
        silver: 10,
        bronze: 7
      },
      {
        rank: 5,
        name: '瑞典',
        flag: '/images/nation/SWE.png',
        gold: 8,
        silver: 5,
        bronze: 5
      },
      {
        rank: 6,
        name: '荷兰',
        flag: '/images/nation/NED.png',
        gold: 8,
        silver: 5,
        bronze: 4
      },
      {
        rank: 7,
        name: '奥地利',
        flag: '/images/nation/AUT.png',
        gold: 7,
        silver: 7,
        bronze: 4
      },
      {
        rank: 8,
        name: '瑞士',
        flag: '/images/nation/SUI.png',
        gold: 7,
        silver: 2,
        bronze: 5
      },
      {
        rank: 9,
        name: 'ROC',
        flag: '/images/nation/ROC.png',
        gold: 6,
        silver: 12,
        bronze: 14
      },
      {
        rank: 10,
        name: '法国',
        flag: '/images/nation/FRA.png',
        gold: 5,
        silver: 7,
        bronze: 2
      },
      {
        rank: 11,
        name: '加拿大',
        flag: '/images/nation/CAN.png',
        gold: 4,
        silver: 8,
        bronze: 14
      },
      {
        rank: 12,
        name: '日本',
        flag: '/images/nation/JPN.png',
        gold: 3,
        silver: 6,
        bronze: 9
      },
      {
        rank: 13,
        name: '意大利',
        flag: '/images/nation/ITA.png',
        gold: 2,
        silver: 7,
        bronze: 8
      },
      {
        rank: 14,
        name: '韩国',
        flag: '/images/nation/KOR.png',
        gold: 2,
        silver: 5,
        bronze: 2
      },
      {
        rank: 15,
        name: '斯洛文尼亚',
        flag: '/images/nation/SLO.png',
        gold: 2,
        silver: 3,
        bronze: 2
      },
      {
        rank: 16,
        name: '芬兰',
        flag: '/images/nation/FIN.png',
        gold: 2,
        silver: 2,
        bronze: 4
      },
      {
        rank: 17,
        name: '新西兰',
        flag: '/images/nation/NZL.png',
        gold: 2,
        silver: 1,
        bronze: 0
      },
      {
        rank: 18,
        name: '澳大利亚',
        flag: '/images/nation/AUS.png',
        gold: 1,
        silver: 2,
        bronze: 1
      },
      {
        rank: 19,
        name: '英国',
        flag: '/images/nation/GBR.png',
        gold: 1,
        silver: 1,
        bronze: 0
      },
      {
        rank: 20,
        name: '匈牙利',
        flag: '/images/nation/HUN.png',
        gold: 1,
        silver: 0,
        bronze: 2
      },
      {
        rank: 21,
        name: '比利时',
        flag: '/images/nation/BEL.png',
        gold: 1,
        silver: 0,
        bronze: 1
      },
      {
        rank: 21,
        name: '捷克',
        flag: '/images/nation/CZE.png',
        gold: 1,
        silver: 0,
        bronze: 1
      },
      {
        rank: 21,
        name: '斯洛伐克',
        flag: '/images/nation/SVK.png',
        gold: 1,
        silver: 0,
        bronze: 1
      },
      {
        rank: 24,
        name: '白俄罗斯',
        flag: '/images/nation/BLR.png',
        gold: 0,
        silver: 2,
        bronze: 0
      },
      {
        rank: 25,
        name: '西班牙',
        flag: '/images/nation/ESP.png',
        gold: 0,
        silver: 1,
        bronze: 0
      },
      {
        rank: 25,
        name: '乌克兰',
        flag: '/images/nation/UKR.png',
        gold: 0,
        silver: 1,
        bronze: 0
      },
      {
        rank: 27,
        name: '爱沙尼亚',
        flag: '/images/nation/EST.png',
        gold: 0,
        silver: 0,
        bronze: 1
      },
      {
        rank: 27,
        name: '拉脱维亚',
        flag: '/images/nation/LAT.png',
        gold: 0,
        silver: 0,
        bronze: 1
      },
      {
        rank: 27,
        name: '波兰',
        flag: '/images/nation/POL.png',
        gold: 0,
        silver: 0,
        bronze: 1
      },
      // 再往后的国家没奖牌了。
      
    ]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  onLoad() {
    let that = this;
    setTimeout(function() {   // 进度条的初始效果，
      that.setData({
        loading: true
      })
    }, 500)
  },
  
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
