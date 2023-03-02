<template>
    <div id="home">
        <banner-home />
        <popularDestination />
        <popularTours />
        <secondaryBanner />
        <customerReview />
        <articlesLatest />
    </div>
</template>

<script>
    import bannerHome from "./partials/banner-home.vue";
import popularDestination from "./partials/popular-destinations.vue";
import popularTours from "./partials/popular-tours.vue";
import secondaryBanner from "./partials/secondary-banner.vue";
import customerReview from "./partials/customer-review.vue";
import articlesLatest from "./partials/articles-latest.vue";
export default {
    components: {
        bannerHome,
        popularDestination,
        popularTours,
        secondaryBanner,
        customerReview,
        articlesLatest,
    },
    data() {
        return {
            courses: [],
        };
    },

    created() {},
};
</script>
