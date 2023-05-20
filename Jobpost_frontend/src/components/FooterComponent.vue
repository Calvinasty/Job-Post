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
.footer-container {
    background-color: #363636;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.footer-before {
    padding-top: 106px;
    /* padding-right: 290px; */
    padding: 106px 190px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    gap: 100px;

}

.logo {
    position: relative;
    /* background-color: antiquewhite; */
    height: 50px;

}

.logo>img {
    position: absolute;
    /* background-color: aqua; */
    top: -24px;
    left: -25px;
}

.footer-sec1 {
    /* background-color: #000000; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 50px;
}

.footer-sec1-text {
    font-weight: 200;
    font-size: 25px;
    text-align: left;
    color: #FFFFFF;
    /* background-color: aquamarine; */
    width: 100%;
}

.footer-sec1-input {
    position: relative;
    /* align-items: center; */

}

.footer-sec1-input input {
    padding-left: 15px;
    border-radius: 15px;
    height: 82px;
    width: 358px;

}

.footer-sec1-input img {
    position: absolute;
    display: inline-block;
    width: 64px;
    height: 61px;
    left: 283px;
    top: 11px;
    cursor: pointer;
}

.footer-sec2 {
    /* background-color: antiquewhite; */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;
    width: 430px;
}

.footer-sec2 h2 {
    color: #FFFFFF;
    font-weight: 500;
    font-size: 25px;
}

.footer-link {
    padding-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 33px;
}

a.router-link-exact-active {
    text-decoration: none;
    /* color: #FFFFFF7A; */
    color: #FFFFFF;

}

.copyright {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
}

@media screen and (max-width:480px) {
    .footer-container {
        background-color: #363636;
        width: 100%;
        display: flex;
        font-weight: 200;
        font-size: 16px;
        justify-content: space-around;
        flex-direction: column;
    }

    .footer-before {
        padding-top: 47px;
        /* padding-right: 290px; */
        padding: 37px 39px;
        /* width: 296px; */
        width: 100vdw;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 33px;

    }

    .footer-sec1 {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        /* width: 296px; */
        width: 100%;
        gap: 28px;
        /* border: 1px solid blue; */
    }

    .footer-sec1-input {
        position: relative;
        margin: auto;
        /* align-items: center; */

    }

    .footer-sec1-input input {
        padding-left: 15px;
        border-radius: 15px;
        height: 55px;
        width: 238px;
        /* justify-content: center; */
        /* display: flex;
    justify-content: center;
    align-items: center; */
    }

    .footer-sec1-input img {
        position: absolute;
        display: inline-block;
        width: 43px;
        height: 32px;
        left: 187px;
        top: 11px;
        cursor: pointer;
    }

    .footer-sec2 {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        /* width: 380px; */
        width: 100%;
        padding: 0 20px;
        /* border: 1px solid red; */
    }

    .footer-sec2 h2 {
        font-size: 20px;
        text-align: center;
    }

    .footer-link {
        padding-top: 36px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .copyright {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        padding: 13px 0;
        font-size: 16px;
        color: #FFFFFF;
    }

}

@media screen and (min-width: 481px) and (max-width:768px) {


    .footer-before {
        /* padding-right: 290px; */
        padding: 50px 40px;
        display: flex;
        /* justify-content: space-between; */
        flex-direction: row;
        gap: 30px;

    }

    .footer-sec1-input {
        position: relative;
        /* align-items: center; */

    }

    .footer-sec1-input input {
        padding-left: 15px;
        border-radius: 10px;
        height: 50px;
        width: 250px;

    }

    .footer-sec1-input img {
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 40px;
        left: 195px;
        top: 5px;
        cursor: pointer;
    }
}

@media screen and (min-width: 769px) and (max-width:1250px) {


    .footer-before {
        /* padding-right: 290px; */
        padding: 50px 40px;
        display: flex;
        /* justify-content: space-between; */
        flex-direction: row;
        gap: 30px;

    }

    .footer-sec1 {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        /* width: 296px; */
        width: 100%;
        gap: 28px;
        /* border: 1px solid blue; */
    }

    .footer-sec1-input {
        position: relative;
        /* align-items: center; */

    }

    .footer-sec1-input input {
        padding-left: 15px;
        border-radius: 10px;
        height: 60px;
        /* width: 250px; */
        width: 100;

    }

    .footer-sec1-input img {
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 40px;
        left: 300px;
        top: 10px;
        cursor: pointer;
    }
}

@media screen and (min-width: 1441px) {

    .logo {
        position: relative;
        /* height: 70px; */
        /* display: none; */
    }

    .logo>img {
        position: absolute;
        width: 200px;
        left: -30px;
        top: -55px;


        /* background-color: aqua; */
    }

    .footer-sec1 {
        width: 60%;
    }

    .footer-sec1-text {
        font-size: 30px;
    }


    .footer-sec1-input {
        position: relative;
        /* align-items: center; */

    }

    .footer-sec1-input input {
        padding-left: 50px;
        border-radius: 15px;
        height: 80px;
        width: 600px;
        font-size: 25px;

    }

    .footer-sec1-input img {
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 50px;
        left: 540px;
        top: 13px;
        cursor: pointer;
    }

    .footer-sec2 {
        font-size: 25px;
    }

    .footer-sec2 h2 {
        font-size: 30px;
    }

    .copyright {
        font-size: 30px;
    }
}
</style>