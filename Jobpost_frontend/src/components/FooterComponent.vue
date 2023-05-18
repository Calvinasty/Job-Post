<template>
    <footer class="footer-container">

        <div class="footer-before">

            <div class="footer-sec1">

                <div class="logo">
                    <img src="/images/Jobpost_logo.png" alt="" width="100px">
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
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                    </div>
                </div>

                <div class="putsmthere">
                    <h2>Put Something Here</h2>
                    <div class="footer-link">
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
                        <router-link to="">Link #</router-link>
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
    justify-content: space-between;
    flex-direction: row;
    /* gap: 30px; */

}

.footer-sec1 {
    /* background-color: #000000; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 380px;
    gap: 50px;
}

.footer-sec1-text {
    font-weight: 200;
    font-size: 25px;
    color: #FFFFFF;
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
    flex-direction: row;
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

.router-link-exact-active {
    text-decoration: none;
    color: #FFFFFF7A;

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
        font-size: 16px;
        justify-content: space-around;
        flex-direction: column;
    }

    .footer-before {
        padding-top: 47px;
        /* padding-right: 290px; */
        padding: 37px 27px;
        width: 296px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 33px;

    }

    .footer-sec1 {
        /* background-color: #000000; */
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 296px;
        gap: 50px;
    }

    .footer-sec1-input {
        position: relative;
        /* align-items: center; */

    }

    .footer-sec1-input input {
        padding-left: 15px;
        border-radius: 15px;
        height: 55px;
        width: 238px;
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







    .copyright {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 13px 0;
        font-size: 16px;
        font-weight: 200;
        color: #FFFFFF;
    }

}
</style>