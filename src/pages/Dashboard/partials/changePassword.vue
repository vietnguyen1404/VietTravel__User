<template>
    <div class="edit-profile">
        <div class="edit-profile-info">
            <div class="form-item">
                <label class="form-label"
                    >Old Password
                    <div class="text-danger">*</div>
                </label>
                <input
                    type="password"
                    class="form-control form-input"
                    v-model="entry.oldPassword" />
            </div>
            <div class="form-item">
                <label class="form-label"
                    >New Password
                    <div class="text-danger">*</div>
                </label>
                <input
                    type="password"
                    class="form-control form-input"
                    v-model="entry.newPassword" />
            </div>
            <div class="form-item">
                <label class="form-label"
                    >Confirm Password
                    <div class="text-danger">*</div>
                </label>
                <input
                    type="text"
                    class="form-control form-input"
                    v-model="entry.confirmPassword" />
            </div>
        </div>
        <div class="d-flex justify-content-center" style="width: 55%">
            <button class="btn-primary">CHANGE PASSWORD</button>
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
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    }),
    methods: {},
    beforeDestroy() {},
};
</script>
