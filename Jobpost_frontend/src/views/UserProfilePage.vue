<template>
    <div>
        <div class="userprofile">
            <JobSearchNav />
            <section class="user-profile">
                <div class="title">
                    <h1>{{ title }}</h1>
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
                                <p>Jobs Applied</p>
                            </div>
                            <div class="jobsapplied-1">
                                <img src="images/user_profile_icon.svg" alt="">
                                <p>Jobs Applied</p>
                            </div>
                        </div>
                    </div>
                    <div class="profile-details">
                        <CardInformationComponent :userValue="Value" :showPopup="showPopup"
                            :detailsTitle="inputCardDetails[0].cardTitle"
                            :inputInformation="inputCardDetails[0].cardInputInformation" :showDetails="true">


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

                        <CardInformationComponent :showPopup="showPopup" :detailsTitle="inputCardDetails[1].cardTitle">
                            <InputComponent :fullName="inputCardDetails[1].cardInputInformation.inputOne.name"
                                :inputType="inputCardDetails[1].cardInputInformation.inputOne.type"
                                :inputId="inputCardDetails[1].cardInputInformation.inputOne.id" />
                            <InputComponent :fullName="inputCardDetails[1].cardInputInformation.inputTwo.name"
                                :inputType="inputCardDetails[1].cardInputInformation.inputTwo.type"
                                :inputId="inputCardDetails[1].cardInputInformation.inputTwo.id" />
                            <InputComponent :fullName="inputCardDetails[1].cardInputInformation.inputThree.name"
                                :inputType="inputCardDetails[1].cardInputInformation.inputThree.type"
                                :inputId="inputCardDetails[1].cardInputInformation.inputThree.id" />

                        </CardInformationComponent>
                        <CardInformationComponent :showPopup="showPopup" :detailsTitle="inputCardDetails[2].cardTitle">
                            <InputComponent :fullName="inputCardDetails[2].cardInputInformation.inputOne.name"
                                :inputType="inputCardDetails[2].cardInputInformation.inputOne.type"
                                :inputId="inputCardDetails[2].cardInputInformation.inputOne.id" />
                            <InputComponent :fullName="inputCardDetails[2].cardInputInformation.inputTwo.name"
                                :inputId="inputCardDetails[2].cardInputInformation.inputTwo.id"
                                :inputType="inputCardDetails[2].cardInputInformation.inputTwo.type" />

                        </CardInformationComponent>
                        <CardInformationComponent :showPopup="showPopup" :detailsTitle="inputCardDetails[3].cardTitle">
                            <div class="select-field">
                                <label for="skills">Skills</label>
                                <select name="skill" id="skills">
                                    <option value="">Select</option>
                                    <option value="">Vue Js</option>
                                    <option value="">Node Js</option>
                                    <option value="">Full Stack </option>
                                </select>
                                <select name="skill" id="skills">
                                    <option value="">Select</option>
                                    <option value="">Vue Js</option>
                                    <option value="">Node Js</option>
                                    <option value="">Full Stack </option>
                                </select>
                                <select name="skill" id="skills">
                                    <option value="">Select</option>
                                    <option value="">Vue Js</option>
                                    <option value="">Node Js</option>
                                    <option value="">Angular </option>
                                </select>
                            </div>
                        </CardInformationComponent>
                    </div>
                </div>
                <!-- <div class="btnsec">
                    <button class="btn">Save</button>
                    <button class="btns">Cancel</button>
                </div> -->
            </section>


        </div>
        <FooterComponent />
        <UpdateProfileComponentVue :userInfo="Value" v-show="showModal == true" type="user" :handlecloseCard="showPopup"
            :handleSave="handleSaveButton" />

        <!-- <EditPopups v-if="showModal" /> -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '../stores/users';
import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue'
import FooterComponent from '../components/FooterComponent.vue';
import UpdateProfileComponentVue from '../components/profilepage/UpdateProfileComponent.vue';
import CardInformationComponent from '../components/profilepage/CardInformationComponent.vue';
// import EditPopups from '../components/profilepage/EditPopups.vue';
import InputComponent from '../components/profilepage/inputComponent.vue';
import { userprofileData } from '../data';
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
            title: 'User Profile',
            usersName: '',
            userOccupation: '',
            showModal: false,
            Value: {
                fullname: "",
                email: "",
                contact: "",
                linkenin: "",
                github: "",
                dob: '',
                gender: '',
                photo: ''
            },

            inputCardDetails: userprofileData
        }
    },
    computed: {
        ...mapState(useUserStore, ['user'])
    },
    mounted() {
        console.log(this.user);
        const userInfo = this.user
        this.Value.fullname = userInfo.first_name + ' ' + userInfo.last_name
        this.Value.contact = userInfo.phone_number
        this.Value.email = userInfo.email
        this.Value.gender = userInfo.gender
        this.Value.dob = userInfo.date_of_birth.split('T')[0]
        this.Value.photo = "/images/" + userInfo.photo

    },

    methods: {
        showPopup() {
            this.showModal = !this.showModal

        },

        handleSaveButton() {
            alert("profile saved");
        }


    }

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
    margin-bottom: 50px;
    /* background-color: aqua; */

}

.userprofile {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 70px;
    width: 100dvw;
    max-width: 1240px;
    /* background-color: #367192; */
}

.user-profile {
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    width: 100dvw;

}

.profile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* padding-top: 66px; */
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
    height: 404px;
    /* background: hsl(258, 76%, 50%); */
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

.jobsapplied-1>p {
    margin-left: 33px;
    font-size: 20px;
    font-weight: 600;
}


.profile-details {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 60px;
    flex-wrap: wrap;
    flex: 1;



}



.select-field {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}

.select-field label {
    font-weight: 500;
    font-size: 15px;
    color: #898989;

}

.select-field select {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    outline: none;
    padding: 8px 10px;
    border-radius: 10px;
    border-bottom: 1px solid #D9D9D9;

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

@media screen and (max-width:480px) {
    .user-profile {
        justify-content: center;
        gap: 30px;
        /* background: #af4040; */
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


    .select-field {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        gap: 20px;
    }

    .select-field label {
        font-weight: 500;
        font-size: 18px;
        color: #898989;

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
</style>