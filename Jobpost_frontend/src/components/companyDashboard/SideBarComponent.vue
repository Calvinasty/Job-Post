<template>
    <section class="side-bar flex-col-start">
        <aside class="logo flex-center">
            <img src="/images/logo.png" alt="logo">
        </aside>
        <!-- <h2 class="side-title">Job Post</h2> -->
        <aside class="nav-items">
            <NavItemComponent :navItems="navItems"/>
        </aside>
        <aside class="nav-items">
            <!-- <h4 style="color: #7FBF4C;text-align: center;">SETTINGS</h4> -->
            <SettingsComponent :settings="settings" :user="user"/>
        </aside>
    </section>
</template>

<script>
    import NavItemComponent from './NavItemComponent.vue';
    import SettingsComponent from './SettingsComponent.vue';
    export default {
        components: {
            NavItemComponent,
            SettingsComponent
        },
        data() {
            return {
                navItems: [
                    { name: "Dasboard", link: "/analytics" },
                    { name: "View/Edit Jobs", link: "/jobs" },
                    { name: "View Other Jobs", link: "/alljobs" },
                    { name: "View All Aplicants", link: "/applicants" },
                    { name: "Company Profile", link: "/profile" },
                    { name: "View/Edit Employers", link: "/employers" },
                    { name: "View/Edit Job Seekers", link: "/jobseeker" },
                ],
                settings:[
                    { name: "Settings", link: "/analytics" },
                    { name: "Help Center", link: "/analytics" }
                ],
                user:{
                    name: 'Profile',
                    email: 'user@email.com'
                }
            };
        },
    }
</script>

<style lang="css" scoped>
    .side-bar{
        height: 100vh;
        width: 20%;
        padding: 15px 25px;
        background-color: #fff;
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
    }
    .logo{
        width: 100%;
        margin: 10px 20px 20px 20px;
        /* border: 1px solid red; */
    }
    .side-bar .logo img{
        width: 130px;
    }
    .side-bar .side-title{
        font-size: 20px;
        font-weight: 900;
        color: #7FBF4C;
        margin: 20px 0 10px 0;
    }
    .side-bar .nav-items{
        width:100%;
        /* border-bottom: 0.1px solid #666; */
        margin-bottom: 20px;
    }

</style>