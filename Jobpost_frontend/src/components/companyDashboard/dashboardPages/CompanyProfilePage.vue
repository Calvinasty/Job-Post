<template>
    <div>
        <div class="title flex-center-row">
            <!-- <h1>{{ title }}</h1> -->
        </div>
        <section class="company-profile-container" :key="componentKey">
            <div class="profile-section">
                <div class="profile">
                    <div class="profile-card">
                        <!-- <img class="f-editicon" src="images/edit_icon.svg" alt="editicon" /> -->
                        <img src="/images/companySample_logo.png" alt="pic">
                        <h3>{{ companyName }}</h3>
                        <!-- <span>{{ userOccupation }}</span> -->
                    </div>
                    <div class="jobsapplied">
                        <div class="jobsapplied-1">
                            <img src="/images/user_profile_icon.svg" alt="">
                            <p>Jobs posted</p>
                            <p> {{ numberOfPostedJobs }} </p>
                        </div>
                    </div>
                </div>
                <div class="profile-details">
                    <CardInformationComponent :showPopup="showPopup" index="1" :detailsTitle="cardDetails[0].cardTitle"
                        showpencil="showpencil">
                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputOne.name"
                            :inputId="cardDetails[0].cardInputInformation.inputOne.id"
                            :inputType="cardDetails[0].cardInputInformation.inputOne.type"
                            :Value="companyProfileInfo.company_name" />

                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputTwo.name"
                            :inputId="cardDetails[0].cardInputInformation.inputTwo.id"
                            :inputType="cardDetails[0].cardInputInformation.inputTwo.type"
                            :Value="companyProfileInfo.email" />

                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputThree.name"
                            :inputId="cardDetails[0].cardInputInformation.inputThree.id"
                            :inputType="cardDetails[0].cardInputInformation.inputThree.type"
                            :Value="companyProfileInfo.mobile_number" />

                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputFour.name"
                            :inputId="cardDetails[0].cardInputInformation.inputFour.id"
                            :inputType="cardDetails[0].cardInputInformation.inputFour.type"
                            :Value="companyProfileInfo.website" />
                        
                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputFive.name"
                        :inputId="cardDetails[0].cardInputInformation.inputFive.id"
                        :inputType="cardDetails[0].cardInputInformation.inputFive.type"
                        :Value="companyProfileInfo.linkIn" />

                        <InputComponent :fullName="cardDetails[0].cardInputInformation.inputSix.name"
                        :inputId="cardDetails[0].cardInputInformation.inputSix.id"
                        :inputType="cardDetails[0].cardInputInformation.inputSix.type"
                        :Value="companyProfileInfo.industry" />

                    </CardInformationComponent>

                    <CardInformationComponent :showPopup="showPopup" index="2" :detailsTitle="cardDetails[1].cardTitle"
                        showpencil="showpencil">
                        <InputComponent :fullName="cardDetails[1].cardInputInformation.inputOne.name"
                            :inputId="cardDetails[1].cardInputInformation.inputOne.id"
                            :inputType="cardDetails[1].cardInputInformation.inputOne.type"
                            :Value="companyProfileInfo.register_number" />
                        <InputComponent :fullName="cardDetails[1].cardInputInformation.inputTwo.name"
                            :inputId="cardDetails[1].cardInputInformation.inputTwo.id"
                            :inputType="cardDetails[1].cardInputInformation.inputTwo.type" 
                            :Value="companyProfileInfo.vat_number"/>
                        <InputComponent :fullName="cardDetails[1].cardInputInformation.inputThree.name"
                            :inputId="cardDetails[1].cardInputInformation.inputThree.id"
                            :inputType="cardDetails[1].cardInputInformation.inputThree.type" 
                            :Value="companyProfileInfo.cert_file"/>
                    </CardInformationComponent>

                    <CardInformationComponent :showPopup="showPopup" index="3" :detailsTitle="cardDetails[2].cardTitle"
                        showpencil="showpencil">
                        <InputComponent :fullName="cardDetails[2].cardInputInformation.inputOne.name"
                            :inputId="cardDetails[2].cardInputInformation.inputOne.id"
                            :inputType="cardDetails[2].cardInputInformation.inputOne.type" 
                            :Value="companyProfileInfo.country"/>
                        <InputComponent :fullName="cardDetails[2].cardInputInformation.inputTwo.name"
                            :inputId="cardDetails[2].cardInputInformation.inputTwo.id"
                            :inputType="cardDetails[2].cardInputInformation.inputTwo.type" 
                            :Value="companyProfileInfo.region"/>
                        <InputComponent :fullName="cardDetails[2].cardInputInformation.inputThree.name"
                            :inputId="cardDetails[2].cardInputInformation.inputThree.id"
                            :inputType="cardDetails[2].cardInputInformation.inputThree.type" 
                            :Value="companyProfileInfo.address"/>
                    </CardInformationComponent>
                </div>
            </div>

            <!-- <div class="btnsec flex-center-row">
                <button class="btn" @click="handleSave">Save</button>
                <button class="btns" @click="handlecloseCard">Cancel</button>
            </div> -->
        </section>
        <UpdateProfileComponent v-if="showModal == true" :companyInfo="company" @close="showPopup()" :index="index" :handlecloseCard="showPopup"
            type="company"  :updateComponent="updateComponent"/>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useCompanyStore } from '../../../stores/companies';
