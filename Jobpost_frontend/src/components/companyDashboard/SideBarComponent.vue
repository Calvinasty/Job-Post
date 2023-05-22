<template>
    <Transition name="slide-fade">
        <section class="side-bar flex-col-start" v-show="toggleNav">
            <aside class="logo flex-center">
                <img :src="user.image" alt="logo">
            </aside>
            <aside class="nav-items">
                <NavItemComponent :navItems="navItems"/>
            </aside>
            <aside class="nav-items">
                <SettingsComponent :settings="settings" :user="user"/>
            </aside>
        </section>
    </Transition>
</template>

<script>
    import NavItemComponent from './NavItemComponent.vue';
    import SettingsComponent from './SettingsComponent.vue';
    export default {
        components: {
            NavItemComponent,
            SettingsComponent
        },
        props:['toggleNav'],
        data() {
            return {
                show: true,
                navItems: [
                    { name: "Dasboard", icon: "bar_chart_4_bars", link: "/analytics"},
                    { name: "View/Edit Jobs",icon: "edit", link: "/jobs" },
                    { name: "View Other Jobs", icon: "work", link: "/alljobs" },
                    { name: "View All Aplicants", icon: "group", link: "/applicants" },
                    { name: "Company Profile", icon: "apartment", link: "/profile" },
                    { name: "View/Edit Employers", icon: "supervisor_account", link: "/employers" },
                    { name: "View/Edit Job Seekers", icon: "work_alert", link: "/jobseeker" },
                ],
                settings:[
                    { name: "Settings", icon: 'settings', link: "/settins" },
                    { name: "Help Center", icon: 'support_agent', link: "/settings" }
                ],
                user:{
                    name: 'Profile',
                    email: 'user@email.com',
                    image: '/images/logo.png'
                }
            };
        }
    }
</script>

<style lang="css" scoped>
    .side-bar{
        height: 100vh;
        width: 20%;
        padding: 15px 20px;
        background-color: #fff;
        box-shadow: 1px 0px 9px rgba(131, 131, 131, 0.633);
    }
    .logo{
        width: 100%;
        margin: 10px 20px 20px 20px;
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
        margin-bottom: 20px;
    }
    .slide-fade-enter-active{
        transition: 0.3s ease-out !important;
    }
    .slide-fade-leave-active{
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1) !important;
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to{
        transform: translate(-20px) !important;
        opacity: 0;
    }

</style>