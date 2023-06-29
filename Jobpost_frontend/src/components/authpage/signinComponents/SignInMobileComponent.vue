<template>
  <div class="signin-mobile">
    <header class="flex-center">
      <img src="/images/logo.png" alt="" />
      <h3>{{ nameHeader }}</h3>
    </header>

    <div v-if="showToggle" class="login-option flex-center-row">
      <div id="mobile-btn">Job Seeker</div>
      <button type="button" class="toggle-btn" @click="jobSeeker()">Job Seeker</button>
      <button type="button" class="toggle-btn" @click="jobPoster()">Job Poster</button>
    </div>

    <div class="signin-header">
      <h4>{{ nameTitle }}</h4>
    </div>

    <form @submit.prevent="handleSignIn" class="signin-field">
      <div>
        <InputComponent type="email" id="email" name="email" placeHolder="Email" :handleInput="handleUserInput" />
      </div>

      <div>
        <InputComponent type="password" id="password" name="password" placeHolder="Password"
          :handleInput="handleUserInput" />
      </div>

      <button type="submit" class="mbn-btn">
        Log in
        <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
        <span class="material-symbols-outlined" v-show="loading == false"> east </span>
      </button>

      <button class="forgot-btn">
        Forgotten Password? <span @click="toForgotten()">Click Here</span>
      </button>

      <button v-if="showText" class="signup-btn">
        {{ userInfo }} <span @click="toSignup()">Register Now</span>
      </button>
    </form>
  </div>
  <ToastMessage v-show="toast.active" :toast="toast" />
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import axios from 'axios'
import InputComponent from '@/components/authpage/InputComponent.vue'
import ToastMessage from '../../utils/ToastMessage.vue'
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const BASE_URL = import.meta.env.VITE_BASE_URL

export default {
  components: {
    InputComponent,
    ToastMessage
  },

  data() {
    return {
      inputData: {
        email: '',
        password: ''
      },
      userType: 'jobSeeker',
      loading: false,
      toast: {
        active: false,
        msg: '',
        color: ''
      }
    }
  },

  props: ['nameHeader', 'nameTitle', 'userInfo', 'showText', 'showToggle'],

  methods: {
    ...mapActions(useUserStore, ['setUser']),
    toSignup() {
      this.$router.push('/auth')
    },

    toForgotten() {
      this.$router.push('/auth/forgot-password')
    },

    jobPoster() {
      var z = document.getElementById('mobile-btn')
      z.style.left = '50%'
      z.innerHTML = 'Job Poster'

      this.userType = 'jobPoster'

      console.log(this.userType)
    },

    jobSeeker() {
      var z = document.getElementById('mobile-btn')
      z.style.left = '0'
      z.innerHTML = 'Job Seeker'

      this.userType = 'jobSeeker'

      console.log(this.userType)
    },

    handleUserInput(data) {
      if (data.inputName == 'email') {
        this.inputData.email = data.inputValue
      }

      if (data.inputName == 'password') {
        this.inputData.password = data.inputValue
      }
    },

    handleSignIn() {
      this.loading = true
      console.log('Hello', this.inputData.email.match(validRegex))
      console.log(this.inputData)

      const user = new FormData()
      user.append('email', this.inputData.email)
      user.append('password', this.inputData.password)

      if (this.userType == 'jobPoster') {
        axios
          .post(`${BASE_URL}/company/logInCompany`, user)
          .then((res) => {
            console.log(res?.data)
            if (res.data?.message) {
              let msg = res.data.message
              this.showToggle(msg, 'Login Success')
              this.loading = false
            }
            if (res.data?.token) {
              const token = JSON.stringify(res.data.token)
              localStorage.setItem('userToken', token)
            }
            if (res.data?.user) {
              const user = res.data.user
              this.setUser(user)
              this.$router.push('/admin/analyticsView')
            }

            // res.data
            // localStorage.setItem('companyState', res.data.user)
            // localStorage.setItem('userToken', res.data.token)
            //     this.$router.push('/admin/analyticsView')
          })
          .catch((err) => {
            let msg = err.response ? err.response.data.message : err.message
            this.showToast(msg, 'error')
            this.loading = false
            console.log(err)
          })
      }

      if (this.userType == 'jobSeeker') {
                // console.log('hello');
                axios
                .post(`${BASE_URL}/jobSeeker/signIn`, user)
                .then((res) => {
                    console.log(res.data);
                    if(res.data?.token) {
                        const token = JSON.stringify(res.data.token)
                        localStorage.setItem('userToken', token)
                    }

                    if (res.data?.message) {
                        let msg = res.data.message
                        this.showToast(msg, 'success')
                        this.loading = false
                        this.$router.push('/userprofile')
                    
                    }

                })
                .catch((err) => {
                    let msg 
                    if(err.response) 
                        msg = err.response.data.message 
                    else
                        msg = err.message
                    
                    this.showToast(msg, 'error')
                    this.loading = false
                    console.log(err)
                })
            }
    },
    showToast(msg, color) {
      this.toast = {
        active: true, msg, color
      }
      setTimeout(() => {
        this.toast = { active: false, msg: '', color: '' }
      }, 6000)
    }
  }
}
</script>

<style lang="css" scoped>
.signin-mobile {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
  height: 100dvh;
  width: 100dvw;
}

header {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #88cc00;
  row-gap: 10px;
}

header img {
  width: 60%;
  padding-bottom: 13px;
}

.login-option {
  width: 80%;
  border: 1px solid #88cc00;
  border-radius: 5px 0px 0px 5px;
  position: relative;
}

.toggle-btn {
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  font-weight: 700;
  font-size: 14px;
  color: #7fbf4c;
}

#mobile-btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 50%;
  height: 40px;
  background: #88cc00;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
}

.signin-header {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  width: 60%;
}

.signin-header h4 {
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #88cc00;
  text-transform: uppercase;
}

.signin-header p {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #7d7474;
}

.signin-field {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 80%;
}

/* .signin-field div {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        position: relative;
    } */
/* .signin-field div label {
        font-weight: 400;
        font-size: 18px;
        line-height: 16px;
    }

    .signin-field div input {
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #88CC00;
    }

    .signin-field div span {
        position: absolute;
        top: 40px;
        left: 260px;
        color: #88CC00;
    } */

.mbn-btn {
  padding: 13px;
  background: #7fbf4c;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
}

.forgot-btn,
.signup-btn {
  background: #fff;
  border: none;
  font-size: 14px;
  font-weight: 500;
}

.forgot-btn span,
.signup-btn span {
  color: #7fbf4c;
  cursor: pointer;
}

.loading {
  transform: rotate(300deg);
  animation: spin 1s infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* .signin-field p {
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
    } 
    .signin-field p a {
        color: #7FBF4C;
    } */
</style>
