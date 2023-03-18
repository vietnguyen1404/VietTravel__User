<template>
    <div class="form-search">
        <b-form-group class="search-key-group">
            <label>Keywords</label>
            <b-form-input
                v-model="entry.tourName"
                class="search-key-input"></b-form-input>
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </b-form-group>
        <b-form-group class="mt-3">
            <label>Date</label>
            <Datepicker
                class="d-block"
                v-model="entry.date"
                value-type="YYYY-MM-DD"
                format="DD-MM-YYYY"
                autoApply
                placeholder="From..."></Datepicker>
        </b-form-group>
        <div class="row mt-3">
            <div class="col-lg-6">
                <b-form-group>
                    <label>Min Price</label>
                    <b-input v-model="entry.minPrice" />
                </b-form-group>
            </div>
            <div class="col-lg-6">
                <b-form-group>
                    <label>Max Price</label>
                    <b-input v-model="entry.maxPrice" />
                </b-form-group>
            </div>
        </div>
        <b-form-group class="mt-3 search-destination-group">
            <label>Destination</label>
            <b-form-select
                aria-placeholder="Choose Destination"
                class="search-destination"
                v-model="entry.destination"
                :options="destinations" />
            <i class="fa-solid fa-caret-down"></i>
        </b-form-group>
        <div class="search-btn mt-3" @click="searchTour">SEARCH</div>
    </div>
</template>
<script>
// import moment from "moment";
export default {
    data: () => ({
        entry: {
            tourName: "",
            date: null,
            minPrice: "",
            maxPrice: "",
            destination: null,
        },
        destinations: [
            { value: null, text: "Destination" },
            { value: "hue", text: "Hue" },
            { value: "sai gon", text: "Sai Gon" },
            { value: "ha noi", text: "Ha Noi" },
        ],
    }),
    watch: {
        "$route.query": {
            handler: function () {
                this.entry = {
                    ...this.$route.query,
                };
            },
        },
    },
    methods: {
        searchTour() {
            for (const [key, value] of Object.entries(this.entry)) {
                if (!value) {
                    delete this.$route.query[key];
                }
            }
            this.$router.push({
                name: this.$route.name,
                query: {
                    ...this.entry,
                },
            });
        },
    },
    created() {},
};
</script>
