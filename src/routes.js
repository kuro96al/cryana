export default [
    {
      path: '/',
      name:'home',
      component: require('./pages/App.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      component: require('./pages/Charts.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: require('./pages/Ranking.vue')
    }
    
  ]