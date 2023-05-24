<template>
    <div class="navbar"> 
        <div>
            <router-link to="/"> <img src="/images/logo.svg" alt="Logo"> </router-link>
        </div>
        <div class="auth-btns">
            <router-link to="/auth/login">Sign in</router-link>
            <router-link to="/auth/register">Sign up</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: #fff;
        /* border: 2px solid red; */
        padding: 0;
    }
    .navbar div:nth-child(1){
        /* width: 100px; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* border: 2px solid green; */
        /* position: relative; */
    }
    .navbar div img{
        /* position: absolute; */
        width: 80px;
        margin: 0;
        padding: 0;
        /* top:7%; */
    }
    /* .auth-btns{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: relative;
        left: 0;
    }
    .auth-btns button{
        padding: 21px 45px;
        background-color: #7FBF4C;
        color: #fff;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 14px;
    } */
    .auth-btns{
        display: flex;
        width: 100%;
        /* height: 50px; */
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 10px;
        /* border: 1px solid blue; */
    }
    .auth-btns a{
        /* color: #7FBF4C; */
        text-decoration: none;
        font-size: larger;
        font-weight: bold;
        margin-left: 20px;
        color: #fff;
        /* text-decoration: underline; */
    }
    .auth-btns a:nth-child(2){
        background-color: #88CC00;
        padding: 15px 25px;
        border-radius: 15px;
        text-decoration: none;
        color: #fff;
    }

    /* .auth-btns a:hover{
        color: #fff;
        background-color: #7FBF4C;
        padding: 15px 25px;
        border-radius: 20px;
        text-decoration: none;
        transition: 0.6s ease-in-out;
    } */

    /* Mobile Media Queries*/
    @media screen and (max-width: 480px){
        .navbar{
            display: inline-flex;
            width: 100vdw;
            /* border: 1px solid red; */
            position: relative;
            left: 0;
            padding: 0 10px;
        }
        .navbar div img{
            /* position: absolute; */
            width: 60px;
        }
        .auth-btns{
            display: flex;
            width: 100%;
            height: 20px;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            gap: 10px;
            /* border: 1px solid blue; */
        }
        .auth-btns a {
            font-size: 15px;
        }
        .auth-btns a:nth-child(2){
            padding: 10px 20px;
            border-radius: 10px;
        }
    }
    /* Mini Tablets */
    @media screen and (min-width: 481px) and (max-width: 600px) {
        .auth-btns{
            display: flex;
            width: 100%;
            height: 20px;
            padding-right: 20px;
            padding-top: 40px;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            gap: 10px;
            /* border: 1px solid blue; */
        }
    }

    /* Large Tablet Media Queries*/
    @media screen and (min-width: 660px) and (max-width: 768px) {
        /* .navbar div img{
            position: absolute;
            width: 150px;
            top:1%;
            left:8%
        } */
    }
    @media screen and (min-width: 2400px) {
        .auth-btns{
            font-size: 30px;
        }
        .navbar div img{
            width: 150px;
        }
    }

</style>