import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

//createApp(App).mount('#app')
const app = createApp(App)

app.use(Maska) // biblioteca criada para o vue em forma de plugin
app.config.globalProperties.$moment = moment // não é biblioteca específica para o vue, é uma propriedade global
app.config.globalProperties.$moment.locale('pt-br')

app.mount('#app')