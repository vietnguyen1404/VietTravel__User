<template>
    <div id="popular-tour">
        <div class="container">
            <category-home-header
                title="Popular Tours"
                subTitle="View All Popular Tours" />
            <div class="tour-list">
                <div class="row">
                    <div
                        class="col-lg-4"
                        v-for="tour in tourList"
                        :key="tour.id">
                        <div class="tour-item">
                            <img
                                :src="require(`@/assets/images/destination/destination1.jpg`)"
                                alt="" />
                            <div class="label" v-if="tour.seller">
                                Best Seller
                            </div>
                            <div class="tour-info">
                                <div class="tour-title">
                                    <i class="fa-solid fa-bolt-lightning"></i>
                                    <h1>
                                        {{ tour.name }}
                                    </h1>
                                </div>
                                <div class="tour-duration">
                                    <i class="fa-solid fa-timer"></i>
                                    {{ tour.duration }} Days
                                </div>
                                <div class="tour-footer">
                                    <div class="tour-rate">
                                        <i
                                            class="fa-solid fa-star"
                                            v-for="(n,index) in tour.review"
                                            :key="index"></i>
                                        ({{ tour.review.length }} Review)
                                    </div>
                                    <div class="tour-price">
                                        <h1>${{ tour.price }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import categoryHomeHeader from "@/components/category-home-header.vue";
export default {
    components: { categoryHomeHeader },
    data: () => ({
        tourList: [
            {
                id: 1,
                image: "@/assets/images/destination/destination1.jpg",
                name: "Venice, Rome and Milan - 9 Days 8 Nights",
                duration: 8,
                rate: 5,
                review: ["tot"],
                price: 3000,
                seller: true,
            },
            {
                id: 2,
                image: "@/assets/images/destination/destination1.jpg",
                name: "Venice, Rome and Milan - 9 Days 8 Nights",
                duration: 8,
                rate: 5,
                review: ["tot"],
                price: 3000,
                seller: true,
            },
            {
                id: 3,
                image: "@/assets/images/destination/destination1.jpg",
                name: "Venice, Rome and Milan - 9 Days 8 Nights",
                duration: 8,
                rate: 5,
                review: ["tot", "tot","tot","tot","tot"],
                price: 3000,
                seller: true,
            },
        ],
    }),
};
</script>