import CardInformationComponent from './company_profile/CardInformationComponent.vue';
import InputComponent from './company_profile/inputComponent.vue';
import UpdateProfileComponent from './company_profile/UpdateProfileComponent.vue';

export default {

    props: ['showpencil'],
    data() {
        return {
            componentKey: 0,
            companyName: '',
            numberOfPostedJobs: 0,
            index: 0,
            showModal: false,
            companyProfileInfo: {
                logo: '/images/companySample_logo.png',
                company_name: '',
                email: '',
                mobile_number: '',
                website: '',
                linkIn: '',
                industry: '',
                register_number: '',
                vat_number: '',
                cert_file: '',
                country: '',
                address: '',
                region: '',
            },
            cardDetails: [
                {
                    cardTitle: 'Company Profile',
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
                        },
                        inputFive: {
                            id: 'company-linkin',
                            name: 'Company LinkIn',
                            type: 'text',
                        },
                        inputSix: {
                            id: 'industry-type',
                            name: 'Industry',
                            type: 'text',
                        },
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
                            id: 'cert_file',
                            name: 'cert_file',
                            type: 'text',
                        }
                    },

                },

                {
                    cardTitle: 'Location',
                    cardInputInformation: {
                        inputOne: {
                            id: 'country',
                            name: 'Country',
                            type: 'text',
                        },
                        inputTwo: {
                            id: 'region',
                            name: 'Region',
                            type: 'text',
                        },
                        inputThree: {
                            id: 'address',
                            name: 'Address',
                            type: 'text',
                        }
                    },

                },



            ],


        }
    },

    components: {
        CardInformationComponent,
        InputComponent,
        UpdateProfileComponent,

    },

    computed: {
        ...mapState(useCompanyStore, ['company'])
    },
    mounted() {
        console.log("dashboard",this.company);
        const companyInfo = this.company
        this.companyName = companyInfo?.company_name
        this.companyProfileInfo.company_name = companyInfo?.company_name
        this.companyProfileInfo.email = companyInfo?.email
        this.companyProfileInfo.mobile_number = companyInfo?.mobile_number
        this.companyProfileInfo.website = companyInfo?.website
        this.companyProfileInfo.linkIn = companyInfo?.linkedin
        this.companyProfileInfo.industry = companyInfo?.industry

        this.companyProfileInfo.register_number = companyInfo?.company_registration?.registration_number
        this.companyProfileInfo.vat_number = companyInfo?.company_registration?.vat_number
        this.companyProfileInfo.cert_file = companyInfo?.company_registration?.company_certificate
        this.companyProfileInfo.logo = companyInfo?.logo

        this.companyProfileInfo.country = companyInfo?.location?.country
        this.companyProfileInfo.address = companyInfo?.location?.address
        this.companyProfileInfo.region = companyInfo?.location?.region

    },
    methods: {
        showPopup(index) {
            this.showModal = !this.showModal
            this.index = index
        },
        updateComponent(num){
            this.componentKey += num
            // this.$forceUpdate()
            alert('updated')
            this.$mount()
        }
    },


}
</script>

<style lang="css" scoped>
.company-profile-container {
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

}

.title {
    font-weight: 600;
    font-size: 30px;
}

.profile-section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;


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
    height: 280px;
}


.profile-card>img {
    width: 200px;
    /* height: 100px; */
}

.profile-card h3 {
    font-size: 25px;
    font-weight: 400;

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
    gap: 40px;
    flex-wrap: wrap;
    flex: 1;
}

.btnsec {
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

    .company-profile-container {
        padding: 30px 0px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .title h1 {
        /* text-align: center; */
        font-size: 22px;
        margin-top: 34px;
    }

    .profile-section {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100dvw;
    }

    .profile-card {
        width: 100%;
    }

    /* .f-editicon {

        cursor: pointer;
        width: 20px
    } */


    .profile-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        flex: 1;
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
</style>