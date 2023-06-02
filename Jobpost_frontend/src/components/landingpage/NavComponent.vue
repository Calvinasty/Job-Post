<template>
    <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
      
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
                if (currentScrollPosition < 0) {
                    return
                }
                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                    return
                }
                this.showNavbar = currentScrollPosition < this.lastScrollPosition
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
        /* border: 2px solid red; */
        padding: 0 20px;
        position: fixed;
        top: 0;
        z-index: 1000;
        box-shadow: 0px 3px 9px #c0bebe;
    }
    .navbar {
        /* height: 60px; */
        /* width: 100vw; */
        /* background: hsl(200, 50%, 50%); */
        /* position: fixed; */
        /* box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5); */
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;
    }
    .navbar.navbar--hidden {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
    }
    .navbar div:nth-child(1){
        /* width: 100px; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* border: 2px solid green; */
        /* position: relative; */
    }
    .navbar div img{
        /* position: absolute; */
        width: 60%;
        margin: 0;
        padding: 0;
        /* top:7%; */
    }
   
    .auth-btns{
        display: flex;
        width: 100%;
        /* height: 50px; */
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 10px;
        /* border: 1px solid blue; */
    }
    .auth-btns a{
        /* color: #7FBF4C; */
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        margin-left: 20px;
        padding: 10px 20px;
        border-radius: 15px;
        text-decoration: none;
        /* text-decoration: underline; */
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
            /* border: 1px solid red; */
            position: relative;
            left: 0;
            padding: 0 10px;
        }
        .navbar div img{
            /* position: absolute; */
            width: 60px;
        }
        .auth-btns{
            display: flex;
            width: 100%;
            height: 20px;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            gap: 10px;
            /* border: 1px solid blue; */
        }
        .auth-btns a {
            font-size: 15px;
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
            /* border: 1px solid blue; */
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