<template>
    <div id="tour-list" class="mb-5">
        <div class="intro d-flex justify-content-center align-items-center">
            <h1>Choose Favourite Destination!</h1>
        </div>
        <div class="content mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <formSearch />
                    </div>
                    <div class="col-lg-8">
                        <div class="row" v-if="loading">
                            <div
                                class="col-lg-6"
                                v-for="(tour, index) in listTour"
                                :key="index">
                                <tourItem :tour="tour" />
                            </div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center h-100" v-else>
                            <b-spinner label="Loading..."></b-spinner>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import formSearch from "./partials/form-search.vue";
import tourItem from "@/components/tour-item.vue";
import { mapActions } from "vuex";

export default {
    components: {
        formSearch,
        tourItem,
    },
    data: () => ({
        listTour: [],
        loading : true
    }),
    methods: {
        ...mapActions("tour", ["GetListTour"]),

        async getData() {

            let response = await this.GetListTour(this.$route.query);
            if (response.code === 200) {
                this.listTour = response.data;
            }
            // this.loading = true ;
        },
    },
    watch: {
        "$route.query": {
            handler: function () {
                console.log("QUERY CHANGE :", this.$route.query);
                this.getData(this.$route.query);
            },
            deep: true,
        },
    },
    created() {
        this.getData();
    },
};
</script>
