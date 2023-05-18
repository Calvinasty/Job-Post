<template>
    <div class="navbar"> 
        <div>
            <img src="/images/logo.png" alt="Logo">
        </div>
        <div class="auth-btns">
            <button>Sign In</button>
            <button>Sign Up</button>
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
        /* background-color: black; */
        width: 100%;
        color: #fff;
        /* border: 2px solid #7FBF4C; */
    }
    .navbar div img{
        position: absolute;
        width: 150px;
        top:2%;
        /* border: 1px solid blue */
    }
    .auth-btns{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .auth-btns button{
        padding: 21px 45px;
        background-color: #7FBF4C;
        color: #fff;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 14px;
    }

</style>