<template>
    <div id="tour-detail" v-if="tour">
        <tourGallery />
        <div class="container">
            <ul class="tour-navbar">
                <li class="tour-navbar-item active">Detail</li>
                <li class="tour-navbar-item">Photo</li>
                <li class="tour-navbar-item">Itinerary</li>
                <li class="tour-navbar-item">Reviews</li>
            </ul>
            <div class="row">
                <div class="col-lg-8">
                    <div class="tour-wrapper">
                        <div class="tour-info">
                            <h1 class="tour-name">
                                {{ tour.name }}
                            </h1>
                            <div class="tour-rate">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span>({{ tour.reviews.length }} Review)</span>
                            </div>
                            <div class="tour-sumary">
                                <div class="tour-sumary-item">
                                    <i class="fa-regular fa-clock"></i>
                                    <span>6 Days 5 Nights</span>
                                </div>
                                <div class="tour-sumary-item">
                                    <i class="fa-solid fa-users"></i>
                                    <span>Max People : 50</span>
                                </div>
                                <div class="tour-sumary-item">
                                    <i class="fa-solid fa-wifi"></i>
                                    <span>Wifi Available</span>
                                </div>
                                <div class="tour-sumary-item">
                                    <i class="fa-regular fa-calendar-days"></i>
                                    <span>Jan 18’ - Dec 21'</span>
                                </div>
                                <div class="tour-sumary-item">
                                    <i class="fa-regular fa-user"></i>
                                    <span>Min Age : 5+</span>
                                </div>
                                <div class="tour-sumary-item">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>Pickup: Airpot</span>
                                </div>
                            </div>
                            <div class="tour-description">
                                <h1 class="title-h1">Description</h1>
                                <p>
                                    {{ tour.description }}
                                </p>
                            </div>
                            <div class="tour-photos">
                                <div class="title">
                                    <i class="fa-regular fa-images"></i>
                                    <h1>Photos</h1>
                                </div>
                                <swiper
                                    :slides-per-view="1"
                                    :space-between="50"
                                    navigation
                                    :rewind="true"
                                    :pagination="{ clickable: true }"
                                    :autoplay="{
                                        delay: 10000,
                                        disableOnInteraction: false,
                                    }">
                                    <swiper-slide
                                        v-for="photo in tour.photos"
                                        :key="photo">
                                        <img
                                            class="tour-image"
                                            :src="
                                                require('@/assets/images/destination/destination2.jpg')
                                            "
                                            alt="" />
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div id="itinerary">
                                <h1>Itinerary</h1>
                                <div
                                    class="itinerary-item"
                                    v-for="n in 3"
                                    :key="n">
                                    <div
                                        class="itinerary-item-title"
                                        @click="onToggleItineraryTitle(n)"
                                        v-b-toggle="'itinerary-day-' + n">
                                        <h2>Day {{ n }}</h2>
                                        <span
                                            :class="'itinerary-day-' + `${n}`">
                                            Barcelona - Zaragoza - Madric
                                        </span>
                                    </div>
                                    <b-collapse
                                        class="itinerary-item-content"
                                        :id="'itinerary-day-' + `${n}`">
                                        <p>
                                            Some placeholder content for the
                                            collapse component. This panel is
                                            hidden by default but revealed when
                                            the user activates the relevant
                                            trigger.
                                        </p>
                                    </b-collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <formBooking :tour="tour" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tourGallery from "../Tours/partials/tour-gallery.vue";
import formBooking from "./partials/form-booking.vue";
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles

import { mapActions } from "vuex";

SwiperCore.use([Navigation, Pagination]);

export default {
    components: {
        tourGallery,
        formBooking,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
           tour : null
        };
    },
    methods: {
        ...mapActions("tour", ["GetTour"]),
        onToggleItineraryTitle(index) {
            document
                .getElementsByClassName(`itinerary-day-${index}`)[0]
                .classList.toggle("active");
        },
        async getTour() {
            let response = await this.GetTour(this.$route.params.id);
            this.tour = response.tour;
        },
    },
    created() {
        this.getTour();
    },
};
</script>
