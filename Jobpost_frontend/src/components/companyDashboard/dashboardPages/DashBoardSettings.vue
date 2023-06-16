<template>
    <div class="main">
        <h4>{{ settings.title }}</h4>
        <div class="auth">
            <p>{{ settings.option }}</p>
            <button>Start</button>
        </div>
        <h4>{{ languages.type }}</h4>
        <div class="lang">
            <p>{{ languages.option }}</p>
            <div class="btn">
            <button>English</button>
            <button>French</button>
        </div>
        </div>
        <h4 class="del-sec">Delete Account</h4>
        <div class="del">
            <p>Once you delete your account, there is no going back. Please be certain</p>
            <button class="del-btn" @click="handleDelete">Delete</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components: {

    },
    data() {
        return {
            settings: {
                title: 'Two-Factor Authentication',
                option: 'Keep your acccount secured with a 2FA via SMS or using OTP'
            },

            languages: {
                type: 'Language',
                option: 'Select your language preference'
            }
        }
    },
    methods: {
        handleDelete(){
            alert('Are you sure you want to delete your account ?')
            axios.delete()

        }
        // myAlert(){
        // }
    }
}
</script>

<style lang="css" scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Noto Sans;
    padding: 0 20px 0 20px;
    margin-top: 30px;
    /* padding: 70; */

}
.auth{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgba(120, 114, 114, 1);
    gap: 41%;
}
.lang{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgba(120, 114, 114, 1);
    gap: 49%;
}
.del{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35%;
    border-bottom: 1px solid rgba(120, 114, 114, 1);

}
p{
    color: rgba(120, 114, 114, 1);
    padding-bottom: 5px;
    /* cursor: pointer; */
}
h4{
    margin-top: 7px;
    padding-top: 10px;
}
button{
   
    padding: 15px;
    width: 100px;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 15px;
    border: 1px solid rgba(137, 137, 137, 1);
    border-radius: 7px;
    color: rgba(137, 137, 137, 1);
    cursor: pointer;
}
button:hover{
    background-color: rgba(244, 244, 244, 1);
    transition: 0.5s ease-in-out;
}
.btn{
    display: flex;
    gap: 20px;
}
.del-btn{
    color: rgba(228, 53, 53, 1);
}
.del-sec{
       color: rgba(228, 53, 53, 1);
}
</style>