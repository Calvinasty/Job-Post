import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
// persist pinia state in local storage
// if(localStorage.getItem('userState')){
//     pinia.state.value.user = JSON.parse(localStorage.getItem('userState'))
// }
// watch(
//     () => pinia.state.value.user,
//     (state) => {
//         if(localStorage.getItem('userState')){
//         localStorage.setItem("userState", JSON.stringify(state))
//     }},
//     {deep: true}
// );

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
