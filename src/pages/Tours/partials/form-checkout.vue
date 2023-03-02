<template>
    <div class="form-checkout">
        <h1 class="form-checkout-title">Tour Information</h1>
        <hr />
        <div class="form-checkout-top">
            <img src="@/assets/images/destination/destination1.jpg" alt="" />
            <h1>Austria – 6 Days in Vienna, Hallstatt</h1>
        </div>
        <hr />
        <div class="form-checkout-info">
            <div class="form-checkout-info-item">
                <h1>Travel Date :</h1>
                <span> December 5, 2022 </span>
                <RouterLink :to="{ name: 'tour.detail', params: { id: 3 } }">
                    <span>( Edit )</span>
                </RouterLink>
            </div>
            <div class="form-checkout-info-item">
                <h1>End Date :</h1>
                <span> December 10, 2022 </span>
            </div>
            <div class="form-checkout-info-item">
                <h1>Duration :</h1>
                <span>5 days</span>
            </div>
        </div>
        <hr />
        <div class="form-checkout-participants">
            <div class="form-checkout-participants-title">
                <h1>Participants</h1>
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="form-checkout-participants-item">
                <h1>Adult <span>X 2</span></h1>
                <span>$20000</span>
            </div>
            <div class="form-checkout-participants-item">
                <h1>Children <span>X 2</span></h1>
                <span>$20000</span>
            </div>
            <div class="form-checkout-participants-item">
                <h1>Baby <span>X 2</span></h1>
                <span>$20000</span>
            </div>
        </div>
        <hr />
        <div class="total">
            <h1>Total</h1>
            <span>$200000</span>
        </div>
    </div>
</template>
