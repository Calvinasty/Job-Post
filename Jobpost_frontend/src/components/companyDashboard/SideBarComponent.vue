<template>
    <Transition name="slide-fade" v-show="toggleNav">
        <section>
            <image @click="$router.push('/')">
                <img :src="user.image" alt="logo">
            </image>
            <aside class="nav-items">
                <NavItemComponent :navItems="navItems" :goto="goto" />
            </aside>
            <aside class="settings-nav">
                <SettingsComponent :settings="settings" :user="user" :gotoSettings="gotoSettings" />
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
                    // { name: "View All Aplicants", icon: "groups", link: "viewApplicant", active: false },
                    { name: "Company Profile", icon: "account_circle", link: "companyProfile", active: false },
                ],
                settings: { name: "Settings", icon: 'settings', link: "dashboardSettings", active: false },
                user: {
                    text: 'Logout',
                    email: 'user@email.com',
                    image: '/images/logo.png',
                    signoutIcon: 'logout'
                }
            };
        },
        beforeMount(){
            let route = this.$route.params.id
            Object.keys(this.navItems).forEach(key => {
                this.navItems[key].link == route ? this.navItems[key].active=true : this.navItems[key].active=false
                console.log('first');
            })
            if(route == this.settings.link){
                this.settings.active = true
                console.log('second');
            }else{
                this.settings.active = false
                console.log('third');
            }
        },
        methods: {
            goto(link, index) {
                this.navItems.map((item, navIndex) => (
                    navIndex == index ? item['active']=true : item['active']=false)
                )
                this.settings.active = false
                this.$router.push(link)
            },
            gotoSettings(link){
                this.settings.active = true
                this.navItems.map((item) => (
                    item['active']=false
                ))
                this.$router.push(link)
            }
        },
    }
</script>

<style lang="css" scoped>
    section{
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        background-color: #fff;
        box-shadow: 1px 0px 9px rgba(131, 131, 131, 0.633);
        /* border: 1px solid red; */
        position: relative;
    }
    image{
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        border-bottom: 1.5px solid #E0E0E0;
    }
    image img{
        width: 60%;
        position: relative;
        top: 0px;

    }
    aside{
        /* border-top: 0.2px solid #666; */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    aside.nav-items{
        /* border-top: 0.2px solid #666; */
        height: 45%;
        width: 100%;
        border-bottom: 1.5px solid #E0E0E0;
        position: relative;
    }
    aside.settings-nav{
        /* border-top: 0.2px solid #666; */
        height: 55%;
        /* border: 2px solid green; */
        position: relative;
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



/* .side-bar {
    height: 100%;
    width: 20%;
    padding: 5px 20px;
    background-color: #fff;
    box-shadow: 1px 0px 9px rgba(131, 131, 131, 0.633);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: static;
}
.logo {
    width: 80%;
    height: 10%;
    border: 1px solid rgba(217, 217, 217, 1);
    position: relative;
}
.side-bar .logo img {
    width: 100%;
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
} */

</style>