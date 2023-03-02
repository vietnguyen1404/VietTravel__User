<template>
    <div class="d-block w-100" style="background-color: #f3f3f3">
        <div class="dashboard">
            <div class="my-profile">
                <div class="header">
                    <h1>My Profile</h1>
                    <router-link
                        :to="{ name: 'user.editProfile' }"
                        class="reset-a">
                        Edit Profile
                    </router-link>
                </div>
                <hr />
                <div class="body">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="avatar">
                                <img
                                    src="@/assets/images/destination/destination1.jpg"
                                    alt="avatar" />
                            </div>
                        </div>
                        <div class="col-lg-10">
                            <div class="profile-info">
                                <div class="row">
                                    <div class="col-lg-6 profile-item-wrapper">
                                        <div class="profile-item">
                                            <span class="info-name">Name </span>
                                            <span class="info-data"
                                                >Viet Nguyen</span
                                            >
                                        </div>
                                    </div>
                                    <div class="col-lg-6 profile-item-wrapper">
                                        <div class="profile-item">
                                            <span class="info-name"
                                                >Gender
                                            </span>
                                            <span class="info-data">Male</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 profile-item-wrapper">
                                        <div class="profile-item">
                                            <span class="info-name">
                                                Birth Date
                                            </span>
                                            <span class="info-data">
                                                April 14, 2004
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 profile-item-wrapper">
                                        <div class="profile-item">
                                            <span class="info-name"
                                                >Country
                                            </span>
                                            <span class="info-data">
                                                Viet Nam
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 profile-item-wrapper">
                                        <div class="profile-item">
                                            <span class="info-name">
                                                Email
                                            </span>
                                            <span class="info-data">
                                                ntviet1404@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 profile-item-wrapper">
                                        <div class="profile-item">
                                            <span class="info-name">
                                                Phone
                                            </span>
                                            <span class="info-data">
                                                0835005945
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {},
};
</script>
