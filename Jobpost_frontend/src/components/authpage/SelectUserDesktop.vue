<template>
    <div class="desktopUser-selector">
        
        <section>
            <header>
                <img src="/images/logo.png" alt="">
                <h2>JOB POSTS</h2>
            </header>

            <div class="selector-header">
                <h3>Choose User Type</h3>
                <p>Lorem ipsum shshshsor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam est suscipit placeat laborum facere aliquid! Aspernatur sequi molestias commodi.</p>
            </div>

            <div class="user-select flex-center">
                <div class="jobseeker flex-center-row">
                    <div>
                        <img src="/images/jobseeker.png" alt="">
                    </div>
                    <p>
                        Sign up as a job Seeker
                    </p>
                    <button>Sign Up</button>
                </div>

                <div class="poster flex-center-row">
                    <div>
                    <img src="/images/jobpost-bag-desktop.svg" alt="">
                    </div>
                    <p>
                        Sign up as a job Poster
                    </p>
                    <button>Sign Up</button>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .desktopUser-selector {
        width: 100dvw;
        height: 100dvh;
        /* padding: 55px 105px; */
        background: linear-gradient(0deg, rgba(28, 48, 12, 0.55), rgba(28, 48, 12, 0.55)), url("/images/maxim-auth-background.jpeg");
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
        row-gap: 30px;
        background-color: #fff;
        border-radius: 20px;
        width: 40%;
        padding: 90px 40px;
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

    .jobseeker, .poster {
        column-gap: 30px;
        border: 1px solid #7FBF4C;
        border-radius: 10px;
        padding: 14px;
    }

    .jobseeker div img, .poster div img {
        width: 70%;
    }

    .jobseeker button, .poster button {
        padding: 14px 20px;
        background: #7FBF4C;
        border-radius: 10px;
        border: #7FBF4C;
        color: #fff;
        font-weight: bolder;
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