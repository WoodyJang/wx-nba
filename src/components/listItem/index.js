// components/listItem/index.js
Component({
  properties: {
    item: {
      type: Object,
      value: {},
      observer(data) {
        this.setData({
          ...data
        });
      }
    }
  },
  data: {
  },
  methods: {
    
  }
});