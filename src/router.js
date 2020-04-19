import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ("./views/home")
        },
        {
            path: '/create',
            name: 'create',
            component: () =>
                import ("./components/users/create")
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () =>
                import ("./components/users/edit")
        },
    ]
});