<template>
    <footer>
        <div class="footer-link">
            <router-link to="">Featured Jobs</router-link>
            <p @click="handleApplyJob">Apply Job</p>
            <p @click="handlePostJob">Post a Job</p>
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
        },
        handlePostJob() {
            const companyToken = localStorage.getItem('companyToken');
            if (!companyToken) {
                this.$router.push('/auth/poster-register')
                return
            }
            this.$router.push('/admin/analytics')
        },
        handleApplyJob() {
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                this.$router.push('/auth/login')
                return
            }
            this.$router.push('/jobsearch')
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

p {
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