<template>
    <div class="tour-item">
        <router-link :to="{ name: 'tour.detail', params: { id: entry._id }}">
            <img
                :src="require(`@/assets/images/destination/destination1.jpg`)"
                alt="" />
            <div class="label" v-if="entry">Best Seller</div>
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
                            v-for="(n, index) in entry.reviews"
                            :key="index"></i>
                        ({{ entry.reviews.length }} Review)
                    </div>
                    <div class="tour-price">
                        <h1>${{ entry.price.adult }}</h1>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        tour: Object,
    },
    data: () => ({
        entry: {

        },
    }),
    created () {
        this.entry = this.tour
    }
};
</script>
