import VueRouter from "vue-router";
import routes from "./router/index";

const router = new VueRouter({
    // history: VueRouter.createWebHistory(),
    routes,
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

const originalPush = router.push
router.push = function push(location, onResolve, onReject)
{
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    }
 
    return originalPush.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            return err
        }
   
        return Promise.reject(err)
    })
}

export default router;
