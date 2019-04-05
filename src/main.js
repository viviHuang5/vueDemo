// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

import '../src/styles/index.scss';
import './assets/iconfont/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(ElementUI);
Vue.config.productionTip = false

//注册一个全局守卫，作用是在路由跳转前，对路由进行判断，防止未登录的用户跳转到其他页面去
router.beforeEach((to, from, next) => {
        let token = localStorage.getItem('myToken');
        //如果已经登录不干涉你，让你随便访问
        if (token) {
            next();
        } else {
            if (to.path !== '/login') {
                //如果没有登录，但你访问其他需要登录的页面，那我就让你调到登录页面去
                next({ path: '/login' })
            } else {
                //如果没有登录，但你访问的login，那就不干涉你，让你 访问
                next()
            }
        }

    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})