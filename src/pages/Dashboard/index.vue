<template>
    <div class="d-flex">
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>
<script>
import sideBar from "./partials/side-bar.vue";
export default {
    components: { sideBar },
};
</script>
