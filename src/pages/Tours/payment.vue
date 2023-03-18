<template>
    <div id="tour-payment">
        <paymentStep />
        <paymentSteps2 :value="stepActive" />
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <contactDetail
                                v-if="stepActive === 1"
                                v-model="entry"
                                @update="
                                    (value) => (entry.contactDetail = value)
                                " />
                            <paymentMethod
                                v-if="stepActive === 2"
                                v-model="entry"
                                @update="
                                    (value) => (entry.paymentMethod = value)
                                " />
                        </div>
                        <div class="col-lg-12 text-center">
                            <button
                                v-if="stepActive !== 2"
                                class="btn-primary mt-3"
                                @click="handleClickNext">
                                Next Step
                            </button>
                            <button
                                v-else
                                class="btn-primary mt-3"
                                @click="handleSubmitBooking">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <formCheckout :value="entry.tour" />
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
import { mapActions } from "vuex";
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
        entry: {
            tour: null,
            contactDetail: null,
            paymentMethod: "",
        },
    }),
    watch: {
        entry: {
            handler: function () {},
            deep: true,
        },
    },
    methods: {
        ...mapActions("tour", ["GetTour"]),
        ...mapActions("tourBooking", ["BookingTour"]),
        handleClickNext() {
            if (this.stepActive < 3 && this.stepActive >= 0) {
                this.stepActive += 1;
                window.scrollTo({ top: 250, behavior: "smooth" });
            }
        },
        async getTour() {
            let res = await this.GetTour(this.$route.params.id);
            if (res.code === 200) {
                this.entry.tour = res.tour;
            }
        },
        handleSubmitBooking() {
            let tourBooking = this.entry;
            let infoBooking = JSON.parse(localStorage.getItem("tourBooking"));
            tourBooking = {
                ...tourBooking,
                ...infoBooking,
            };
            delete tourBooking.tour;
            this.$swal({
                title: "Confirm Booking",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    let res = this.BookingTour(tourBooking);
                    if(res.code === 200) {
                        console.log("RES", res);
                        this.$swal.fire("Saved!", '', "success");
                    }
                } else if (result.isDenied) {
                    this.$swall.fire("Changes are not saved", "", "info");
                }
            });
        },
    },
    created() {
        this.getTour();
    },
};
</script>
<style scoped></style>
