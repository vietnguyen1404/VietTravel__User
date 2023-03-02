<template>
    <div id="tour-list">
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
                        <div class="row">
                            <div class="col-lg-6">
                                <tourItem />
                            </div>
                            <div class="col-lg-6">
                                <tourItem />
                            </div>
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

export default {
    components: {
        formSearch,
        tourItem,
    },
    data: () => ({
        listTour: [],
    }),
    created() {},
};
</script>
