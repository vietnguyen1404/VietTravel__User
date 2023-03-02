<template>
    <div class="tour-item">
        <router-link :to="{ name : 'tour.detail' , params : { id : 2}}">
            <img
                :src="require(`@/assets/images/destination/destination1.jpg`)"
                alt="" />
            <div class="label" v-if="entry.seller">Best Seller</div>
            <div class="tour-info">
                <div class="tour-title">
                    <i class="fa-solid fa-bolt-lightning"></i>
                    <h1>
                        {{ entry.name }}
                    </h1>
                </div>
                <div class="tour-duration">
                    <i class="fa-solid fa-timer"></i>
                    {{ entry.duration }} Days
                </div>
                <div class="tour-footer">
                    <div class="tour-rate">
                        <i
                            class="fa-solid fa-star"
                            v-for="(n, index) in entry.review"
                            :key="index"></i>
                        ({{ entry.review.length }} Review)
                    </div>
                    <div class="tour-price">
                        <h1>${{ entry.price }}</h1>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        value: Object,
    },
    data: () => ({
        entry: {
            id: 1,
            image: "@/assets/images/destination/destination1.jpg",
            name: "Venice, Rome and Milan - 9 Days 8 Nights",
            duration: 8,
            rate: 5,
            review: ["tot", "tot", "tot", "tot", "tot"],
            price: 3000,
            seller: true,
        },
    }),
};
</script>
