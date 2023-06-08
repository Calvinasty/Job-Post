<template>
    <footer>
        <div class="footer-link">
            <router-link to="">Featured Jobs</router-link>
            <router-link to="">Apply Job</router-link>
            <router-link to="">Post a Job</router-link>
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
/* @import '../assets/landing_assets/footerComponent.css'; */

footer {
    background-color: #363636;
    height: 210px;
}

.footer-link {
    padding-top: 45px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    gap: 50px;
}

a.router-link-exact-active {
    text-decoration: none;
    /* color: #FFFFFF7A; */
    color: #ffffff;
}

.copyright {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 45px 0;
    font-size: 22px;
    font-weight: 400;
    color: #ffffff;
}
</style>