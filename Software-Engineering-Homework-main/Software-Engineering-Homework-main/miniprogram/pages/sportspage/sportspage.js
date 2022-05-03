// pages/sportspage/sportspage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sportsList: [
            {
                id: 0,
                icon: '../../images/project-icon/speed_skating.png',
                name: '速度滑冰'
            },
            {
                id: 1,
                icon: '../../images/project-icon/ice_hockey.png',
                name: '冰球'
            },
            {
                id: 2,
                icon: '../../images/project-icon/alpine_sking.png',
                name: '高山滑雪'
            },
            {
                id: 3,
                icon: '../../images/project-icon/curing.png',
                name: '冰壶',
            },
            {
                id: 4,
                icon: '../../images/project-icon/bobsleigh.png',
                name: '雪车'
            },
            {
                id: 5,
                icon: '../../images/project-icon/luge.png',
                name: '雪橇'
            },
            {
                id: 6,
                icon: '../../images/project-icon/ski_jumping.png',
                name: '跳台滑雪'
            },
            {
                id: 7,
                icon: '../../images/project-icon/nodic_combined.png',
                name: '北欧两项'
            },
            {
                id: 8,
                icon: '../../images/project-icon/figure_skating.png',
                name: '花样滑冰'
            },
            {
                id: 9,
                icon: '../../images/project-icon/biathlon.png',
                name: '冬季两项'
            },
            {
                id: 10,
                icon: '../../images/project-icon/cross_country_skiing.png',
                name: '越野滑雪'
            },
            {
                id: 11,
                icon: '../../images/project-icon/freestyle_skiing.png',
                name: '自由式滑雪'
            },
            {
                id: 12,
                icon: '../../images/project-icon/snowboard.png', 
                name: '单板滑雪'
            },
            {
                id: 13,
                icon: '../../images/project-icon/short_track_speed_skiing.png',
                name: '短道速滑'
            },
            {
                id: 14,
                icon: '../../images/project-icon/skeleton.png',
                name: '钢架雪车'
            }
        ],
    },
    toSportIntro: function(e) {
        // 跳转到项目的介绍
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '../detailsports/detailsports?name=' + this.data.sportsList[id].name,
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
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