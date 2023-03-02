<template>
  <div id="popular-destination">
    <div class="container">
      <category-home-header title="Popular Destinations" subTitle="View All Destinations"/>
      <div class="popular-destionation-list">
        <div class="popular-destination-item " v-for="n in 5" :key="n">
          <img :src="require(`@/assets/images/destination/destination${n}.jpg`)" alt="" loading="lazy"/>
          <div class="count-tour">4 Tours</div>
          <div class="popular-destination-content">
            <h4>America</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separate.
            </p>
            <router-link to="/"> VIEW ALL TOURS</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import categoryHomeHeader from '@/components/category-home-header.vue';
export default {
components : {categoryHomeHeader}
}
</script>
