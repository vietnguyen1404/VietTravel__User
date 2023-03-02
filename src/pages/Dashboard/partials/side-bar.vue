<template>
    <section id="side-bar">
        <ul id="dashboard">
            <li class="item" v-for="(item, index) in menu" :key="index">
                <h1>{{ item.title }}</h1>
                <ul class="sub-item-wrapper">
                    <li
                        :class="isActive(child.active)"
                        v-for="(child, idx) in item.children"
                        :key="idx">
                        <router-link :to="{ name: child.to }" class="reset-a">
                            <i :class="child.icon"></i> {{ child.title }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>
<script>
import menu from "@/config/menu.json";
export default {
    data: () => ({
        menu: menu,
    }),
    watch: {
        "$route.name": {
            handler: function () {
                this.checkActive();
            },
        },
    },
    methods: {
        isActive(active) {
            return active ? "sub-item active" : "sub-item";
        },
        checkActive() {
            this.menu.map((item) => {
                item.children.map((item) => {
                    item.active = (item.to === this.$route.name);
                    return item;
                });
            });
        },
    },
    created() {
        this.checkActive();
    },
};
</script>
