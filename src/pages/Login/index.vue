<template>
    <div id="login">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-6">
                    <b-form-group>
                        <label>Username or E-Mail</label>
                        <b-input v-model="account.username" />
                    </b-form-group>
                </div>
                <div class="col-lg-6">
                    <b-form-group>
                        <label>Password</label>
                        <b-input v-model="account.password" />
                    </b-form-group>
                </div>
            </div>
            <div class="btn-full-width mt-5" @click="handleSignIn">
                SIGN IN!
            </div>
            <div class="mt-3 d-flex justify-content-end">
                <router-link class="fp-btn" to="/"
                    >Forget Password?</router-link
                >
            </div>
            <hr />
            <div class="d-flex align-items-center flex-column mt-5">
                <h2 class="d-block">DO NOT HAVE AN ACCOUNT?</h2>
                <router-link to="/" class="text-primary mt-2">
                    CREATE AN ACCOUNT
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: () => ({
        account: {
            username: "",
            password: "",
        },
    }),
    methods: {
        ...mapGetters("user", ["getUser"]),
        ...mapActions("user", ["PostLogin"]),
        async handleSignIn() {
            let response = await this.PostLogin(this.account);
            if (response.code === 200) {
                await this.$router.push({ path: "/" });
                // this.$router.go(0);
            }
        },
    },
};
</script>
