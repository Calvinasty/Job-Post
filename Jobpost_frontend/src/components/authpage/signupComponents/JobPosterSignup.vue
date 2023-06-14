<template>
    <AuthLayout class="auth-container">
        <div class="form-container" :class="{ centerForm: pageNum == 1 }">
            <JobPosterFormHeader :pageNum="pageNum" v-if="pageNum == 0" />
            <JobPosterForm :loading="loading" :pageNumber="pageNum" :handleSignUp="handleComapnySignUp" :handleVerify="handleVerify"
                :userInfo="userInfo" :handleUserInput="handleUserInput" />
        </div>
        <ToastMessage v-show="toast.active" :toast="toast" />
    </AuthLayout>
</template>

<script>
import axios from 'axios';
import AuthLayout from '../AuthLayout.vue';
import ToastMessage from '../../utils/ToastMessage.vue';
import JobPosterFormHeader from './JobPosterFormHeader.vue';
import JobPosterForm from './JobPosterForm.vue';
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
    components: {
        AuthLayout,
        JobPosterFormHeader,
        JobPosterForm,
        ToastMessage
    },
    name: 'JobPostJobPosterSignup',

    data() {
        return {
            activeClass: [false, false, false],
            pageNum: 0,
            userInfo: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                verification: ""
            },
            passLabel: '<h5 class="red-text">*upper/lower/special eg. <span class="green-text">Candle@123</span></h5>',
            toast: {
                active: false, msg: '', color: ''
            },
            loading: false
        }
    },
    mounted() {


    },

    methods: {
        handleComapnySignUp() {
            // this.handleUserInput()
            this.loading = true
            const newFormData = new FormData()
            // newFormData.append('user',user)    
            newFormData.append("company_name", this.userInfo.name)
            newFormData.append("email", this.userInfo.email)
            newFormData.append("password", this.userInfo.password)
            newFormData.append("confirm_password", this.userInfo.confirmPassword)
            newFormData.append("mobile_number", this.userInfo.phone)
            newFormData.append("verification_method", this.userInfo.verification)
            // console.log(newFormData);
            axios.post(`${BASE_URL}/company/registerCompany`, newFormData)
                .then(res => {
                    console.log(res?.data);
                    if (res.data?.message) {
                        let msg = res.data.message
                        this.showToast(msg, 'success')
                        this.loading=false
                    }
                    if (res.data?.token) {
                        const token = JSON.stringify(res.data.token)
                        localStorage.setItem('companyToken', token)
                    }
                    if (res.data?.company) {
                        const company = res.data.company
                        this.setCompany(company)
                    }
                    res.status == 201 ? ++this.pageNum : alert('invalid Input')
                })
                .catch(err => {
                    let msg = err.response ? err.response.data.message : err.message
            
                    if(typeof(msg) == 'object'){
                        msg=msg[0]
                    }
                    console.log(typeof(msg));
                    this.showToast(msg, 'error')
                    this.loading=false
                })
        },
        handleUserInput(data) {
            if(data?.inputValue==''|| undefined){
                this.showToast('all fields are mandatory','error')
            }
            if (data?.inputName == 'name') { this.userInfo.name = data?.inputValue }
            if (data?.inputName == 'email') { this.userInfo.email = data?.inputValue }
            if (data?.inputName == 'password') { this.userInfo.password = data?.inputValue }
            if (data?.inputName == 'confirmPassword') { this.userInfo.confirmPassword = data?.inputValue }
            if (data?.inputName == 'phone') { this.userInfo.phone = data?.inputValue }
            if (data?.inputName == 'verification') { this.handleVerify() }
        },
        handleVerify(data) {
            this.userInfo.verification = data?.verification
        },
        setCompany(company) {
            localStorage.setItem('companyState', JSON.stringify(company))
            ++this.pageNum
        },
        showToast(msg, color){
            this.toast = {
                active: true, msg, color
            }
            setTimeout(()=>{
                this.toast = {active: false, msg:'', color:''}
            }, 6000)
        }
    }
};


</script>

<style lang="css" scoped>
.auth-container {
    width: 100dvw;
    height: 100dvh;
    background-image: url("/images/maxim-auth-background.jpeg");
    background-color: #10150cf3;
    mix-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-container h1 {
    color: #7FBF4C;
    font-size: 20px;
}

.auth-container h3 {
    margin-bottom: 30px;
    font-size: 13px;
}

.form-container {
    background: rgba(255, 255, 255, 1);
    align-items: flex-start;
    height: 838px;
    width: 701px;
    border-radius: 20px;
    padding: 30px 50px;
    position: relative;
    transition: all .4s ease;

}

.form-container.centerForm {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: transparent;
}


@media screen and (max-width:786px) {
    .auth-container {
        padding: 20px 50px;
    }

    .form-container {
        padding: 15px 30px;
    }


}

@media screen and (max-width:600px) {
    .auth-container {
        padding: 0;
        background: #fff;
    }

}

@media screen and (max-width:480px) {
    .form-container {
        row-gap: 5px;
        padding: 50px 10px;

    }

}

@media screen and (min-width:1024px) {
    .form-container {
        justify-content: center;
        align-items: center;
        height: fit-content;
    }

}
</style>