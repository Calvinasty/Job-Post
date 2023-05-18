<template>
    <div class="navbar"> 
        <div>
            <router-link to="/"> <img src="/images/logo.png" alt="Logo"> </router-link>
        </div>
        <div class="auth-btns">
            <!-- <button>Sign In</button>
            <button>Sign Up</button> -->
            <router-link to="">Sign in</router-link>
            <router-link to="">Sign up</router-link>
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
        color: #fff;
        text-decoration: none;
        font-size: larger;
        margin-left: 20px;
        text-decoration: underline;
    }
    .auth-btns a:hover{
        background-color: #7FBF4C;
        padding: 15px 25px;
        border-radius: 20px;
        text-decoration: none;
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
            position:fixed;
            width: 120px;
            top:2.5%;
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
            color: #fff;
            text-decoration: none;
            font-size: large;
            margin-left: 20px;
            text-decoration: underline;
        }
        .auth-btns a:hover{
            background-color: #7FBF4C;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
        }
    }

</style>