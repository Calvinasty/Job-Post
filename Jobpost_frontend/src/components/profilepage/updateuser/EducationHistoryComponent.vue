<template>
    <form action="" class="card-detail">
        <h2>{{ title }}</h2>
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
import axios from 'axios';
// import UserUpdateFormCard from '../updateuser/UserUpdateFormCard.vue';
const BASE_URL = import.meta.env.VITE_BASE_URL

export default {
    components: {
        InputComponent,
        // UserUpdateFormCard
    },
    data() {
        return {
            title: 'Add / Edit Education History',
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
    },
    methods: {
        ...mapActions(useUserStore, ['setUser']),

        handleUpdate() {
            // console.log(this.education);
            const token = JSON.parse(localStorage.getItem('userToken'))
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('institution', this.education.institution)
            updatedUserInfo.append('certification', this.education.certification)
            updatedUserInfo.append('field_of_study', this.education.field_of_study)
            updatedUserInfo.append('start_date', this.education.start_date)
            updatedUserInfo.append('end_date', this.education.end_date)
            axios.post(`${BASE_URL}/education/addEducation`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    // if (res.data?.message) {
                    //     const msg = res.data.message
                    //     this.showToast(msg, 'success')
                    //     this.loading = false
                    // }
                    if (res.data) {
                        console.log('edudata', res.data)
                        const token = JSON.parse(localStorage.getItem('userToken'))
                        axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
                            .then((res) => {
                                // if (res.data?.message) {
                                //     let msg = res.data.message
                                //     this.showToast(msg, 'Update Success')
                                //     this.loading = false
                                // }
                                console.log("Edu res data", res.data);
                                this.setUser(res.data.allInfo[0])
                            })
                            .catch((err) => console.log(err))
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => this.handlecloseCard())
        },
        handleInput(data) {
            if (data?.inputName == 'institution') { this.education.institution = data.inputValue }
            if (data?.inputName == 'certification') { this.education.certification = data?.inputValue }
            if (data?.inputName == 'field_of_study') { this.education.field_of_study = data?.inputValue }
            if (data?.inputName == 'start_date') { this.education.start_date = data?.inputValue }
            if (data?.inputName == 'end_date') { this.education.end_date = data?.inputValue }
        }
    }
}
</script>

<style lang="css" scoped>
.card-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding-top: 3%;
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
}

.btnsec {

    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
    margin-top: 30px;

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