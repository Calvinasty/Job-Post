<template>
    <div class="navbar"> 
        <img src="" alt="Logo">
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