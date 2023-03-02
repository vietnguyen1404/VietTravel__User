<template>
    <header id="header">
        <div class="header-top">
            <div class="header-contact">
                <div class="header-contact-phone">
                    <i class="fa fa-phone phone-icon"></i>
                    0123.456789
                </div>
                <div class="header-contact-email">
                    <i class="fa fa-envelope email-icon"></i>
                    ntviet@gmail.com
                </div>
            </div>
            <div class="header-top-right">
                <div class="header-social">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                </div>
                <div class="form-account" v-if="!userProfile">
                    <div class="btn-login">
                        <router-link :to="{ name: 'login' }">
                            <i class="fa-solid fa-user"></i>
                            Login
                        </router-link>
                    </div>
                    <div class="btn-signup">
                        <router-link :to="{ name: 'sign-up' }">
                            <i class="fa-solid fa-user-plus"></i>
                            Sign Up
                        </router-link>
                    </div>
                </div>
                <div class="form-account" v-else>
                    <div class="btn-login">
                        <router-link :to="{ name: 'user.dashboard' }">
                            <i class="fa-solid fa-user"></i>
                            hi : {{ getName(this.userProfile.fullName) }}
                        </router-link>
                    </div>
                    <div class="btn-signup">
                        <a href="/" @click="handleLogOut">
                            <i class="fa-solid fa-right-to-bracket"></i>
                            Log Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bot">
            <div class="container">
                <nav class="nav-bar">
                    <div class="logo-header">
                        <router-link :to="{ name: 'home' }">
                            <img src="../assets/images/logo/logo.png" alt="" />
                        </router-link>
                    </div>
                    <ul class="nav-list">
                        <li class="nav-item active">
                            <router-link :to="{ name: 'home' }">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'tour' }">
                                Tour List
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'tour' }">
                                WishList
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'tour' }">
                                Cart
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'tour' }">
                                Destinations
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'tour' }">
                                Blog
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    name: "page-header",
    data: () => ({
        userProfile: null,
    }),
    watch: {
        user(newValue) {
            this.userProfile = newValue;
        },
    },
    computed: mapState("user", ["user"]),
    methods: {
        ...mapGetters("user", ["getUser"]),
        ...mapActions("user", ["logOut"]),
        onScrollHeader() {
            let navbar = document.querySelector(".header-bot");
            window.addEventListener("scroll", () => {
                if (window.scrollY > 62) {
                    navbar.classList.add("active");
                } else {
                    navbar.classList.remove("active");
                }
            });
        },
        handleLogOut() {
            this.logOut();
        },
        getName(fullName) {
            let fullNameArr = fullName.split(" ");
            return fullNameArr[fullNameArr.length - 1];
        },
    },
    created() {
        this.userProfile = this.getUser();
    },
    mounted() {
        this.onScrollHeader();
    },
};
</script>
<style scoped lang="scss"></style>
