<template>
  <div class="forgot-desktop forgot-mobile">
    <div class="forgot">
      <header>
        <img src="/images/logo.png" alt="" />
        <h2>Forgot Password?</h2>
        <p>
          Enter the email address you used when you joined and we’ll send you instructions to reset
          your password.
        </p>
      </header>

      <form @submit.prevent="handleForgotPassword" class="forgot-desktop-field">
        <div class="container">
          <input
            type="radio"
            name="gender"
            value="seeker"
            id="seeker"
            checked="checked"
            @click="seeker"
          />
          <label for="seeker">Job Seeker</label>

          <input type="radio" name="gender" value="poster" id="poster" @click="poster" />
          <label for="poster">Job Poster</label>
        </div>

        <div class="user-field">
          <InputComponent
            type="email"
            name="email"
            required
            inputId="email"
            placeHolder="Email"
            :handleInput="handleUserInput"
          />
        </div>

        <div class="desk-links">
          <button type="submit" class="flex-center-row reset-btn">Send Reset Link</button>
          <button type="button" class="login-btn">Back to Login</button>
        </div>
      </form>
    </div>
  </div>
  <ToastMessage v-show="toast.active" :toast="toast" />
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import { useUserProfileStore } from '../../../stores/userprofile'
import ToastMessage from '../../utils/ToastMessage.vue'
import InputComponent from '../InputComponent.vue'
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
  components: {
    ToastMessage,
    InputComponent
  },

  data() {
    return {
      inputData: {
        email: ''
      },
      toast: {
        active: false,
        msg: '',
        color: ''
      },
      loading: false,
      userType: 'jobSeeker'
    }
  },
  methods: {
    ...mapActions(useUserProfileStore, ['setForgotPassword', 'setUserType']),
    handleUserInput(data) {
      // console.log(data);
      if (data.inputName == 'email') {
        this.inputData.email = data.inputValue
      }
    },

    seeker() {
      this.userType = 'jobSeeker'
      console.log(this.userType)
    },

    poster() {
      this.userType = 'jobPoster'
      console.log(this.userType)
    },

    handleForgotPassword() {
      console.log('Hello', this.inputData.email)

      const user = new FormData()
      user.append('email', this.inputData.email)

      if (this.userType == "jobSeeker") {
        axios
          .put(`${BASE_URL}/jobSeeker/email`, user)
          .then((res) => {
            console.log(res.data)
            this.setForgotPassword(this.inputData.email)
            this.setUserType(this.userType)
            if (res.data?.message) {
                let msg = res.data.message
              this.showToast(msg, 'success')
              this.loading = false
            }
            setTimeout(() => {
              this.toast = { active: false, msg: '', color: '' }
              this.$router.push('/auth/new-password')
            }, 2000)
          })
          // .then(() => {
          //     this.$router.push('/auth/new-password')
          // })
          .catch((err) => {
            let msg = err.response ? err.response.data.message : err.message

            if (typeof msg == 'object') {
              msg = msg[0]
            }
            this.showToast(msg, 'error')
            this.loading = false
            setTimeout(() => {
              this.toast = { active: false, msg: '', color: '' }
            }, 2000)
          })
      }

      if (this.userType == "jobPoster") {
        axios
          .put(`${BASE_URL}/company/email`, user)
          .then((res) => {
            console.log(res.data)
            this.setForgotPassword(this.inputData.email)
            this.setUserType(this.userType)
            if (res.data?.message) {
                let msg = res.data.message
              this.showToast(msg, 'success')
              this.loading = false
            }
            setTimeout(() => {
              this.toast = { active: false, msg: '', color: '' }
              this.$router.push('/auth/new-password')
            }, 2000)
          })
          // .then(() => {
          //     this.$router.push('/auth/new-password')
          // })
          .catch((err) => {
            let msg = err.response ? err.response.data.message : err.message

            if (typeof msg == 'object') {
              msg = msg[0]
            }
            this.showToast(msg, 'error')
            this.loading = false
            setTimeout(() => {
              this.toast = { active: false, msg: '', color: '' }
            }, 2000)
          })
      }
    },

    showToast(msg, color) {
      this.toast = {
        active: true,
        msg,
        color
      }
    }
  }
}
</script>

<style lang="css" scoped>
@media screen and (min-width: 681px) {
  .forgot-mobile {
    display: none;
  }
  .forgot-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/maxim-auth-background.jpeg');
    background-color: #10150cf3;
    mix-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    width: 100dvw;
    height: 100dvh;
  }

  .forgot {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border-radius: 20px;
    width: 550px;
    max-width: 622px;
    padding-bottom: 80px;
    padding-top: 30px;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 10px;
    margin-bottom: 50px;
  }

  header img {
    width: 35%;
    padding-bottom: 5px;
  }

  header h2 {
    font-weight: bolder;
    line-height: 41px;
    color: #4e4e4e;
  }

  header p {
    font-size: 14px;
    color: #787272;
    width: 70%;
  }

  .forgot-desktop-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 30px;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
  }

  input[type='radio'] {
    display: none;
  }

  .container label {
    position: relative;
    color: #7fbf4c;
    font-family: 20px;
    border: 2px solid #7fbf4c;
    border-radius: 5px;
    padding: 1px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    transition-timing-function: linear;
  }

  .container label:before {
    content: '';
    height: 20px;
    width: 20px;
    border: 3px solid #7fbf4c;
    border-radius: 300%;
    margin-right: 20px;
  }

  .container input[type='radio']:checked + label {
    background-color: #7fbf4c;
    color: #fff;
  }

  .container input[type='radio']:checked + label:before {
    height: 15px;
    width: 15px;
    border: 8px solid white;
    background-color: #7fbf4c;
  }

  .user-field {
    width: 80%;
  }

  .desk-links {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    row-gap: 40px;
  }

  .reset-btn {
    padding: 15px 20px;
    background: #7fbf4c;
    border-radius: 10px;
    border: #7fbf4c;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }

  .login-btn {
    padding: 15px 20px;
    background: #ffffff;
    border-radius: 10px;
    border: #000000 2px solid;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
  }
}

@media screen and (max-width: 681px) {
  .forgot-desktop {
    display: none;
  }

  .forgot-mobile {
    display: block;
  }
  .forgot {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    border-radius: 20px;
    padding-bottom: 80px;
    padding-top: 30px;
    height: 100dvh;
    width: 100dvw;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    margin-bottom: 50px;
  }

  header img {
    width: 35%;
    padding-bottom: 5px;
  }

  header h2 {
    font-weight: bolder;
    line-height: 41px;
    color: #7fbf4c;
  }

  .forgot-desktop-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 15px;
  }

  .user-field {
    width: 70%;
  }

  .desk-links {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }

  .error-prompt {
    background: rgba(169, 234, 156, 0.39);
    border-radius: 10px;
    width: 70%;
    padding: 10px;
    text-align: center;
  }

  .error-prompt p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #7d7474;
  }

  .reset-btn {
    padding: 15px 40px;
    background: #7fbf4c;
    border-radius: 10px;
    border: #7fbf4c;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
  }

  .login-btn {
    padding: 15px 40px;
    background: #fff;
    border-radius: 10px;
    border: #7fbf4c 1px solid;
    font-weight: 600;
    font-size: 20px;
    color: #7fbf4c;
  }
}

/* @media screen and (max-width:1200px) and (min-width:1024px) {
        .forgot{
            width: 50%;
        }

        .desk-links {
            width: 80%;
        }
    }

    @media screen and (max-width: 1024px) and (min-width: 681px) {
        .forgot {
            width: 80%;
        }

        .desk-links {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 5px;
        }
    }
     */
</style>
