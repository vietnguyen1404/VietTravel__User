export default [
    {
        path: "/",
        component: () => import("../pages"),
        redirect: "/home",
        children: [
            {
                name: "home",
                path: "/home",
                component: () => import("../pages/Home/home"),
            },
        ],
    },
    {
        name: "tour",
        path: "/tour",
        redirect: "/tour/list",
        component: () => import("../pages/Tours/index.vue"),
        children: [
            {
                name: "tour.list",
                path: "/tour/list",
                component: () => import("../pages/Tours/list.vue"),
            },
            {
                name: "tour.detail",
                path: "/tour/detail/:id",
                component: () => import("../pages/Tours/detail.vue"),
                children: [],
            },
            {
                name: "tour.payment",
                path: "/tour/tourmaster-payment/:id",
                component: () => import("../pages/Tours/payment.vue"),
            },
        ],
    },

    // {
    //     path: "*",
    //     redirect: "/error",
    // },
    {
        name: "login",
        path: "/login",
        component: () => import("../pages/Login"),
    },
    {
        name: "sign-up",
        path: "/sign-up",
        component: () => import("../pages/Sign Up"),
    },
    {
        name: "user",
        path: "/user",
        component: () => import("@/pages/Dashboard/index.vue"),
        redirect : "/user/dashboard",
        children : [
            {
                name : "user.dashboard",
                path : "/user/dashboard",
                component : () => import("@/pages/Dashboard/partials/dashboard.vue")
            },
            {
                name : "user.editProfile",
                path : "/user/editProfile",
                component : () => import("@/pages/Dashboard/partials/editProfile.vue")
            },
            {
                name : "user.changePassword",
                path : "/user/changePassword",
                component : () => import("@/pages/Dashboard/partials/changePassword.vue")
            },

        ]
    },
    {
        path: "/error",
        component: () => import("../pages/error"),
    },
];
