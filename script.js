const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    mounted() {
       this.getData()
      },
    methods:{
        getData(){
            axios.get('https://api.publicapis.org/categories')
        }
    }
  }).mount('#app')