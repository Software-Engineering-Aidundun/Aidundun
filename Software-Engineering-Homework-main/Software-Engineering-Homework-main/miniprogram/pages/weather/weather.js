// pages/index/index.js
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
    // !! CONFIG
    geoGetUrl: 'https://geoapi.qweather.com/v2/city/lookup?',  // 城市信息
    weatherGetUrl: 'https://devapi.qweather.com/v7/weather/now?', // 实时天气
    forecastGetUrl: 'https://devapi.qweather.com/v7/weather/3d?',  // 未来三天
    hefengKey: 'acdbb12eef424a12a4e15fa4a9558621',

    // 预测
    daily_forecast:'',
    loc:"",
    time:"",
    province:"",
    city:"",
    accurate_city:"",

    // 实时天气
    region:['辽宁省','沈阳市','浑南区'],
    now:''
  },
  getWeatherForecast:function(){
    let that = this;
    // 查天气
    wx.request({
      url: that.data.forecastGetUrl,
      data:{
        location: that.data.loc,
        key: that.data.hefengKey
      },
      success(res)
      {
        console.log(res.data.daily[0]); // 查的是三天，只要第一天  
        let updateTime = res.data.updateTime; // 2022-03-24T16:35+08:00
        updateTime = updateTime.split('+')[0]; // 2022-03-24T16:35
        updateTime = updateTime.replace('T', ' '); //  2022-03-24 16:35
        that.setData({
          daily_forecast: res.data.daily[0],
          time: updateTime
        })
      }
    });
    // 还有个当前城市
    wx.request({
      url: that.data.geoGetUrl,
      data: {
        key: that.data.hefengKey,
        location: that.data.loc
      },
      success(res) {
        console.log(res.data);
        that.setData({
          accurate_city: res.data.location[0].name,
          city: res.data.location[0].adm2,
          province: res.data.location[0].adm1
        })
      }
    });
  },
  //此处
  changeRegion:function(e)
  {
    this.setData({
      region: e.detail.value,
    })
    this.getWeatherNow();//更新天气
  },
  // 获取当前天气
  getWeatherNow:function(){ 
    let that=this;
    wx.request({
      url: that.data.geoGetUrl,
      data:{
        location: that.data.region[1],
        adm: that.data.region[0],  // 考虑到重名的城市， 加入省份用以区分
        key: that.data.hefengKey
      },
      success(res) {
        console.log(res.data)
        let LocationID = res.data.location[0].id;
        // 先查城市id 再查它天气
        wx.request({
          url: that.data.weatherGetUrl,
          data: {
            key: that.data.hefengKey,
            location: LocationID
          },
          success(res) {
            console.log(res);
            that.setData({
              now: res.data.now  // 更新天气
            })
          }
        })
        
      }
    })
  },
  onLoad: function(options)
  {
    let that = this;
    wx.getLocation({
      success: function(res){
        // 经度,纬度
        let locat = res.longitude.toString() + "," + 
                    res.latitude.toString();
        console.log(locat);
        that.data.loc = locat;
        that.getWeatherForecast();
      },
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
