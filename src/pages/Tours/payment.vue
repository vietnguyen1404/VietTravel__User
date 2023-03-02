<template>
    <div id="tour-payment">
        <paymentStep />
        <paymentSteps2 :value="stepActive" />
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <contactDetail v-if="stepActive === 1" />
                            <paymentMethod v-if="stepActive === 2" />
                        </div>
                        <div class="col-lg-12 text-center">
                            <button
                                class="btn-primary mt-3"
                                @click="handleClickNext"
                            >
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <formCheckout />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import paymentStep from "./partials/payment-steps.vue";
import contactDetail from "./partials/contact-detail.vue";
import formCheckout from "./partials/form-checkout.vue";
import paymentMethod from "./partials/payment-method.vue";
import paymentSteps2 from "./partials/payment-steps2.vue";
export default {
    components: {
        paymentStep,
        paymentSteps2,
        contactDetail,
        formCheckout,
        paymentMethod,
    },
    data: () => ({
        stepActive: 1,
    }),
    watch: {},
    methods: {
        handleClickNext() {
            if (this.stepActive < 3 && this.stepActive >= 0) {
                this.stepActive += 1;
            }
        },
    },
};
</script>
<style scoped></style>
