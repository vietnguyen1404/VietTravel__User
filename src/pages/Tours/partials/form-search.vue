<template>
    <div class="form-search">
        <b-form-group class="search-key-group">
            <label>Keywords</label>
            <b-form-input
                v-model="entry.key"
                class="search-key-input"></b-form-input>
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </b-form-group>
        <b-form-group class="mt-3">
            <label>Date</label>
            <Datepicker
                class="d-block"
                v-model="entry.date"
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
        <div class="search-btn mt-3">SEARCH</div>
    </div>
</template>
<script>
export default {
    data: () => ({
        entry: {
            key: "",
            date: "",
            minPrice: "",
            maxPrice: "",
            destination: null,
        },
        destinations: [
            { value: "1", text: "Hue" },
            { value: "2", text: "Sai Gon" },
            { value: "3", text: "Ha Noi" },
        ],
    }),
};
</script>
