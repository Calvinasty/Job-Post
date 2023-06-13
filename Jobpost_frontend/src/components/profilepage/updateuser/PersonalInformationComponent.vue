<template>
    <form @submit.prevent="handleUpdate" class="card-detail">
        <div class="input-container">
            <InputComponent id="" type="text" placeHolder="First Name" name="first_name" :handleInput="handleInput"
                :Value="personalInfo.first_name" />
        </div>
        <div class="input-container flex-center-row double">
            <InputComponent placeHolder="Middle Name" name="middle_name" type="text" :Value="personalInfo.middle_name"
                :handleInput="handleInput" />
            <InputComponent placeHolder="Last Name" name="last_name" type="text" :Value="personalInfo.last_name"
                :handleInput="handleInput" />
        </div>
        <div class="input-container">
            <InputComponent placeHolder="Email" name="email" type="email" :Value="personalInfo.email"
                :handleInput="handleInput" />
        </div>
        <div class="input-container">
            <InputComponent placeHolder="Contact" name="contact" type="tel" :Value="personalInfo.phone"
                :handleInput="handleInput" />
        </div>
        <div class="input-container">
            <InputComponent placeHolder="Date of Birth" name="dob" type="date"
                :Value="personalInfo.date_of_birth?.split('T')[0]" :handleInput="handleInput" />
        </div>
        <!-- <div class="input-container">
            <InputComponent type="file" accept=".pdf,.docx" name="resume_cv" placeHolder="Resume CV"
                :handleInput="handleInput" />
        </div> -->
        <div class="input-container flex-center-row gender">
            <p>Gender :</p>
            <span>
                <input type="radio" name="gender" value="male" v-model="personalInfo.gender" id="male">
                <label for="male">Male</label>
            </span>
            <span>
                <input type="radio" name="gender" value="female" v-model="personalInfo.gender">
                <label for="female">Female</label>
            </span>
        </div>
        <div class="btnsec flex-center-row">
            <button class="btn" v-on="handleSave" type="submit" @click.prevent="handleUpdate">Save</button>
            <button class="btns" @click.prevent="handlecloseCard">Cancel</button>
        </div>
        <!-- <buttonComponent :handlecloseCard="handlecloseCard" /> -->
        <ToastMessage v-show="toast.active" :toast="toast" />
    </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import axios from 'axios'
import ToastMessage from '../../utils/ToastMessage.vue'
import InputComponent from '../../authpage/InputComponent.vue'
// import EditInputComponent from '../EditInputComponent.vue'
// import buttonComponent from './buttonComponent.vue'
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
    components: {
        // EditInputComponent,
        InputComponent,
        ToastMessage
        // buttonComponent,
    },

    props: [
        'handlecloseCard',
        'handleSave',
        'userInfo',
    ],

    data() {
        return {
            personalInfo: {
                first_name: '',
                middle_name: '',
                last_name: '',
                email: '',
                phone: '',
                // linkedIn_url: '',
                // git_url: '',
                date_of_birth: '',
                // resume_cv: '',
                gender: '',

            },
            loading: false,
            toast: {
                active: false, msg: '', color: ''
            }
        }
    },

    mounted() {
        this.personalInfo.first_name = this.userInfo.first_name
        this.personalInfo.middle_name = this.userInfo.middle_name
        this.personalInfo.last_name = this.userInfo.last_name
        this.personalInfo.email = this.userInfo.email
        this.personalInfo.phone = this.userInfo.phone
        // linke this.personalInfo.linkedIn_url,
        //  this.personalInfo.git_url,
        this.personalInfo.date_of_birth = this.userInfo.date_of_birth
        // this.personalInfo.resume_cv = this.userInfo.resume_cv
        this.personalInfo.gender = this.userInfo.gender
        // console.log(this.personalInfo);
    },
    methods: {
        ...mapActions(useUserStore, ['setUser']),
        handleUpdate() {
            console.log(this.personalInfo);
            const token = JSON.parse(localStorage.getItem('userToken'))
            const updatedUserInfo = new FormData()
            updatedUserInfo.append('first_name', this.personalInfo.first_name)
            updatedUserInfo.append('middle_name', this.personalInfo.middle_name)
            updatedUserInfo.append('last_name', this.personalInfo.last_name)
            updatedUserInfo.append('email', this.personalInfo.email)
            updatedUserInfo.append('phone', this.personalInfo.phone)
            updatedUserInfo.append('date_of_birth', this.personalInfo.date_of_birth)
            updatedUserInfo.append('gender', this.personalInfo.gender)

            axios
                .put(`${BASE_URL}/jobSeeker/updateJobSeeker`, updatedUserInfo, { headers: { token } })
                .then((res) => {
                    if (res.data) {
                        const token = JSON.parse(localStorage.getItem('userToken'))
                        axios.get(`${BASE_URL}/jobSeeker/getAllInfo`, { headers: { token } })
                            .then((res) => {
                                // localStorage.setItem("userDetails", JSON.stringify(res.data[0]))
                                // user['photo'] = 'avatar.jpg'
                                if (res.data?.message) {
                                    let msg = res.data.message
                                    this.showToast(msg, 'Update Success')
                                    this.loading = false
                                }
                                this.setUser(res.data[0])

                            })
                            .catch((err) => console.log(err))
                    }
                })
                .then(() => this.handlecloseCard())
                .catch((err) => {
                    console.log(err)
                })
            // this.handleInput()
        },


        handleInput(data) {
            // console.log(this.personalInfo.gender);
            if (data?.inputName == 'first_name') {
                this.personalInfo.first_name = data.inputValue
            }
            if (data?.inputName == 'middle_name') {
                this.personalInfo.middle_name = data?.inputValue
            }
            if (data?.inputName == 'last_name') {
                this.personalInfo.last_name = data?.inputValue
            }
            if (data?.inputName == 'email') {
                this.personalInfo.email = data?.inputValue
            }
            if (data?.inputName == 'contact') {
                this.personalInfo.phone = data?.inputValue
            }
            if (data?.inputName == 'linkedIn_url') {
                this.personalInfo.linkedIn_url = data?.inputValue
            }
            if (data?.inputName == 'git_url') {
                this.personalInfo.git_url = data?.inputValue
            }
            if (data?.inputName == 'dob') {
                this.personalInfo.dob = data?.inputValue
            }
            // if (data?.inputName == 'resume_cv') {
            //     this.personalInfo.resume_cv = data?.inputValue
            // }
            // if (data?.inputName == 'gender') {
            //     this.personalInfo.gender = data?.inputValue
            // }

        }
    },
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
    /* border: 2px solid aqua; */
    /* padding-bottom: 70px; */
}

.input-container {
    width: 100%;
    padding-left: 200px;
    padding-right: 200px
}

.double {
    gap: 20px;

}

.input-container.gender {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;

    /* background: aqua; */
}

.gender p {
    padding-left: 30px;
}

.gender span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.gender span label {
    margin-left: 8px;

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

/* .double:nth-child(1) {
    max-width: 50%;
    background: #000;
}

.double:nth-child(2) {
    max-width: 50%;
    background: #000
} */
</style>