<template>
    <div id="sign-up">
        <div class="container">
            <div class="note">
                <h1>
                    After creating an account, you'll be able to track your
                    payment status, track the confirmation and you can also rate
                    the tour after you finished the tour.
                </h1>
            </div>
            <div class="row">
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Username
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="entry.username" />
                        <div class="messageErr">
                            
                        </div>
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Password
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="entry.password" />
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Confirm Password
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="confirmPassword" />
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2"></div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Full Name
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="entry.profile.fullName" />
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Email
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="entry.profile.email" />
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex"
                            >Birth Date
                            <div class="text-danger">*</div></label
                        >
                        <Datepicker
                            class="d-block"
                            v-model="entry.profile.birthDate"
                            autoApply
                            placeholder="From..."></Datepicker>
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Country
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="entry.profile.country" />
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Phone
                            <div class="text-danger">*</div></label
                        >
                        <b-form-input v-model="entry.profile.phone" />
                    </b-form-group>
                </div>
                <div class="col-lg-6 my-2">
                    <b-form-group>
                        <label class="d-flex" for="userName"
                            >Gender
                            <div class="text-danger">*</div>
                        </label>
                        <b-form-radio-group
                            id="radio-group"
                            v-model="entry.profile.gender"
                            class="d-flex">
                            <b-form-radio value="Male">Male</b-form-radio>
                            <b-form-radio value="FeMale">FeMale</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                </div>
                <div class="col-lg-12">
                    <div
                        class="btn-full-width sign-up-btn"
                        @click="handleSignUp">
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    data: () => {
        return {
            confirmPassword: "",
            entry: {
                username: "",
                password: "",
                profile: {
                    fullName: "",
                    birthDate: "",
                    email: "",
                    phone: "",
                    country: "",
                    gender: "",
                },
            },
        };
    },
    methods: {
        ...mapActions("user", ["Register"]),
        async handleSignUp() {
            let response = await this.Register(this.entry);
            console.log("RES", response);
        },
    },
};
</script>
<style scoped lang="scss">
.mx-datepicker {
    width: 100%;
}
#sign-up {
    background-color: #f3f3f3;
}
</style>
