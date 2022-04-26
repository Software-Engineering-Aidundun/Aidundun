// pages/detailsports/detailsports.js
const db=wx.cloud.database()
const sports=db.collection('sports')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        intro: {}, //  需包含name content
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //console.log(options)
        let name = options.name;
        sports.where({
            name: name  // 按运动的名查，
        }).get({
            success: res => {
            //console.log(res)  返回的res.data是个数组，只要第一个就行
                this.setData({
                    intro: res.data[0]
                });
           }
        })
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