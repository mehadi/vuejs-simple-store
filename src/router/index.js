import Vue from 'vue'
import Router from 'vue-router'
import Inventory from "../components/views/Inventory";
import ItemDetails from "../components/views/ItemDetails";
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '',
            component: Inventory
        },
        {
            path: '/item/:id',
            component: ItemDetails
        },

    ]
})