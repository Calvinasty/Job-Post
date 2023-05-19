<template>
    <div class="navbar"> 
        <div>
            <router-link to="/"> <img src="/images/logo.png" alt="Logo"> </router-link>
        </div>
        <div class="auth-btns">
            <!-- <button>Sign In</button>
            <button>Sign Up</button> -->
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
    }
    .navbar div img{
        position: absolute;
        width: 150px;
        top:2%;
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
        height: 50px;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 10px;
        /* border: 1px solid blue; */
    }
    .auth-btns a{
        color: #7FBF4C;
        text-decoration: none;
        font-size: larger;
        font-weight: bold;
        margin-left: 20px;
        /* text-decoration: underline; */
    }
    .auth-btns a:hover{
        color: #fff;
        background-color: #7FBF4C;
        padding: 15px 25px;
        border-radius: 20px;
        text-decoration: none;
        transition: 0.6s ease-in-out;
    }

    /* Mobile Media Queries*/
    @media screen and (max-width: 480px){
        .navbar{
            display: inline-flex;
            width: 100vdw;
            /* border: 1px solid red; */
            position: relative;
            left: 0;
            padding: 30px;
        }
        .navbar div img{
            position:absolute;
            width: 120px;
            top:-20%;
            left: 0%;
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
        .auth-btns a{
            color: #7FBF4C;
            text-decoration: none;
            font-size: large;
            margin-left: 20px;
            /* text-decoration: underline; */
        }
        .auth-btns a:hover{
            color: #fff;
            background-color: #7FBF4C;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
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
        .navbar div img{
            position: absolute;
            width: 150px;
            top:1%;
            left:8%
        }
    }

</style>