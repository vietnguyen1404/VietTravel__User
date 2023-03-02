<template>
    <div id="app">
        <pageHeader />
        <router-view></router-view>
        <pageFooter />
    </div>
</template>

<script>
import pageHeader from "@/components/page-header.vue";
import pageFooter from "./components/page-footer.vue";
export default {
    name: "App",
    components: { pageHeader, pageFooter },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
