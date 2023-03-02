<template>
    <div class="payment-steps">
        <div class="container">
            <h1 class="tour-name">Austria – 6 Days in Vienna, Hallstatt</h1>
        </div>
        <div class="payment-steps-wrapper">
            <div class="container">
                <div class="payment-steps-inner">
                    <div
                        class="payment-step"
                        v-for="step in paymentStepList"
                        :key="step.id"
                        :style="{
                            cursor:
                                step.status === 'complete' && step.id >= 2
                                    ? 'pointer'
                                    : 'unset',
                        }"
                    >
                        <i
                            class="fa-solid fa-check step-icon"
                            :class="step.status"
                            v-if="step.status == 'complete'"
                        ></i>
                        <i
                            v-else
                            :class="[
                                step.status,
                                `fa-${step.id}`,
                                'fa-solid',
                                'step-icon',
                            ]"
                        ></i>
                        <h1 class="step-name">{{ step.name }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
</template>
<script>
export default {
    props: {
        value: Array,
    },
    watch: {
        value: {
            handler() {
                if (this.value) {
                    this.paymentStepList = Object.assign(
                        {},
                        this.paymentStepList,
                        this.value
                    );
                    console.log("PP", this.paymentStepList);
                }
            },
            deep: true,
        },
    },
    computed: {},
    data: () => ({
        paymentStepList: [
            {
                id: 1,
                name: "Select Tour",
                status: "complete",
            },
            {
                id: 2,
                name: "Contact Details",
                status: "active",
            },
            {
                id: 3,
                name: "Payment",
                status: "continue",
            },
            {
                id: 4,
                name: "Complete",
                status: "continue",
            },
        ],
    }),
    created() {
        
    },
};
</script>
