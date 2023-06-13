<template>
    <form action="" class="card-detail">
        <!-- style="width:100%;" -->
        <!-- <span class="education-list"> -->
        <!-- <UserUpdateFormCard v-for="(school, index) in education" :key="index" class="card-detail flex-center"
                :title="school.field_of_study"> -->
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Add Institution" name="institution" :handleInput="handleInput"
                :Value="education.institution" />
        </div>
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Certification" name="certification" :handleInput="handleInput"
                :Value="education.certification" />
        </div>
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Field of Study" name="field_of_study" :handleInput="handleInput"
                :Value="education.field_of_study" />
        </div>
        <div class="input-container">
            <InputComponent id="" type="date" placeHolder="Date" name="start_date" :handleInput="handleInput"
                :Value="education.start_date" />
        </div>
        <div class="input-container">
            <InputComponent id="" type="date" placeHolder="Date" name="end_date" :handleInput="handleInput"
                :Value="education.end_date" />
        </div>
        <!-- </UserUpdateFormCard> -->
        <!-- </span> -->
        <div class="btnsec flex-center-row">
            <button class="btn" type="submit" @click.prevent="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import InputComponent from '../../authpage/InputComponent.vue';
// import UserUpdateFormCard from '../updateuser/UserUpdateFormCard.vue';
// const BASE_URL = import.meta.env.VITE_BASE_URL
// import { useUserStore } from '../../../stores/users'

// import EditInputComponent from '../EditInputComponent.vue'
export default {
    components: {
        // EditInputComponent,
        InputComponent,
        // UserUpdateFormCard
    },
    data() {
        return {
            education: {
                institution: '',
                certification: '',
                field_of_study: '',
                start_date: '',
                end_date: ''
            }
        }
    },

    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo'
    ],
    beforeMount() {


    },

    mounted() {
        // this.education.institution = this.userInfo.education[0].institution
        // this.education.certification = this.userInfo.education[0].certification
        // this.education.field_of_study = this.userInfo.education[0].field_of_study
        // this.education.start_date = this.userInfo.education[0].start_date.split('T')[0]
        // this.education.end_date = this.userInfo.education[0].end_date.split('T')[0]
    },


    methods: {
        ...mapActions(useUserStore, ['setUser'])


    }
}
</script>

<style lang="css" scoped>
.form-container {}

/* .education-list {
    height: 650px;
    overflow-y: scroll;
} */

.card-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding-top: 3%;


    /* padding-bottom: 70px; */
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
}

.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    margin-top: 30px;
    /* background-color: aqua; */
}

.btnsec>* {
    border: none;
    cursor: pointer;
}

.btn {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #88CC00;
    color: #ffffff;
}

.btns {
    border-radius: 8px;
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #000000;
    color: #ffffff;
}
</style>