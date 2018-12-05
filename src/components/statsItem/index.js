Component({
  properties:{
    item: {
      type: Object,
      value: {},
      observer(data){
        this.setData({
          ...data
        })
      }
    },
    activeClass: {
      type: String,
      value: ''
    }
  }
})