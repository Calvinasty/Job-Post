<template>
    <form action="" class="card-detail">
        <h2>{{ title }}</h2>
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Job Title / Role" name="role" :handleInput="handleInput"
                :Value="experience.role" />
        </div>
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="Company Organization" name="company_name"
                :handleInput="handleInput" :Value="experience.company_name" />
        </div>
        <div class="input-container flex-center-row double">
            <InputComponent placeHolder="Start Date" name="start_date" type="date" :Value="experience.start_date"
                :handleInput="handleInput" />
            <InputComponent placeHolder="End Date" name="end_date" type="date" :Value="experience.end_date"
                :handleInput="handleInput" />
        </div>
        <div class="input-container">
            <textarea placeholder="Job Description" name="Job_Desc" id="" cols="70" rows="6"></textarea>
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" v-on="handleSave" type="submit" @click.prevent="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>

    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
import InputComponent from '../../authpage/InputComponent.vue';
// import EditInputComponent from '../EditInputComponent.vue'
export default {
    components: {
        // EditInputComponent,
        InputComponent,
    },
    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo',
    ],
    data() {
        return {
            title: 'Add / Edit Work Experience',
            experience: {
                role: '',
                company_name: '',
                start_date: '',
                end_date: '',
            }
        }
    },

    methods: {
        ...mapActions(useUserStore, ['setUser']),

        handleUpdate() {
            // console.log(this.education);
            const token = JSON.parse(localStorage.getItem('userToken'))
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('role', this.experience.role)
            updatedUserInfo.append('company_name', this.experience.company_name)
            updatedUserInfo.append('start_date', this.experience.start_date)
            updatedUserInfo.append('end_date', this.experience.end_date)
            // updatedUserInfo.append('end_date', this.education.end_date)
            axios.post(`${BASE_URL}/experience/addExperience`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    // if (res.data?.message) {
                    //     const msg = res.data.message
                    //     this.showToast(msg, 'success')
                    //     this.loading = false
                    // }
                    if (res.data) {
                        console.log('Expdata', res.data)
                        const token = JSON.parse(localStorage.getItem('userToken'))
                        axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
                            .then((res) => {
                                // if (res.data?.message) {
                                //     let msg = res.data.message
                                //     this.showToast(msg, 'Update Success')
                                //     this.loading = false
                                // }
                                console.log("Exp res data", res.data);
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
            if (data?.inputName == 'role') { this.experience.role = data.inputValue }
            if (data?.inputName == 'company_name') { this.experience.company_name = data?.inputValue }
            // if (data?.inputName == 'field_of_study') { this.education.field_of_study = data?.inputValue }
            if (data?.inputName == 'start_date') { this.experience.start_date = data?.inputValue }
            if (data?.inputName == 'end_date') { this.experience.end_date = data?.inputValue }
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

.double {
    gap: 20px;

}

textarea {
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    color: #000000;
    border: none;
    outline: none;
    border: 1px solid #7FBF4C;
    border-radius: 8px;
    width: 100%;
}

.double {
    gap: 20px;

}

.btnsec {
    /* position: absolute; */
    padding-bottom: 20px;
    gap: 20px;
    bottom: 0;
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