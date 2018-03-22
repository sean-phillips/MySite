import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Coins from '@/components/Coins'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import DeeThree from '@/components/DeeThree'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }, {
      path: '/dee-three',
      name: 'DeeThree',
      component: DeeThree
    }
  ]
});
