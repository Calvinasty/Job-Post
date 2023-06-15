<template>
    <footer>
        <span class="scroll-top" @click="$router.push('/')">
            <span class="material-symbols-outlined"> navigation </span>
        </span>
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
    width: 100%;
    background-color: #363636;
    height: 210px;
    position: relative;
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
.scroll-top{
    position: absolute;
    right: 5%;
    bottom: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    box-shadow: 5px 5px 9px #494949;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
}
.scroll-top span{
    color: #88cc00;
    font-size: 30px;
    font-weight: bold;
}


@media screen and (max-width:480px) {
    .footer-link {
        font-size: 14px;
        padding-top: 36px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .copyright {
        text-align: center;
        padding: 13px 0;
        font-size: 12px;
        color: #ffffff;
    }

}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .copyright {

        font-size: 16px;

    }
}
</style>