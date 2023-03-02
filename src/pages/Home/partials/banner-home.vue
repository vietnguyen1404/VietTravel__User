<template>
  <div id="home-banner">
    <!-- <img src="@/assets/images/banners/home-banner.jpg" alt="Banner Home" /> -->
        <div class="home-banner-content">
            <h1>Find Next Place To Visit</h1>
            <h6>Discover amzaing places at exclusive deals</h6>
            <div class="form-search">
                <div class="search-name">
                    <input type="text" placeholder="keywords">
                    <i class="fa fa-search"></i>
                </div>
                <div id="destination-select">
                    <select name="destination-select">
                        <option selected value="1">Destination</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div id="price-select">
                    <select name="price-select">
                        <option selected value="1">Price</option>
                        <option value="1">10000</option>
                        <option value="1">20000</option>
                        <option value="1">30000</option>
                        <option value="1">40000</option>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <button class="btn-search">Search</button>
            </div>
        </div>
  </div>
</template>
