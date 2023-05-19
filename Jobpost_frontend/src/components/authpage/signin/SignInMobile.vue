<template>
    <div class="signin-mobile">
        <header>
            <img src="/images/maxim-logo.jpeg" alt="">
            <h2>JOB POSTS</h2>
        </header>

        <div class="signin-header">
            <h3>Sign In</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt deserunt autem eligendi.</p>
        </div>

        <div class="signin-field">
            <div>
                <label for="">Username</label>
                <span class="material-symbols-outlined">
                check
                </span>
                <input type="text" placeholder="Username">
            </div>

            <div>
                <label for="">Password</label>
                <span class="material-symbols-outlined">
                check
                </span>
                <input type="password" placeholder="Password">
            </div>

            <button class="mbn-btn">Sign In</button>

            <p>Not Registered yet? <router-link to="">Register Now</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .signin-mobile {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 50px;
        height: 100dvh;
        width: 380px;
    }

    header {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        color: #88CC00;
    }

    header img {
        width: 60%;
        padding-bottom: 13px;
    }

    .signin-header {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        text-align: center;
        width: 70%;
    }

    .signin-header h3 {
        font-weight: 700;
        font-size: 25px;
        line-height: 22px;
        color: #88CC00;
    }
    .signin-header p {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #7D7474;
    }
    .signin-field {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        width: 80%;
    }

    .signin-field div {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        position: relative;
    }
    .signin-field div label {
        font-weight: 400;
        font-size: 18px;
        line-height: 16px;
    }

    .signin-field div input {
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #88CC00;
    }

    .signin-field div span {
        position: absolute;
        top: 40px;
        left: 260px;
        color: #88CC00;
    }

    .mbn-btn {
        padding: 13px;
        background: #7FBF4C;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .signin-field p {
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
    } 
    .signin-field p a {
        color: #7FBF4C;
    }

</style>