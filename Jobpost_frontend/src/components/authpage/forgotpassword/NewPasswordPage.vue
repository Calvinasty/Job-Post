<template>
  <div class="forgot-desktop forgot-mobile">
    <div class="forgot">
      <header>
        <img src="/images/logo.png" alt="" />
        <h2>Create New Password</h2>
        <p>Enter New password for your new login</p>
      </header>

      <form @submit.prevent="handleNewPassword" class="forgot-desktop-field">
        <div>
          <p><i>{{ forgotPasswordEmail }}</i></p>
        </div>

        <div class="password">
          <InputComponent
            type="password"
            name="password"
            placeHolder="New Password (8+ character required)"
            :handleInput="handleUserInput"
          />
        </div>

        <p v-show="showError" class="errorPassword"><i>*Password and Confirm Password does not match</i></p>

        <div class="reEnter-password">
          <InputComponent
            type="password"
            name="confirmPass"
            placeHolder="Re-Enter Password"
            :handleInput="handleUserInput"
          />
        </div>

        <div class="desk-links">
          <button type="submit" class="flex-center-row login-btn">
            Log in
            <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
            <span class="material-symbols-outlined" v-show="loading == false"> east </span>
          </button>
        </div>
      </form>
    </div>
  </div>
  <ToastMessage v-show="toast.active" :toast="toast" />
</template>

<script>
import axios from 'axios'
import { mapState } from 'pinia'
import { useUserProfileStore } from '../../../stores/userprofile'
import ToastMessage from '../../utils/ToastMessage.vue'
const BASE_URL = import.meta.env.VITE_BASE_URL
import InputComponent from '../InputComponent.vue'
export default {
  components: {
    InputComponent,
    ToastMessage
  },

  data() {
    return {
      inputData: {
        password: '',
        confirmPass: ''
      },

      loading: false,

      toast: {
        active: false,
        msg: '',
        color: ''
      },

      showError: false,
    }
  },

  computed: {
    ...mapState(useUserProfileStore, ['forgotPasswordEmail', 'userType', 'forgotPasswordId', 'forgotPassword'])
  },

  methods: {
    handleUserInput(data) {
      if (data.inputName == 'password') {
        this.inputData.password = data.inputValue
      }
      if (data.inputName == 'confirmPass') {
        this.inputData.confirmPass = data.inputValue
      }
    },

    handleNewPassword() {
      this.loading = true
      console.log(this.inputData.password)
      console.log(this.inputData.confirmPass)
      if (this.inputData.password == this.inputData.confirmPass) {
        const user = new FormData()
        user.append("newPassword", this.inputData.password)
        user.append("id", this.forgotPasswordId)
        user.append("password", this.forgotPassword)

        if (this.userType == 'jobSeeker') {
          axios
          .put(`${BASE_URL}/jobSeeker/password`, user)
          .then((res) => {
            console.log(res.data)
            if (res.data?.message) {
              let msg = res.data.message
              this.showToast(msg, 'success')
              this.loading = false
            }
            if (res.data?.token) {
              const token = JSON.stringify(res.data.token)
              localStorage.setItem('newPassword', token)
            }
          })
          .then(() => {
            this.$router.push('/auth/login')
          })
          .catch((err) => {
            let msg = err.response ? err.response.data.message : err.message
            this.showToast(msg, 'error')
            this.loading = false
            console.log(err)
          })
        }

        if (this.userType == 'jobPoster') {
          axios
          .put(`${BASE_URL}/company/password`, user)
          .then((res) => {
            console.log(res.data)
            if (res.data?.message) {
              let msg = res.data.message
              this.showToast(msg, 'success')
              this.loading = false
            }
            if (res.data?.token) {
              const token = JSON.stringify(res.data.token)
              localStorage.setItem('newPassword', token)
            }
          })
          .then(() => {
            this.$router.push('/auth/login')
          })
          .catch((err) => {
            let msg = err.response ? err.response.data.message : err.message
            this.showToast(msg, 'error')
            this.loading = false
            console.log(err)
          })
        }
        
      }
      if(this.inputData.password != this.inputData.confirmPass) {
        this.showError = true
        this.loading = false
      }

     

    },

    showToast(msg, color) {
      this.toast = {
        active: true,
        msg,
        color
      }
      setTimeout(() => {
        this.toast = { active: false, msg: '', color: '' }
      }, 6000)
    }
  }
}
</script>

<style lang="css" scoped>
@media screen and (min-width: 681px) {
  .forgot-mobile {
    /* Mobile display none for Desktop view */
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
    row-gap: 10px;
    margin-bottom: 50px;
  }

  header img {
    width: 35%;
    padding-bottom: 5px;
  }

  header h2 {
    font-size: 14px;
    font-weight: bolder;
    line-height: 50px;
    color: #7fbf4c;
  }

  header p {
    color: #787272;
    font-size: 18px;
  }

  .forgot-desktop-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 15px;
  }

  .password,
  .reEnter-password {
    width: 70%;
  }

  .desk-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 40px;
  }

  .login-btn {
    padding: 10px 40px;
    background-color: #7fbf4c;
    border-radius: 10px;
    border: #7fbf4c 1px solid;
    font-weight: 600;
    font-size: 20px;
    width: 70%;
    color: #fff;
  }

  .login-btn span {
    margin-left: 5px;
  }

  .loading {
    transform: rotate(300deg);
    animation: spin 1s infinite;
  }

  .errorPassword {
    color: red;
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
    line-height: 50px;
    color: #7fbf4c;
  }

  header p {
    color: #787272;
    font-size: 12px;
  }

  .forgot-desktop-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 15px;
  }

  .password,
  .reEnter-password {
    width: 60%;
  }

  .desk-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 40px;
  }

  .login-btn {
    padding: 10px 40px;
    background-color: #7fbf4c;
    border-radius: 10px;
    border: #7fbf4c 1px solid;
    font-weight: 600;
    font-size: 20px;
    width: 60%;
    color: #fff;
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
