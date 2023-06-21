<template>
    <div class="profile-detail">
        <img class="editicon" v-show="showpencil" src="/images/edit_icon.svg" alt="editicon" @click="showPopup(index)" />
        <img class="editicon" v-show="showplus" src="/images/plusediticon.svg" alt="editicon" @click="showPopup(index)" />

        <h3>{{ detailsTitle }}</h3>
        <h4 v-show="cardName == ''"> No Records Added</h4>
        <!-- {{ cardName.length }} -->
        <div class="profile-detail-container">
            <div class="input-field-container flex-center">
                <slot></slot>
            </div>
            <div class="other-details" v-if="showDetails">
                <InputComponent :fullName="inputInformation?.inputFive?.name" :inputType="inputInformation?.inputFive
                    .type" :inputId="inputInformation?.inputFive.id" :Value="userValue.dob" /> <br>


                <p class="elabel"> Gender </p>
                <p>{{ userValue?.gender?.charAt(0).toUpperCase() + userValue?.gender?.slice(1) }}</p>

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


        };
    },

    props: [
        "showDetails",
        "detailsTitle",
        "inputInformation",
        "showPopup",
        "userValue",
        "index",
        "showplus",
        "showpencil",
        "cardName"
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
    max-width: 400px;
    min-width: 350px;
    height: 280px;
    overflow-y: scroll;
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

@media screen and (min-width:1024px) and (max-width:1439px) {
    .profile-detail {
        border: 2px solid #ededed;
        background-color: #ffffff;

        padding: 37px 34px;
        border-bottom: 5px solid #88cc00;
        flex: 1;
        max-width: 400px;
        min-width: 340px;
        height: 380px;
    }
}
</style>