<template>
    <div>
        <h1>Hello world</h1>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    export default {
      components:{

      },
      data(){
        return{
            settings:{
                title:'Two-Factor Authentication', 
                option:'Keep your acccount secured with a 2FA via SMS or using OTP' 
            },
            
            languages:{
                type:'Language',
                option:'Select your language preference'
            }
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>