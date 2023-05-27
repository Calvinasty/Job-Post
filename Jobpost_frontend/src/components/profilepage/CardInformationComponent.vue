<template>
    <div class="profile-detail">
        <img class="editicon" src="/images/edit_icon.svg" alt="editicon" @click="showPopup(detailsTitle)" />
        <h3>{{ detailsTitle }}</h3>
        <div class="profile-detail-container">
            <div class="input-field-container flex-center">
                <slot></slot>
            </div>
            <div class="other-details" v-if="showDetails">
                <InputComponent :fullName="inputInformation?.inputFive?.name" :inputType="inputInformation?.inputFive
                    .type" :inputId="inputInformation?.inputFive.id" :Value="Value.date" /> <br>


                <p class="elabel"> Gender </p>
                <InputComponent class="radio-gender" :fullName="inputInformation?.inputSix?.name" :inputType="inputInformation?.inputSix
                    .type" :inputId="inputInformation?.inputSix?.id" :inputName="inputInformation?.inputSix?.radio"
                    :Value="Value.gender" />
                <InputComponent class="radio-gender" :fullName="inputInformation?.inputSeven?.name" :inputType="inputInformation?.inputSeven
                    .type" :inputId="inputInformation?.inputSeven?.id"
                    :inputName="inputInformation?.inputSeven?.radio" />
            </div>
        </div>


    </div>
</template>

<script>
import InputComponent from './inputComponent.vue';
export default {
    name: 'JobPostCardInformationComponent',
    components: {
        InputComponent,
    },

    data() {
        return {
            Value: {
                gender: "Male",
            },

        };
    },

    props: [
        "showDetails",
        "detailsTitle",
        "inputInformation",
        "showPopup"
    ],
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.profile-detail {
    border: 2px solid #ededed;
    background-color: #ffffff;
    padding: 37px 34px;
    border-bottom: 5px solid #88cc00;
    flex: 1;
    max-width: 530px;
    min-width: 390px;
    height: 400px;
}

.profile-detail-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    /* height: 100%; */
    width: 100%;

}

.elabel {
    font-weight: 500;
    font-size: 16px;
    color: #898989;
}

.input-field-container {
    flex: 1;
    align-items: flex-start;
    gap: 10px;
}

.other-details {
    width: 30%;
    /* display: block; */
}

.other-details :nth-child() {
    margin-top: 10px;
}


h3 {
    margin-bottom: 19px;
}

.editicon {
    float: right;
    cursor: pointer;
}

.personal-info {
    display: flex;
    gap: 20px;
}

.personal-information {
    display: flex;
    flex-direction: column;
    gap: 2px;

}

.radio-gender {
    display: flex;
    flex-direction: row;
    width: 56%;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

@media screen and (max-width:480px) {
    .profile-detail-container {
        display: flex;
        flex-direction: column;
    }

    .profile-detail {
        border: 1px solid #ededed;
        background-color: #ffffff;
        padding: 37px 34px;
        border-bottom: 3px solid #88cc00;
        flex: 1;
        min-width: 300px;

    }



}
</style>