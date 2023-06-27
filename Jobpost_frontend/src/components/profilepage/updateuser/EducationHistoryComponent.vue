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
        <ToastMessage v-show="toast.active" :toast="toast" />
    </form>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../../../stores/users'
import { useUserProfileStore } from '../../../stores/userprofile';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
import InputComponent from '../../authpage/InputComponent.vue';
import ToastMessage from '../../utils/ToastMessage.vue';
// import UserUpdateFormCard from '../updateuser/UserUpdateFormCard.vue';

export default {
    components: {
        InputComponent,
        ToastMessage,
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
            },
            loading: false,
            toast: {
                active: false, msg: '', color: ''
            }
        }
    },

    props: [
        'handlecloseCard',
        'handleSave',
    ],

    computed: {
        ...mapState(useUserProfileStore, ['eduId']),
        ...mapState(useUserStore, ['user'])
    },
    beforeMount() {

    },

    mounted() {
        const education = this.user?.education.find(item => item.id == this.eduId)
        // console.log(education);
        this.education.institution = education?.institution
        this.education.certification = education?.certification
        this.education.field_of_study = education?.field_of_study
        this.education.start_date = education?.start_date.split('T')[0]
        this.education.end_date = education?.end_date.split('T')[0]

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
            console.log(this.education);
            axios.post(`${BASE_URL}/education/addEducation`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    if (res.data) {
                        // console.log('edudata', res.data)
                        const token = JSON.parse(localStorage.getItem('userToken'))
                        // console.log(token);
                        axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
                            .then((res) => {
                                if (res.data?.message) {
                                    // let msg = res.data.message
                                    this.showToast('Record Added Successful', 'success')
                                    this.loading = false
                                }
                                // console.log("Edu res data", res.data);
                                this.setUser(res.data.allInfo[0])
                            })
                            .catch((err) => {
                                let msg = err.response ? err.response.data.message : err.message
                                this.showToast(msg, 'error')

                                console.log(err.message)
                            })
                    }
                })
                .catch((err) => {
                    let msg
                    if (err.response) {
                        msg = err.response.data.message
                    }
                    if (err.message) {
                        msg = err.message
                    }
                    this.showToast(msg, 'error')

                    console.log(msg)
                })
                .finally(() => {
                    setTimeout(() => {
                        this.handlecloseCard()
                    }, 2000)

                })
        },
        handleInput(data) {
            if (data?.inputName == 'institution') { this.education.institution = data.inputValue }
            if (data?.inputName == 'certification') { this.education.certification = data?.inputValue }
            if (data?.inputName == 'field_of_study') { this.education.field_of_study = data?.inputValue }
            if (data?.inputName == 'start_date') { this.education.start_date = data?.inputValue }
            if (data?.inputName == 'end_date') { this.education.end_date = data?.inputValue }
        },

        showToast(msg, color) {
            this.toast = {
                active: true, msg, color
            }
            setTimeout(() => {
                this.toast = { active: false, msg: '', color: '' }
            }, 2000)
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
    /* height: 100%; */
    padding-top: 3%;
    /* background: #000; */
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