<template>
    <div>
        <section class="company-profile-container">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>

            <div class="profile-section">
                <div class="profile">
                    <div class="profile-card">
                        <img src="images/userprofile.svg" alt="pic">
                        <h3>{{ companyName }}</h3>
                        <!-- <span>{{ userOccupation }}</span> -->
                    </div>
                    <div class="jobsapplied">
                        <div class="jobsapplied-1">
                            <img src="images/user_profile_icon.svg" alt="">
                            <p>Jobs posted</p>
                        </div>
                    </div>
                </div>
                <div class="profile-details">
                    <CardInformationComponent :detailsTitle="cardDetails[0].cardTitle">
                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputOne.name"
                            :inputId="cardDetails[0].cardInputInformation.inputOne.id"
                            :inputType="cardDetails[0].cardInputInformation.inputOne.type" />
                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputTwo.name"
                            :inputId="cardDetails[0].cardInputInformation.inputTwo.id"
                            :inputType="cardDetails[0].cardInputInformation.inputTwo.type" />
                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputThree.name"
                            :inputId="cardDetails[0].cardInputInformation.inputThree.id"
                            :inputType="cardDetails[0].cardInputInformation.inputThree.type" />
                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputFour.name"
                            :inputId="cardDetails[0].cardInputInformation.inputFour.id"
                            :inputType="cardDetails[0].cardInputInformation.inputFour.type" />
                    </CardInformationComponent>

                    <CardInformationComponent :detailsTitle="cardDetails[1].cardTitle">
                        <InputComponent :fullName="cardDetails[1].cardInputInformation.inputOne.name"
                            :inputId="cardDetails[1].cardInputInformation.inputOne.id"
                            :inputType="cardDetails[1].cardInputInformation.inputOne.type" />
                        <InputComponent :fullName="cardDetails[1].cardInputInformation.inputTwo.name"
                            :inputId="cardDetails[1].cardInputInformation.inputTwo.id"
                            :inputType="cardDetails[1].cardInputInformation.inputTwo.type" />
                        <InputComponent :fullName="cardDetails[1].cardInputInformation.inputThree.name"
                            :inputId="cardDetails[1].cardInputInformation.inputThree.id"
                            :inputType="cardDetails[1].cardInputInformation.inputThree.type" />
                    </CardInformationComponent>

                    <CardInformationComponent :detailsTitle="cardDetails[2].cardTitle">
                        <InputComponent :fullName="cardDetails[2].cardInputInformation.inputOne.name"
                            :inputId="cardDetails[2].cardInputInformation.inputOne.id"
                            :inputType="cardDetails[2].cardInputInformation.inputOne.type" />
                        <InputComponent :fullName="cardDetails[2].cardInputInformation.inputTwo.name"
                            :inputId="cardDetails[2].cardInputInformation.inputTwo.id"
                            :inputType="cardDetails[2].cardInputInformation.inputTwo.type" />
                        <InputComponent :fullName="cardDetails[2].cardInputInformation.inputThree.name"
                            :inputId="cardDetails[2].cardInputInformation.inputThree.id"
                            :inputType="cardDetails[2].cardInputInformation.inputThree.type" />
                    </CardInformationComponent>
                </div>
            </div>

            <div class="btnsec">
                <button class="btn">Save</button>
                <button class="btns">Cancel</button>
            </div>
        </section>
    </div>
</template>

<script>
import CardInformationComponent from '../components/profilepage/CardInformationComponent.vue';
import InputComponent from '../components/profilepage/inputComponent.vue';
export default {
    data() {
        return {
            title: 'Company Profile',
            companyName: 'Maxim Nyansa',

            cardDetails: [
                {
                    cardTitle: 'Company Information',
                    cardInputInformation: {
                        inputOne: {
                            id: 'company-name',
                            name: 'Company Name',
                            type: 'text',
                        },
                        inputTwo: {
                            id: 'email',
                            name: 'Email',
                            type: 'email',
                        },
                        inputThree: {
                            id: 'company-number',
                            name: 'Company Number',
                            type: 'tel',
                        },
                        inputFour: {
                            id: 'company-website',
                            name: 'Company Website',
                            type: 'text',
                        }
                    },

                },

                {
                    cardTitle: 'Registration Information',
                    cardInputInformation: {
                        inputOne: {
                            id: 'registration-number',
                            name: 'Registration Number',
                            type: 'text',
                        },
                        inputTwo: {
                            id: 'vat-number',
                            name: 'VAT Number',
                            type: 'tel',
                        },
                        inputThree: {
                            id: 'date',
                            name: 'Date',
                            type: 'date',
                        }
                    },

                },

                {
                    cardTitle: 'Job Description',
                    cardInputInformation: {
                        inputOne: {
                            id: 'description',
                            name: 'Description',
                            type: 'text',
                        },
                        inputTwo: {
                            id: 'industry',
                            name: 'Industry',
                            type: 'text',
                        },
                        inputThree: {
                            id: 'address',
                            name: 'Address',
                            type: 'text',
                        }
                    },

                },



            ]

        }
    },


    components: {
        CardInformationComponent,
        InputComponent,

    }

}
</script>

<style lang="css" scoped>
.company-profile-container {
    padding: 30px 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;

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
    /* background-color: aqua; */


}

.profile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.profile-card {
    border: 2px solid #ededed;
    border-bottom: 5px solid #88CC00;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 42px 10px;
    height: 404px;
    /* background: hsl(258, 76%, 50%); */
}

.profile-card>img {
    width: 165px;
    height: 160px;
    /* margin-bottom: 51px; */
}

.profile-card h3 {
    font-size: 30px;
    font-weight: 400;

}



/* .profile-card span {
    font-size: 20px;
    font-weight: 100;
} */


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
    gap: 40px;
    flex-wrap: wrap;
    flex: 1;
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