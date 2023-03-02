<template>
    <div id="customer-review">
        <category-home-header title="Customer Reviews" subTitle="View All Reviews"/>
        <div class="container">
            <swiper
                :slides-per-view="3"
                :space-between="50"
                navigation
                :pagination="{ clickable: true }"
                :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false,
                }"
            >
                <swiper-slide v-for="n in 5" :key="n">
                    <div class="customer-review-item">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio consequuntur facilis odio quod
                            rerum, eos accusantium velit amet labore accusamus
                            numquam ipsa a odit unde, qui nisi modi vitae
                            debitis.
                        </p>
                        <div class="customer-info">
                            <div class="customer-avatar">
                                <img
                                    src="@/assets/images/destination/destination2.jpg"
                                    alt=""
                                />
                            </div>
                            <div class="customer-info-detail">
                                <h1 class="customer-name">JOHN SMITH</h1>
                                <div class="customer-rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span class="customer-job">YOUTUBER</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Navigation, Pagination } from 'swiper'
import categoryHomeHeader from "@/components/category-home-header.vue";
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    categoryHomeHeader
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
</style>
