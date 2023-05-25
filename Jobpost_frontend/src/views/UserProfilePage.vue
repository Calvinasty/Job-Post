<template>
    <div>
        <div class="userprofile">


            <!-- <JobSearchNav /> -->

            <section class="user-profile">
                <div class="title">
                    <h1>{{ title }}</h1>
                </div>
                <div class="profile-section">
                    <div class="profile">
                        <div class="profile-card">
                            <img src="images/userprofile.svg" alt="pic">
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
                        <CardInformationComponent :detailsTitle="inputCardDetails[0].cardTitle"
                            :inputInformation="inputCardDetails[0].cardInputInformation" :showDetails="true">
                            <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputOne.name"
                                :inputType="inputCardDetails[0].cardInputInformation.inputOne.type"
                                :inputId="inputCardDetails[0].cardInputInformation.inputOne.id" />

                            <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputTwo?.name"
                                :inputType="inputCardDetails[0].cardInputInformation.inputTwo.type"
                                :inputId="inputCardDetails[0].cardInputInformation.inputTwo.id" />

                            <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputThree?.name"
                                :inputType="inputCardDetails[0].cardInputInformation.inputThree.type"
                                :inputId="inputCardDetails[0].cardInputInformation.inputThree.id" />

                            <InputComponent :fullName="inputCardDetails[0].cardInputInformation.inputFour?.name"
                                :inputType="inputCardDetails[0].cardInputInformation.inputFour.type"
                                :inputId="inputCardDetails[0].cardInputInformation.inputFour.id" />
                        </CardInformationComponent>

                        <CardInformationComponent :detailsTitle="inputCardDetails[1].cardTitle">
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
                        <CardInformationComponent :detailsTitle="inputCardDetails[2].cardTitle">
                            <InputComponent :fullName="inputCardDetails[2].cardInputInformation.inputOne.name"
                                :inputType="inputCardDetails[2].cardInputInformation.inputOne.type"
                                :inputId="inputCardDetails[2].cardInputInformation.inputOne.id" />
                            <InputComponent :fullName="inputCardDetails[2].cardInputInformation.inputTwo.name"
                                :inputId="inputCardDetails[2].cardInputInformation.inputTwo.id"
                                :inputType="inputCardDetails[2].cardInputInformation.inputTwo.type" />

                        </CardInformationComponent>
                        <CardInformationComponent :detailsTitle="inputCardDetails[3].cardTitle">
                            <div class="select-field">
                                <label for="skills">Skills</label>
                                <select name="skill" id="skills">
                                    <option value="">Select</option>
                                    <option value="">Vue Js</option>
                                    <option value="">Node Js</option>
                                    <option value="">Full Stack </option>
                                </select>
                            </div>
                        </CardInformationComponent>
                    </div>
                </div>
                <div class="btnsec">
                    <button class="btn">Save</button>
                    <button class="btns">Cancel</button>
                </div>
            </section>


        </div>
        <FooterComponent />

    </div>
</template>

<script>
// import JobSearchNav from '../components/jobsearchpage/JobSearchNav.vue'
import FooterComponent from '../components/FooterComponent.vue';
import CardInformationComponent from '../components/profilepage/CardInformationComponent.vue';
import InputComponent from '../components/profilepage/inputComponent.vue';
import { userprofileData } from '../data';
export default {
    components: {
        FooterComponent,
        // JobSearchNav,
        CardInformationComponent,
        InputComponent

    },

    data() {
        return {
            title: 'User Profile',
            usersName: 'Daniella McDan',
            userOccupation: 'Software Developer',

            inputCardDetails: userprofileData
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
    /* background-color: #fa1515; */

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
    .title {
        font-size: 22px;
    }

    .user-profile {
        gap: 30px;
    }

    .profile-card {
        /* justify-content: space-between; */
        font-size: 18px;
        width: 238px;
        height: 270px;
    }

    .profile-card h3 {
        font-size: 18px;
    }

    .profile-card span {
        font-size: 15px;
    }

    .profile-card>img {
        width: 153px;
        height: 149px;
        margin-bottom: 0px;
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

@media screen and (min-width:768px) and (max-width:1440px) {}
</style>