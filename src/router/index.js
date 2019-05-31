import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/tabbar/home.vue'
import member from '../components/tabbar/member.vue'
import my from '../components/tabbar/my.vue'
import picture from '../components/tabbar/picture.vue'
import search from '../components/tabbar/search.vue'
import girlList from '../components/news/girlList.vue'
import animeList from '../components/news/animeList.vue'
import animalList from '../components/news/animalList.vue'
import scenerylList from '../components/news/sceneryList.vue'
import insetList from '../components/news/insetList.vue'
import photoinfo from '../components/photos/photoinfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect:'/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/my', component: my },
    { path: '/picture', component: picture },
    { path: '/search', component: search },
    { path: '/home/girlList', component: girlList },
    { path: '/home/animeList', component: animeList },
    { path: '/home/animalList', component: animalList },
    { path: '/home/scenerylList', component: scenerylList },
    { path: '/home/insetList', component: insetList },
    { path: '/home/photoinfo/:id', component: photoinfo },

  ],
})
