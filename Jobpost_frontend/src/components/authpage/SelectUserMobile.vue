<template>
    <div class="user-selector">
        <header>
            <img src="/images/logo.png" alt="">
            <h2>JOB POSTS</h2>
        </header>

        <div class="selector-header">
            <h3>Choose User Type</h3>
            <p>Lorem ipsum shshshsor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="user-select">
            <div class="jobseeker">
                <div>
                    <img src="/images/jobseeker.png" alt="">
                </div>
                <p>
                    Sign up as a job Seeker
                </p>
                <button>Sign Up</button>
            </div>

            <div class="poster">
                <div>
                   <img src="/images/jobpost.png" alt="">
                </div>
                <p>
                    Sign up as a job Poster
                </p>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .user-selector {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 30px;
        height: 100dvh;
        width: 100dvw;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        row-gap: 10px;
    }

    header img {
        width: 40%;
    }

    header h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: #88CC00;
    }

    .selector-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .selector-header h3 {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #88CC00;
    }

    .selector-header p {
        font-size: 10px;
        line-height: 14px;
        text-align: center;
        color: #7D7474;
    }

    .user-select {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 50px;
    }

    .jobseeker, .poster {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #7FBF4C;
        border-radius: 5px;
        row-gap: 10px;
        padding: 30px;
    }

    .jobseeker div img {
        width: 100%;
    }

    .poster div {
        background-color: #88CC00;
        padding: 15px;
        border-radius: 35px;
    }

    .jobseeker button, .poster button {
        padding: 10px 20px;
        background: #7FBF4C;
        border-radius: 5px;
        border: #7FBF4C;
        color: #fff;
        font-weight: bolder;
    }

</style>