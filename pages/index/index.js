var app = getApp()
Page({


  /**
   * 页面的初始数据
   */
  data: {
    // 选项卡
    winWidth: 0,
    winHeight: 0,
    // 导航索引
    currentIndeNav:0,
    // 导航数据
    Title:[],
    swiperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1 获取轮播图数据
    this.getswiperList();

    var that = this;
  },  

    /**
   * 滑动切换tab 
   */
  bindChange: function (e) {
    var that = this;
    that.setData({ 
      currentIndeNav: e.detail.current 
    });
  },
  /**
   * 点击首页函数
   */
  clickNav(e){
    this.setData({
      currentIndeNav:e.target.dataset.index
    })
  },
  /** 
   * 点击tab切换 
   */
swichNav: function (e) {
  var that = this;
  if (this.data.currentIndeNav === e.target.dataset.current) {
    return false;
  } else {
    that.setData({
      currentIndeNav: e.target.dataset.current
    })
  }
},
  
  // 获取轮播图
  getswiperList(){
    let that = this;
    // wx.request({
    //     url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
    //     success(res){
    //       if(res.data.code===0){
    //         that.setData({
    //           swiperList:res.data.data.swiperList
    //         })
    //       }
    //     }
    // })
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
    if (app.globalData.currentLocation == '') {
      this.setData({
        currentIndeNav: 0
      });
    } else {
      var i = app.globalData.currentLocation;
      this.setData({
        currentIndeNav: i
      });
    }
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