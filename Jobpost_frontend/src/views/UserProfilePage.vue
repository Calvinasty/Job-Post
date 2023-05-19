<template>
    <div class="userprofile">


        <JobSearchNav />

        <section class="user-profile">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>
            <div class="profile-section">
                <div class="profile">
                    <div class="profile-card">
                        <img src="images/userprofile.svg" alt="pic">
                        <h3>Daniella McDan</h3>
                        <span>Software Developer</span>
                    </div>
                    <div class="jobsapplied">
                        <div class="jobsapplied-1">
                            <img src="images/user_profile_icon.svg" alt="">
                            <p>Jobs Applied</p>
                        </div>
                        <div class="jobsapplied-1">
                            <img src="images/user_profile_icon.svg" alt="">
                            <p>Jobs Applied</p>
                        </div>
                    </div>
                </div>
                <div class="profile-details">
                    <CardInformationComponent />
                </div>
            </div>
            <div class="btnsec">
                <button class="btn">Save</button>
                <button class="btns">Cancel</button>
            </div>
        </section>

        <FooterComponent />

    </div>
</template>

<script>
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue'
import FooterComponent from '../components/FooterComponent.vue';
import CardInformationComponent from '../components/userprofilepage/CardInformationComponent.vue';

export default {
    components: {
        FooterComponent,
        JobSearchNav,
        CardInformationComponent,

    },

    data() {
        return {
            title: 'User Profile'
        }
    },

}
</script>

<style lang="css" scoped>
.title {
    font-weight: 600;
    font-size: 40px;
}

.profile-section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 43px;
    background-color: aqua;

}

.userprofile {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 70px;
    /* background-color: #367192; */
}

.user-profile {
    padding: 0px 146px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    /* background-color: red; */

}

.profile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* padding-top: 66px; */
    /* width: 42%; */
    background-color: #FFFFFF;

}

.profile-card {
    border: 2px solid #ededed;
    border-bottom: 5px solid #88CC00;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 42px 59px;
    width: 363px;
    height: 404px;
}

.profile-card h3 {
    font-size: 30px;
    font-weight: 400;
}

.profile-card span {
    font-size: 20px;
    font-weight: 100;
}

.profile-card>img {
    width: 165px;
    height: 160px;
    margin-bottom: 51px;
}

.jobsapplied {
    display: flex;
    flex-direction: column;
    gap: 51px;
    padding: 57px 20px;
}

.jobsapplied-1 {
    display: flex;
    flex-direction: row;
}

.jobsapplied-1 p {
    margin-left: 33px;
    font-size: 20px;
    font-weight: 600;
}




























.btnsec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 57px 0;
    gap: 56px;
    /* background-color: aqua; */
}

.btn {

    border-radius: 8px;
    width: 194px;
    height: 64px;
    font-size: 20px;
    background-color: #040404;
    color: #ffffff;
}

.btns {
    border: 1px solid #878787;
    border-radius: 8px;
    width: 194px;
    height: 64px;
    font-size: 20px;
    background-color: #FFFFFF;
    color: #000000;
}
</style>