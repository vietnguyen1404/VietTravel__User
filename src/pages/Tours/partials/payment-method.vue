<template>
    <div class="payment-method">
        <h1 class="payment-method-title">Payment</h1>
        <h2>Payment Methods</h2>
        <div class="payment-method-list">
            <div class="row">
                <div class="col-lg-6">
                    <div class="payment-method-item">
                        <div class="payment-method-item-top">
                            <div class="payment-method-name">
                                <i class="fa-solid fa-money-bill"></i>
                                <h1>Cash</h1>
                            </div>
                            <div
                                class="method-check"
                                data-bs-toggle="collapse"
                                data-bs-target="#cash"
                                @click="handleToggleCheck"
                            ></div>
                        </div>
                        <div class="payment-method-body collapse" id="cash">
                            <p>
                                Quý khách vui lòng thanh toán tại bất kỳ văn
                                phòng Vietravel trên toàn quốc và các chi nhánh
                                tại nước ngoài. <a href="/">Xem chi tiết</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="payment-method-item">
                        <div class="payment-method-item-top">
                            <div class="payment-method-name">
                                <i class="fa-solid fa-building-columns"></i>
                                <h1>ATM / Banking</h1>
                            </div>
                            <div
                                class="method-check"
                                data-bs-toggle="collapse"
                                data-bs-target="#banking"
                                @click="handleToggleCheck"
                            ></div>
                        </div>
                        <div class="payment-method-body collapse" id="banking">
                            <p>
                                HÌNH THỨC THANH TOÁN BẰNG THẺ ATM/ INTERNET
                                BANKING <br />
                                Vietravel chấp nhận thanh toán bằng thẻ ATM qua
                                cổng thanh toán 123 pay. <br /><br />
                                Hãy đảm bảo Quý khách đang sử dụng thẻ ATM do
                                ngân hàng trong nước phát hành và đã được kích
                                hoạt chức năng thanh toán trực tuyến.
                                <br /><br />
                                Hướng dẫn thanh toán thẻ qua cồng 123 pay :
                                https://123pay.vn/info/huong-dan/huong-dan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleToggleCheck(e) {
            e.target.classList.toggle("active");
        },
    },
};
</script>
