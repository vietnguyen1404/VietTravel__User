<template>
    <div id="login">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-6">
                    <b-form-group>
                        <label class="mb-2">Username or E-Mail</label>
                        <b-input v-model="account.username" />
                    </b-form-group>
                </div>
                <div class="col-lg-6">
                    <b-form-group>
                        <label class="mb-2">Password</label>
                        <b-input v-model="account.password" />
                    </b-form-group>
                </div>
            </div>
            <div class="errMessage" v-if="errMessage">
                <h1>* {{ errMessage }}</h1>
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
        errMessage: "",
    }),
    methods: {
        ...mapGetters("user", ["getUser"]),
        ...mapActions("user", ["PostLogin"]),
        async handleSignIn() {
            let response = await this.PostLogin(this.account);
            if (response.code === 200) {
                // await this.$router.push({ path: "/" }).then(() => {this.$router.go()})
                const url = new URL("/", window.location.origin);
                window.location.href = url.toString();
            } else {
                this.errMessage = response.message;
            }
        },
    },
};
</script>
<style scoped lang="scss">
.errMessage {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    h1 {
        margin-left: 0.5rem;
        color: rgb(244, 94, 94);
    }
}
</style>
