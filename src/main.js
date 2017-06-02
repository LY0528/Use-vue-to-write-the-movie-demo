import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

import theaters from './components/theaters/theaters'
import coming from './components/coming/coming'
import top250 from './components/top250/top250'

var routes = [
  { path: '/theaters', component: theaters },
  { path: '/coming', component: coming },
  { path: '/top250', component: top250 }
]
var router = new VueRouter({
	routes,//此处是routes 而不是routers
	linkActiveClass:'active'
})

var app = new Vue({
  router,
  render: h => h(App)
})
app.$mount('#app')
router.push('/theaters')
