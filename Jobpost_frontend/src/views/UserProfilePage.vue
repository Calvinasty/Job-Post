<template>
    <div class="userprofile">
        <JobSearchNav />
        <section class="user-profile">
            <div class="title">
                <h4>Welcome, {{ title }}</h4>
            </div>
            <div class="profile-section">
                <div id="profile">
                    <div class="profile-card">
                        <img :src="Value.photo" alt="pic">
                        <h3>{{ usersName }}</h3>
                        <span>{{ userOccupation }}</span>
                    </div>
                    <div class="jobsapplied">
                        <div class="jobsapplied-1">
                            <img src="images/user_profile_icon.svg" alt="">
                            <router-link to="/jobSearch">Available Jobs</router-link>
                        </div>
                        <!-- <div class="jobsapplied-1">
                            <img src="images/user_profile_icon.svg" alt="">
                            <p>Jobs Applied</p>
                        </div> -->
                    </div>
                </div>
                <div class="profile-details">
                    <CardInformationComponent :key="key" :userValue="Value" :showPopup="showPopup" index="1"
                        :detailsTitle="inputCardDetails[0].cardTitle"
                        :inputInformation="inputCardDetails[0].cardInputInformation" :cardName="Value" :showDetails="true"
                        showpencil="showpencil">
                        <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputOne.name"
                            :inputType="inputCardDetails[0].cardInputInformation.inputOne.type" :Value="Value.fullname"
                            :inputId="inputCardDetails[0].cardInputInformation.inputOne.id" />

                        <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputTwo?.name"
                            :inputType="inputCardDetails[0].cardInputInformation.inputTwo.type" :Value="Value.email"
                            :inputId="inputCardDetails[0].cardInputInformation.inputTwo.id" />

                        <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputThree?.name"
                            :inputType="inputCardDetails[0].cardInputInformation.inputThree.type" :Value="Value.contact"
                            :inputId="inputCardDetails[0].cardInputInformation.inputThree.id" />

                        <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputFour?.name"
                            :inputType="inputCardDetails[0].cardInputInformation.inputFour.type" :Value="Value.linkenin"
                            :inputId="inputCardDetails[0].cardInputInformation.inputFour.id" />

                        <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputEight?.name"
                            :inputType="inputCardDetails[0].cardInputInformation.inputEight.type" :Value="Value.github"
                            :inputId="inputCardDetails[0].cardInputInformation.inputEight.id" />
                    </CardInformationComponent>

                    <CardInformationComponent :userValue="Value" :showPopup="showPopup" index="2"
                        :detailsTitle="inputCardDetails[1].cardTitle" :cardName="user.education" :showplus="true">
                        <InputComponent v-for="(school, schoolIndex) in user.education" :key="schoolIndex"
                            :fullName="inputCardDetails[1].cardInputInformation.inputOne.name"
                            :inputType="inputCardDetails[1].cardInputInformation.inputOne.type"
                            :inputId="inputCardDetails[1].cardInputInformation.inputOne.id" :Value="school?.institution"
                            :showpencil="true" :itemId="school.id" :handleEdit="handleEdit" itemIndex="2" />
                        <!-- :handleEdit="handleEdit" -->

                    </CardInformationComponent>
                    <CardInformationComponent :userValue="Value" :showPopup="showPopup" index="3"
                        :detailsTitle="inputCardDetails[2].cardTitle" :cardName="user.experiences" :showplus="true">
                        <InputComponent v-for="(workexp, index) in user.experiences" :key="index"
                            :fullName="inputCardDetails[2].cardInputInformation.inputOne.name"
                            :inputType="inputCardDetails[2].cardInputInformation.inputOne.type"
                            :inputId="inputCardDetails[2].cardInputInformation.inputOne.id" :Value="workexp?.role"
                            :showpencil="true" :itemId="workexp.id" :handleEdit="handleEdit" itemIndex="3" />

                    </CardInformationComponent>
                    <CardInformationComponent :userValue="Value" :showPopup="showPopup" index="4"
                        :detailsTitle="inputCardDetails[3].cardTitle" :cardName="user.Skills" :showplus="true">
                        <InputComponent v-for="(skill, index) in user.Skills" :key="index"
                            :fullName="inputCardDetails[3].cardInputInformation.inputOne.name"
                            :inputType="inputCardDetails[3].cardInputInformation.inputOne.type"
                            :inputId="inputCardDetails[3].cardInputInformation.inputOne.id" :Value="skill?.skill_name"
                            :showpencil="true" />
                    </CardInformationComponent>
                </div>
            </div>
        </section>


        <FooterComponent />
        <UpdateProfileComponentVue :userInfo="user" v-if="showModal == true" :index="index" type="user"
            :handlecloseCard="showPopup" :handleSave="handleSaveButton" />
    </div>

    <!-- <EditPopups v-if="showModal" /> -->
    <!-- <router-view></router-view> -->
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/users';
import { useUserProfileStore } from '../stores/userprofile';
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue'
import FooterComponent from '../components/FooterComponent.vue';
import UpdateProfileComponentVue from '../components/profilepage/UpdateProfileComponent.vue';
import CardInformationComponent from '../components/profilepage/CardInformationComponent.vue';
// import EditPopups from '../components/profilepage/EditPopups.vue';
import InputComponent from '../components/profilepage/inputComponent.vue';
const BASE_URL = import.meta.env.VITE_BASE_URL
import { userprofileData } from '../data';
import axios from 'axios';
export default {
    components: {
        FooterComponent,
        // EditPopups,
        JobSearchNav,
        CardInformationComponent,
        UpdateProfileComponentVue,
        InputComponent

    },

    data() {
        return {
            title: '',
            usersName: '',
            userOccupation: '',
            showModal: false,
            index: 0,
            Value: {
                fullname: "",
                email: "",
                contact: "",
                linkenin: "",
                github: "",
                dob: '',
                gender: '',
                photo: '',
                skills: [],
                workexp: [],
                education: [],
            },

            inputCardDetails: userprofileData
        }
    },
    computed: {
        ...mapState(useUserStore, ['user'])
    },
    beforeMount() {
        // console.log(this.user);
        if (this.user) {
            const userInfo = this.user
            this.Value.fullname = userInfo?.first_name + ' ' + userInfo?.last_name
            this.Value.contact = userInfo?.phone
            this.Value.email = userInfo?.email
            this.Value.gender = userInfo?.gender
            this.Value.dob = userInfo?.date_of_birth?.split('T')[0]
            this.Value.photo = "/images/" + userInfo?.photo
            this.Value.linkenin = userInfo?.js_social_link?.linkedIn_link
            this.Value.github = userInfo?.js_social_link?.gitHub_link
            this.usersName = userInfo?.first_name
            this.Value.skills = userInfo.Skills
            this.Value.education = userInfo?.education?.sort()
            this.Value.workexp = userInfo?.experiences
            this.title = this.Value.fullname

            this.getAllUserInfo()
        }
    },
    mounted() {


    },
    key() {
        return this.$route.params + Math.random()
    },

    methods: {
        ...mapActions(useUserStore, ['setUser']),
        ...mapActions(useUserProfileStore, ['setEduId', 'setWorkexpId']),
        showPopup(index) {
            this.showModal = !this.showModal
            this.index = index
        },

        handleEdit(itemId, itemIndex) {
            this.setEduId(itemId)
            this.setWorkexpId(itemId)
            this.showPopup(itemIndex)

        },
        getAllUserInfo() {
            const token = JSON.parse(localStorage.getItem('userToken'))
            if (token) {
                axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
                    .then((res) => {
                        console.log('Job Seeker All Info', res.data);
                        this.setUser(res.data.allInfo[0])
                    })
                    .catch((err) => console.log(err))
            }
        }
    }
}
</script>

