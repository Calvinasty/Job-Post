<template>
    <div class="main">
        <div >
            <h4>{{ settings.title }}</h4>
            <p @click="myAlert">{{ settings.option }}</p>
        </div>
        <div>
            <h4>{{ languages.type }}</h4>
            <p @click="myAlert">{{ languages.option }}</p>
        </div>
    </div>
</template>

<script>
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

        myAlert(){
            alert('bonjour')
        }
    }
}
</script>

<style lang="css" scoped>
.main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 30px;
    margin-top: 30px;
    font-family: Noto Sans;
    /* border: 3px solid red; */

}
p{
    color: rgba(120, 114, 114, 1);
    border-bottom: 1px solid rgba(120, 114, 114, 1);
    padding-bottom: 5px;
    cursor: pointer;
}
</style>