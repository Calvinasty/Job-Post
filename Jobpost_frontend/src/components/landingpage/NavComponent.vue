<template>
    <div id="navbar" class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
        <div>
            <router-link to="/"> <img src="/images/logo.png" alt="Logo"> </router-link>
        </div>
        <div class="auth-btns">
            <router-link to="/auth/login">Sign in</router-link>
            <router-link to="/auth">Sign up</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showNavbar: true,
                lastScrollPosition: 0
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll () {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                const navbar = document.getElementById('navbar')
                if (currentScrollPosition < 0) {
                    return
                }
                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                    return
                }
                this.showNavbar = currentScrollPosition < this.lastScrollPosition
                if(currentScrollPosition <= 10){
                    navbar.style.position = 'relative'
                }
                if(currentScrollPosition > 10 || scrollY > 10){
                    navbar.style.position = 'fixed'
                    navbar.style.transition = '0.3s'
                }
                if(!this.showNavbar){
                    navbar.style.position = 'relative'
                    navbar.style.transition = '0.3s'
                }
                this.lastScrollPosition = currentScrollPosition
            }
        },


    }
</script>

<style lang="css" scoped>
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #fff;
        padding: 0 20px;
        position: relative;
        top: 0;
        z-index: 1000;
        box-shadow: 0px 3px 9px #c0bebe;
    }
    .navbar {
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;
    }
    .navbar.navbar--hidden {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
    }
    .navbar div:nth-child(1){
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .navbar div img{
        width: 60%;
        margin: 0;
        padding: 0;
    }
   
    .auth-btns{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 10px;
    }
    .auth-btns a{
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        margin-left: 20px;
        padding: 10px 20px;
        border-radius: 15px;
        text-decoration: none;
    }
    .auth-btns a:nth-child(1){
        background-color: transparent;
        color: #000;
        border: 1px solid #666;
    }
    .auth-btns a:nth-child(2){
        background-color: #88CC00;
        color: #fff;
    }

  

    /* Mobile Media Queries*/
    @media screen and (max-width: 480px){
        .navbar{
            display: inline-flex;
            width: 100vdw;
            position: relative;
            left: 0;
            padding: 0 10px;
            height: 50px;
        }
        .navbar div img{
            width: 70%;
        }
        .auth-btns{
            display: flex;
            width:190%;
            padding: 0;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
        }
        .auth-btns a {
            font-size: 10px;
        }
        .auth-btns a:nth-child(2){
            padding: 10px 20px;
            border-radius: 10px;
        }
    }
    /* Mini Tablets */
    @media screen and (min-width: 481px) and (max-width: 600px) {
        .auth-btns{
            display: flex;
            width: 100%;
            height: 20px;
            padding-right: 20px;
            padding-top: 40px;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            gap: 10px;
        }
    }

    /* Large Tablet Media Queries*/
    @media screen and (min-width: 660px) and (max-width: 768px) {
      
    }
    @media screen and (min-width: 2400px) {
        .auth-btns{
            font-size: 30px;
        }
        .navbar div img{
            width: 150px;
        }
    }

</style>