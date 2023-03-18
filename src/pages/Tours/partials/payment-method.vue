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
                            <b-form-radio
                                v-model="paymentMethod"
                                v-b-toggle.cash
                                @click="handleToggleCheck"
                                value="cash"    
                            >
                            </b-form-radio>
                        </div>
                        <b-collapse class="payment-method-body" id="cash">
                            <p>
                                Quý khách vui lòng thanh toán tại bất kỳ văn
                                phòng Vietravel trên toàn quốc và các chi nhánh
                                tại nước ngoài. <a href="/">Xem chi tiết</a>.
                            </p>
                        </b-collapse>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="payment-method-item">
                        <div class="payment-method-item-top">
                            <div class="payment-method-name">
                                <i class="fa-solid fa-building-columns"></i>
                                <h1>ATM / Banking</h1>
                            </div>
                            <b-form-radio
                                v-model="paymentMethod"
                                v-b-toggle.banking
                                @click="handleToggleCheck"
                                value="banking"    
                            >
                            </b-form-radio>
                        </div>
                        <b-collapse class="payment-method-body" id="banking">
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
                        </b-collapse>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    watch : {
        paymentMethod : {
            handler : function() {
                this.$emit('update', this.paymentMethod);
            }
        }
    },
    methods: {
        handleToggleCheck(e) {
            e.target.classList.toggle("active");
        },
    },
    data : () => ({
        paymentMethod : ''
    })
};
</script>
