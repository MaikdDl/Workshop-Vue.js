new Vue({
  el: '#app',
  data: {
    msg: 'Bienvenido',
    name: ''
  },
  computed: {
    msgName() {
      return this.msg + ' ' + this.name;
    }
  }
})