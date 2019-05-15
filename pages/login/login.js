// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '../../assets/square.png',
    eye: '../../assets/eye_close.png',
    isrmb: false,
    ispwd: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '登录'
    })
  },

  rememberPwd() {
    this.data.isrmb = !this.data.isrmb
    if (this.data.isrmb === true) {
      this.setData({
        img: '../../assets/square_check.png'
      })
      return
    }
    if (this.data.isrmb === false) {
      this.setData({
        img: '../../assets/square.png'
      })
      return
    }
  },

  handleEye() {
    var ispwd = !this.data.ispwd
    this.setData({
      ispwd: ispwd
    })

    if (ispwd === true) {
      this.setData({
        eye: '../../assets/eye.png'
      })
      return
    }
    this.setData({
      eye: '../../assets/eye_close.png'
    })
    return
  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})