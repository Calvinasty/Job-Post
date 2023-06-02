<template>
    <footer class="footer-container">

        <div class="footer-before">

            <div class="footer-sec1">

                <div class="logo">
                    <img @click="toTop" src="/images/logo.png" alt="">
                </div>

                <div class="footer-sec1-text"> Connecting dream jobs with dream <br> candidates - Your one-stop job search
                    solution
                </div>

                <div class="footer-sec1-input">
                    <input type="text" placeholder="Your email">
                    <img src="/images/Forwardbutton.svg" alt="">
                </div>

            </div>

            <div class="footer-sec2">

                <div class="findjobs">
                    <h2>Find Jobs</h2>

                    <div class="footer-link">
                        <router-link to="">Featured Jobs</router-link>
                        <router-link to="">Apply Job</router-link>
                        <router-link to="">Post a Job</router-link>
                    </div>
                </div>

                <!-- <div class="putsmthere">
                    <h2>Useful Links</h2>
                    <div class="footer-link">
                        <router-link to="">Home</router-link>
                        <router-link to="" target="_blank">Contact us</router-link>
                        <router-link to="" target="_blank">What we do</router-link>
                        <router-link to="" target="_blank">Charity Partners</router-link>
                        <router-link to="" target="_blank">Faqs</router-link>
                    </div>
                </div> -->

            </div>

        </div>


        <div class="copyright">
            <p> &copy; Copyright {{ new Date().getFullYear() }} Job Post. All rights reserved.</p>
        </div>

    </footer>
</template>

<script>
export default {

    methods: {
        toTop() {
            this.$router.push('/')
        }
    }


}
</script>

<style lang="css" scoped>
@import '../assets/landing_assets/footerComponent.css';
</style>