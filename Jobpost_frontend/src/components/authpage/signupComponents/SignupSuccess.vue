<template>
    <section class="complete">
        <img src="/images/logo.png" alt="logo">
        <h1>Registration Complete</h1>
        <div>
            <span class="material-symbols-outlined">mark_email_unread</span>
            <h2>Thank you</h2>
            <h3>We have sent a confirm email</h3>
            <h3>email@gmail.com</h3>
        </div>                
        <button type="button" @click="handleHome()">
            View dashboard <span class="material-symbols-outlined"> dashboard</span>
        </button>
    </section>
</template>

<script>
    export default {
        methods:{
            handleHome(){
                this.$router.push('/userprofile')
            }
        }
    }
</script>

<style lang="css" scoped>
    .complete{
        width: 40%;
        padding: 50px 70px;
        background-color: #f1f1f1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .complete img{
        width: 40%
    }
    .complete h1{
        font-size: 28px;
        font-weight: 500;
        margin-top:50px;
        color: #7FBF4C;
    }
    .complete div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
    .complete div .material-symbols-outlined{
        font-size: 50px;
        color: #7FBF4C;
    }
    .complete div h2{
        font-size: 25px;
        font-weight: 300;
        color: #7FBF4C;
    }
    .complete div h3{
        font-size: 16px;
    }
    .complete div h3:first-of-type{
        font-weight: 300;
    }
    .complete button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 14px 18px;
        margin-top: 50px;
        border-radius: 8px;
        border: none;
        background-color: #7FBF4C;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
    }
    
    @media screen and (max-width:480px) {
        .complete{
            width: 100%;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 50px 0px;
            background-color: #fff;
            /* border: 1px solid red; */
        }
        .complete img{
            /* margin-top: -150px; */
        }
        .complete h1{
            font-size: 23px;
        }
        .complete div h3{
            font-size: 14px;
        }
        .complete div h2{
            font-size: 20px;
        }
        .complete button{
            font-size: 10;
            padding: 10px 14px;
        }
    }


    /* increase form width on mini tablets */
    @media screen and (min-width:481px) and (max-width:768px) {
        .complete{
            width: 80%;
            display: none;
        }
        .complete h1{
            font-size: 25px;
        }
    }
    /* increase form width on tablets */
    @media screen and (min-width:769px) and (max-width:1024px) {
        .complete{
            width: 60%;
            border: 1px solid red;
            display: none;
        }
    }
</style>