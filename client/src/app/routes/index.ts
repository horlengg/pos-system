import { createWebHistory, createRouter} from "vue-router";

const router = createRouter({
    history : createWebHistory(),
    routes  : [
        {
            path : "/",
            name : "signin",
            component : ()=> import("@/views/auth/signin.vue"),
            meta : {
                clearLayout : true
            }
        },
        {
            path : "/dashboard",
            name : "dashboard",
            component : ()=> import("@/views/dashboard/dashboard.vue")
        },
        {
            path : "/product",
            name : "product",
            component :  ()=> import("@/views/product/product.vue")
        },
        {
            path : "/category",
            name : "category",
            component :  ()=> import("@/views/category/category.vue")
        },
        {
            path : "/supplier",
            name : "supplier",
            component :  ()=> import("@/views/supplier/supplier.vue")
        },
    ]

})

export default router ;