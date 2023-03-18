<template>
    <div class="tour-payment-contact">
        <h1>Contact Details</h1>
        <div class="form-item">
            <label class="form-label"
                >Full Name
                <div class="text-danger">*</div>
            </label>
            <input
                type="text"
                class="form-control form-input"
                v-model="entry.fullName"
            />
        </div>
        <div class="form-item">
            <label class="form-label"
                >Email
                <div class="text-danger">*</div>
            </label>
            <input
                type="email"
                class="form-control form-input"
                v-model="entry.email"
            />
        </div>
        <div class="form-item">
            <label class="form-label"
                >Phone
                <div class="text-danger">*</div>
            </label>
            <input
                type="text"
                class="form-control form-input"
                v-model="entry.phone"
            />
        </div>
        <div class="form-item">
            <label class="form-label"
                >Country
                <div class="text-danger">*</div>
            </label>
            <select class="form-select" v-model="entry.country">
                <option selected>Country</option>
                <option value="vn">Việt Nam</option>
                <option value="usa">USA</option>
                <option value="bra">Brazil</option>
            </select>
        </div>
        <div class="form-item">
            <label class="form-label"
                >Adress
                <div class="text-danger">*</div></label
            >
            <input
                type="text"
                class="form-control form-input"
                v-model="entry.address"
            />
        </div>
        <div class="tour-contact-notes">
            <i class="fa-regular fa-note-sticky"></i>
            <h1>Notes</h1>
        </div>
        <div class="form-item">
            <label class="form-label">Additional Notes </label>
            <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                v-model="entry.notes"
            ></textarea>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    watch: {
        entry: {
            handler() {
                this.$emit("update",this.entry);
            },
            deep: true,
        },
    },
    data: () => ({
        entry: {
            fullName: "",
            email: "",
            phone: "",
            country: "",
            address: "",
            notes: "",
        },
    }),
};
</script>
<style scoped lang="scss"></style>