<style lang="css" scoped>
.userprofile {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 70px;
    width: 100dvw;
    /* max-width: 1240px; */
}

.user-profile {
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    width: 100dvw;

}

.title {
    font-weight: 600;
    font-size: 40px;
}

.profile-section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 43px;
    margin-bottom: 50px;
}

.profile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 20%;
}

.profile-card {
    border: 2px solid #ededed;
    border-bottom: 5px solid #88CC00;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 42px 10px;
    height: 400px;
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
    border-radius: 50%;
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

.jobsapplied-1>* {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: #040404;
}

.profile-details {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 60px;
    flex-wrap: wrap;
    flex: 1;
}

.btnsec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 57px 0;
    gap: 56px;
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

@media screen and (max-width:480px) {
    .user-profile {
        justify-content: center;
        gap: 30px;
    }

    .title {
        padding-top: 10px;
        font-size: 22px;
    }

    #profile {
        width: 300px;
    }


    .profile-card {
        justify-content: space-between;
        font-size: 18px;
        width: 100%;
        /* height: 270px; */
        /* background: #000; */
    }

    .profile-card>img {
        width: 100px;
        height: 110px;
        margin-bottom: 0px;
    }

    .profile-card h3 {
        font-size: 18px;
    }

    .profile-card span {
        font-size: 15px;
    }

    .profile-details {
        /* background: aqua; */
        gap: 30px;

    }

    .profile-details .profile-detail:first-child {
        height: min-content;
    }

    .profile-details .profile-detail {
        height: min-content;
    }

    .btnsec {
        padding: 25px 0;
        gap: 10px;
    }

    .btn {
        border-radius: 8px;
        width: 100px;
        height: 40px;
        font-size: 20px;
        background-color: #040404;
        color: #ffffff;
    }

    .btns {
        border-radius: 8px;
        width: 100px;
        height: 40px;
        font-size: 20px;
        background-color: #D9D9D9;
        color: #000000;
    }
}

@media screen and (max-width:755px) {

    .title {
        text-align: center;
    }

    .profile-section {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .profile {
        max-width: 530px;
        min-width: 350px;
        width: 100%;
    }

    .profile-details {
        justify-content: center;
    }

}


@media screen and (min-width:1024px) and (max-width:1439px) {
    .user-profile {
        padding: 0px 20px;




    }

    .profile-card {
        height: 380px;
    }

    .profile-details {

        gap: 20px;




    }

}
</style>