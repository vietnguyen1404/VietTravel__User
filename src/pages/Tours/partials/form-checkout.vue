<template>
    <div class="form-checkout">
        <h1 class="form-checkout-title">Form Checkout</h1>
        <hr />
        <div class="form-checkout-top">
            <img src="@/assets/images/destination/destination1.jpg" alt="" />
            <h1>{{ entry.tour.name }}</h1>
        </div>
        <hr />
        <div class="form-checkout-info">
            <div class="form-checkout-info-item">
                <h1>Travel Date :</h1>
                <span> {{ entry.infoBooking.date | formatDateTime }}</span>
                <RouterLink :to="{ name: 'tour.detail', params: { id: 3 } }">
                    <span>( Edit )</span>
                </RouterLink>
            </div>
            <div class="form-checkout-info-item">
                <h1>Duration :</h1>
                <span>{{ entry.tour.duration }} Days</span>
            </div>
        </div>
        <hr />
        <div class="form-checkout-participants">
            <div class="form-checkout-participants-title">
                <h1>Participants</h1>
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="form-checkout-participants-item">
                <h1>
                    Adult
                    <span>X {{ entry.infoBooking.participants.adult }}</span>
                </h1>
                <span
                    >${{
                        this.countPrice(
                            entry.tour.price.adult,
                            entry.infoBooking.participants.adult
                        )
                    }}</span
                >
            </div>
            <div class="form-checkout-participants-item">
                <h1>
                    Children
                    <span>X {{ entry.infoBooking.participants.children }}</span>
                </h1>
                <span
                    >${{
                        this.countPrice(
                            entry.tour.price.children,
                            entry.infoBooking.participants.children
                        )
                    }}</span
                >
            </div>
            <div class="form-checkout-participants-item">
                <h1>
                    Baby
                    <span>X {{ entry.infoBooking.participants.baby }}</span>
                </h1>
                <span>FREE</span>
            </div>
        </div>
        <hr />
        <div class="total">
            <h1>Total</h1>
            <span>${{ this.totalPrice }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: Object,
    },
    watch: {
        value: {
            handler() {
                this.entry.tour = this.value;
                console.log("WATCH", this.value);
            },
        },
    },
    computed: {
        totalPrice() {
            let quantity = 0,
                total = 0;
            for (const [key, value] of Object.entries(
                this.entry.infoBooking.participants
            )) {
                quantity += value;
                key.charAt(1);
            }
            for (const [key, value] of Object.entries(this.entry.tour.price)) {
                total += value;
                key.charAt(1);
            }
            return quantity * total;
        },
    },
    methods: {
        countPrice(price, quantity) {
            return price * quantity;
        },
        getData() {
            this.entry.infoBooking = JSON.parse(
                localStorage.getItem("tourBooking")
            );
        },
    },
    data: () => ({
        entry: {
            tour: null,
            infoBooking: null,
        },
    }),
    created() {
        this.getData();
    },
};
</script>
