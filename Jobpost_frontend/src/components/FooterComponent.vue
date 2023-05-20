<template>
    <footer class="footer-container">

        <div class="footer-before">

            <div class="footer-sec1">

                <div class="logo">
                    <img src="/images/logo.png" alt="" width="100px">
                </div>

                <div class="footer-sec1-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque fugit mollitia perferendis.
                </div>

                <div class="footer-sec1-input">
                    <input type="text" placeholder="Your email">
                    <img src="/images/Forward Button.svg" alt="">
                </div>

            </div>

            <div class="footer-sec2">

                <div class="findjobs">
                    <h2>Find Jobs</h2>

                    <div class="footer-link">
                        <router-link to="">Health</router-link>
                        <router-link to="">Agriculture</router-link>
                        <router-link to="">Business</router-link>
                        <router-link to="">Tecnology</router-link>
                        <router-link to="">Oil and Gas</router-link>
                    </div>
                </div>

                <div class="putsmthere">
                    <h2>Useful Links</h2>
                    <div class="footer-link">
                        <router-link to="">Home</router-link>
                        <router-link to="">Contact us</router-link>
                        <router-link to="">What we do</router-link>
                        <router-link to="">Charity Partners</router-link>
                        <router-link to="">Faqs</router-link>
                    </div>
                </div>

            </div>

        </div>


        <div class="copyright">
            <p> &copy; Copyright {{ new Date().getFullYear() }} Job Post. All rights reserved.</p>
        </div>

    </footer>
</template>

<script>
export default {


}
</script>

<style lang="css" scoped>
@import '../assets/landing_assets/footerComponent.css';
</style>