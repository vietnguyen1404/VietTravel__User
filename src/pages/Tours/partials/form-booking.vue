<template>
    <div id="form-booking">
        <div class="form-booking-title">
            <h1>BOOKING TOUR</h1>
        </div>
        <hr />
        <div class="booking-from">
            <h1>From :</h1>
            <Datepicker
                v-model="infoBooking.date"
                autoApply
                placeholder="From..."
                format="DD/MM/YYYY"></Datepicker>
        </div>
        <hr />
        <div class="booking-participants">
            <h1 class="booking-participants-title">Participants</h1>
            <div class="booking-participants-item">
                <div class="booking-participants-item-title">
                    <h1>Adult</h1>
                    <span>From 18 year old or older</span>
                </div>
                <div class="booking-participants-item-amount">
                    <span class="minus-btn" @click="reduceNumberOfAdult">
                        <i class="fa-solid fa-minus"></i>
                    </span>
                    <div class="number">
                        {{ infoBooking.participants.adult }}
                    </div>
                    <span class="plus-btn" @click="increaseNumberOfAdult">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </div>
            <div class="booking-participants-item">
                <div class="booking-participants-item-title">
                    <h1>Children</h1>
                    <span>From 2 years old to 17 years old</span>
                </div>
                <div class="booking-participants-item-amount">
                    <span class="minus-btn" @click="reduceNumberOfChildren">
                        <i class="fa-solid fa-minus"></i>
                    </span>
                    <span class="number">{{
                        infoBooking.participants.children
                    }}</span>
                    <span class="plus-btn" @click="increaseNumberOfChildren">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </div>
            <div class="booking-participants-item">
                <div class="booking-participants-item-title">
                    <h1>Baby</h1>
                    <span>Under 2 year old (Free)</span>
                </div>
                <div class="booking-participants-item-amount">
                    <span class="minus-btn" @click="reduceNumberOfBaby">
                        <i class="fa-solid fa-minus"></i>
                    </span>
                    <span class="number">{{
                        infoBooking.participants.baby
                    }}</span>
                    <span class="plus-btn" @click="increaseNumberOfBaby">
                        <i class="fa-solid fa-plus"></i>
                    </span>
                </div>
            </div>
        </div>
        <hr />
        <div class="total">
            <span>Total :</span>
            <h1>${{ total }}</h1>
        </div>
        <!-- <router-link :to="{ name: 'tour.payment' , params : {infoBooking : this.infoBooking , tour : this.tourInfo} }"> -->
        <div class="book-btn" @click="handleBooking">
            <i class="fa-solid fa-cart-shopping"></i>
            BOOK NOW
        </div>
        <!-- </router-link> -->
    </div>
</template>
<script>
import moment from "moment";
export default {
    props: {
        tour: Object,
    },
    data() {
        return {
            infoBooking: {
                date: null,
                participants: {
                    adult: 0,
                    children: 0,
                    baby: 0,
                },
            },
            tourInfo: null,
        };
    },
    watch: {
        infoBooking: {
            handler: function () {},
            deep: true,
        },
    },
    computed: {
        total() {
            return (
                this.tour.price.adult * this.infoBooking.participants.adult +
                this.tour.price.children *
                    this.infoBooking.participants.children
            );
        },
    },
    methods: {
        customFormatter(date) {
            return moment(date).subtract(10, "days").calendar();
        },
        increaseNumberOfAdult() {
            this.infoBooking.participants.adult =
                this.infoBooking.participants.adult + 1;
        },
        reduceNumberOfAdult() {
            if (this.infoBooking.participants.adult > 0) {
                this.infoBooking.participants.adult -= 1;
            } else {
                alert("Không rồi còn đòi giảm nữa !!!");
            }
        },
        increaseNumberOfChildren() {
            this.infoBooking.participants.children =
                this.infoBooking.participants.children + 1;
        },
        reduceNumberOfChildren() {
            if (this.infoBooking.participants.children > 0) {
                this.infoBooking.participants.children -= 1;
            } else {
                alert("Không rồi còn đòi giảm nữa !!!");
            }
        },
        increaseNumberOfBaby() {
            this.infoBooking.participants.baby =
                this.infoBooking.participants.baby + 1;
        },
        reduceNumberOfBaby() {
            if (this.infoBooking.participants.baby > 0) {
                this.infoBooking.participants.baby -= 1;
            } else {
                alert("Không rồi còn đòi giảm nữa !!!");
            }
        },
        handleBooking() {
            const tourBooking = {
                ...this.infoBooking,
            };
            localStorage.setItem("tourBooking", JSON.stringify(tourBooking));
            this.$router.push({
                name: "tour.payment"
            });
        },
    },
    created() {
        this.tourInfo = this.tour;
    },
};
</script>
