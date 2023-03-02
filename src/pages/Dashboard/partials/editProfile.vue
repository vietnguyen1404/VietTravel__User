<template>
    <div class="edit-profile">
        <div class="avatar">
            <img :src="entry.avatar ? entry.avatar : require('@/assets/images/destination/destination1.jpg')" alt="" />
            <button @click="onChangeAvatar" class="btn-primary">
                CHANGE AVATAR
            </button>
            <input
                ref="avatar-input"
                type="file"
                id="avatar-input"
                class="d-none"
                @change="handleAvatarInputChange" />
        </div>
        <div class="edit-profile-info">
            <div class="form-item">
                <label class="form-label"
                    >Full Name
                    <div class="text-danger">*</div>
                </label>
                <input
                    type="text"
                    class="form-control form-input"
                    v-model="entry.fullName" />
            </div>
            <div class="form-item">
                <label class="form-label"
                    >Email
                    <div class="text-danger">*</div>
                </label>
                <input
                    type="email"
                    class="form-control form-input"
                    v-model="entry.email" />
            </div>
            <div class="form-item">
                <label class="form-label"
                    >Phone
                    <div class="text-danger">*</div>
                </label>
                <input
                    type="text"
                    class="form-control form-input"
                    v-model="entry.phone" />
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
                    v-model="entry.address" />
            </div>
            <div class="form-item">
                <label class="form-label">
                    Birth Date
                    <div class="text-danger">*</div>
                </label>
                <Datepicker
                    class="form-picker"
                    v-model="entry.date"
                    autoApply
                    placeholder="From..."></Datepicker>
            </div>
        </div>
        <div class="d-flex justify-content-center" style="width: 55%">
            <button class="btn-primary">UPDATE PROFILE</button>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    watch: {
        entry: {
            handler() {},
            deep: true,
        },
    },
    data: () => ({
        entry: {
            avatar: "",
            fullName: "",
            email: "",
            phone: "",
            country: "",
            address: "",
            notes: "",
            date: "",
        },
    }),
    methods: {
        onChangeAvatar() {
            this.$refs["avatar-input"].click();
        },
        handleAvatarInputChange(e) {
            URL.revokeObjectURL(this.entry.avatar)
            let avatarFile = e.target.files[0];
            this.entry.avatar = URL.createObjectURL(avatarFile);
            console.log(this.entry.avatar);
        },
    },
    destroyed() {
        URL.revokeObjectURL(this.entry.avatar)
    }
};
</script>
<style scoped lang="scss"></style>
