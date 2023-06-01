<template>
    <div class="desktopUser-selector">
        
        <section>
            <header>
                <img src="/images/logo.png" alt="">
                <h2>JOB POSTS</h2>
            </header>

            <div class="selector-header">
                <h3>Choose User Type</h3>
            </div>

            <div class="user-select flex-center">
                    <div class="jobseeker flex-center-row" @click="jobSeekSignUp">
                        <div>
                            <img src="/images/jobseeker.png" alt="">
                        </div>
                        <p>
                            Sign up as a job Seeker
                        </p>
                        <button>Sign Up </button> 
                    </div>

                    <div class="poster flex-center-row" @click="jobPosterSignUp">
                        <div>
                        <img src="/images/jobpost-bag-desktop.svg" alt="">
                        </div>
                        <p>
                            Sign up as a job Poster
                        </p>
                        <button>Sign Up </button> 
                    </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        methods:{
        jobSeekSignUp(){
            this.$router.push("/auth/register")
        },

        jobPosterSignUp(){
            this.$router.push("/auth/poster-register")
        }
            
    }
    }
</script>

<style lang="css" scoped>
    .desktopUser-selector {
        width: 100dvw;
        height: 100dvh;
        /* padding: 55px 105px; */
        background-image: url("/images/maxim-auth-background.jpeg");
        background-color: #10150cf3;
        mix-blend-mode: overlay;        
        /* background-position: 90%; */
        background-repeat: no-repeat;
        background-size:cover;
        background-blend-mode: overlay;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 25px;
        background-color: #fff;
        border-radius: 20px;
        width: 40%;
        padding: 120px 40px;
    }

    header {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
        align-items: center;
        row-gap: 40px;
    }

    header img {
        width: 50%;
    }

    header h2 {
        font-weight: bolder;
        line-height: 41px;
        color: #7FBF4C;
    }

    .selector-header {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .selector-header h3 {
        font-weight: bolder;
        line-height: 38px;
        color: #7FBF4C;
    }

    .selector-header p {
        color: #7D7474;
        font-weight: 500;
        font-size: 12px;
        width: 80%;
    }

    .user-select {
        row-gap: 35px;
    }

    a {
        text-decoration: none;
    }

    .jobseeker, .poster {
        column-gap: 30px;
        border: 1px solid #7FBF4C;
        border-radius: 10px;
        padding: 14px;
        cursor: pointer;
    }

    .jobseeker div img, .poster div img {
        width: 70%;
    }

    .jobseeker p, .poster p {
        color: #7D7474;
        font-weight: 400;
        font-size: 15px;
    }

    .jobseeker button, .poster button {
        padding: 14px 20px;
        background: #7FBF4C;
        border-radius: 10px;
        border: #7FBF4C;
        color: #fff;
        font-weight: bolder;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) and (min-width: 480px) {
        section {
            width: 80%;
        }
    }

    @media screen and (max-width: 1100px) and (min-width: 770px) {
        section {
            width: 60%;
        }
    }

</style>