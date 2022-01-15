const Counter = {
    data() {
      return {
        tareas : ["ejercicio1","ejercicio2"],
        message : ""
      }
    },
    mounted() {
        if (localStorage.tareas) {
          this.tareas = localStorage.tareas;
        }
    },
    methods: {
      insertar_tarea() {
        this.tareas.push(this.message)
        localStorage.tareas = this.tareas;
        this.message = ""
      }
    }
  }

  window.onload = () =>{
  Vue.createApp(Counter).mount('#app')}