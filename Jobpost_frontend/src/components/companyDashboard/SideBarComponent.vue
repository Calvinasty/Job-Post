<template>
    <Transition name="slide-fade">
        <section class="side-bar flex-col-start" v-show="toggleNav">
            <aside class="logo flex-center">
                <img :src="user.image" alt="logo">
            </aside>


            <aside class="nav-items">
                <NavItemComponent :navItems="navItems" :goto="goto" />
            </aside>

            
            <aside class="nav-items">
                <SettingsComponent :settings="settings" :user="user" />
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
        props: ['toggleNav'],
        data() {
            return {
                show: true,
                navItems: [
                    { name: "Dasboard", icon: "dashboard", link: "analyticsView", active: true},
                    { name: "View/Edit Jobs", icon: "edit_note", link: "jobsView", active: false },
                    { name: "View All Aplicants", icon: "groups", link: "viewApplicant", active: false },
                    { name: "Company Profile", icon: "account_circle", link: "companyProfile", active: false },
                ],
                settings: [
                    { name: "Settings", icon: 'settings', link: "/settins" },
                    { name: "Help Center", icon: 'help', link: "/settings" }
                ],
                user: {
                    text: 'Logout',
                    email: 'user@email.com',
                    image: '/images/logo.png',
                    signoutIcon: 'logout'
                }
            };
        },

        methods: {
            goto(link, index) {
                this.navItems.map((item, navIndex) => (
                    navIndex == index ? item['active']=true : item['active']=false)
                )
                this.$router.push(link)
            }
        },
    }
</script>

<style lang="css" scoped>
.side-bar {
    height: 100vh;
    width: 20%;
    /* padding: 65px 0px; */
    /* border: 1px solid red; */
    background-color: #fff;
    box-shadow: 1px 0px 9px rgba(131, 131, 131, 0.633);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 100%;
    margin: 10px 20px 20px 20px;
    /* border: 1px solid rgba(217, 217, 217, 1); */
}

.side-bar .logo img {
    width: 130px;
}

.side-bar .side-title {
    font-size: 20px;
    font-weight: 900;
    color: #7FBF4C;
    margin: 20px 0 10px 0;
}

.side-bar .nav-items {
    width: 100%;
    margin-bottom: 20px;
}

.slide-fade-enter-active {
    transition: 0.3s ease-out !important;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1) !important;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translate(-20px) !important;
    opacity: 0;
}

</style>