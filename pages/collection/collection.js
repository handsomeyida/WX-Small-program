// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    othersList:[],
  },

  /**
   * 获取帖子内容
   */
  getOthersList(userId){
    let that=this;
    wx.request({
      url:"http://localhost:8088/comment/listcollectionbase?userId="+userId,
      success(res){
        if(res.data.code==100){
          that.setData({
            othersList:res.data.info.list
          })
        }
      }
    })
  },

  //取消收藏
  deleteCollection:function(e){
    // console.log(e.currentTarget.dataset.index)
    let ID  = e.currentTarget.dataset.index;
    let that=this;
    wx.showModal({
      title: '提示',
      content: '确定取消收藏吗?',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url:"http://localhost:8088/comment/deletecollectionbase",
            method: "POST",
            data: {
              ID: ID
            },
            header: {
              'content-type': 'application/json'
            },
            success(res){
              if (res.data.code == 100) {
                that.onLoad()
              }
            }
          })
        }
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = 10001;
    this.getOthersList(userId);
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