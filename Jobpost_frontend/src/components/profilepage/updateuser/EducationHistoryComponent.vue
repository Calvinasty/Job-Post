<template>
    <form action="" style="width:100%;" class=" form-container flex-center">
        <span class="education-list">

            <UserUpdateFormCard v-for="(school, index) in education" :key="index" class="card-detail flex-center"
                :title="school.field_of_study">
                <div class="input-container">
                    <InputComponent id="" type="text" placeHolder="Add Institution" name="institution"
                        :handleInput="handleInput" :Value="school.institution" />
                </div>
                <div class="input-container">
                    <InputComponent id="" type="text" placeHolder="Add Education" name="certification"
                        :handleInput="handleInput" :Value="school.certification" />
                </div>
                <div class="input-container">
                    <InputComponent id="" type="text" placeHolder="Add Education" name="field_of_study"
                        :handleInput="handleInput" :Value="school.field_of_study" />
                </div>
                <div class="input-container">
                    <InputComponent id="" type="date" placeHolder="Add Education" name="start_date"
                        :handleInput="handleInput" :Value="school.start_date.split('T')[0]" />
                </div>
                <div class="input-container">
                    <InputComponent id="" type="date" placeHolder="Add Education" name="end_date" :handleInput="handleInput"
                        :Value="school.end_date" />
                </div>

            </UserUpdateFormCard>

        </span>

        <div class="btnsec flex-center-row">
            <button class="btn" type="submit" @click.prevent="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
    </form>
</template>

<script>
import InputComponent from '../../authpage/InputComponent.vue';
import UserUpdateFormCard from '../updateuser/UserUpdateFormCard.vue';
// import { useUserStore } from '../../../stores/users'

// import EditInputComponent from '../EditInputComponent.vue'
export default {
    components: {
        // EditInputComponent,
        InputComponent,
        UserUpdateFormCard
    },
    data() {
        return {
            education: []

        }
    },

    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo'
    ],
    beforeMount() {

        this.education = [...this.userInfo.education]
    },

    // mounted() {

    //     // this.education.certification = this.userInfo.certification
    //     // this.education.field_of_study = this.userInfo.field_of_study
    //     // this.education.start_date = this.userInfo.start_date
    //     // this.education.end_date = this.userInfo.end_date
    // },


    methods: {

    }
}
</script>

<style lang="css" scoped>
.form-container {}

.education-list {
    height: 650px;
    overflow-y: scroll;
}

.card-detail {
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    /* background: #000; */
    width: 520px;
    padding-top: 20px;


    /* padding-bottom: 70px; */
}

.input-container {
    width: 400px;
    /* background: #000; */
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