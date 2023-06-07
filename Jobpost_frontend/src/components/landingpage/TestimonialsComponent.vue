<template>
    <div>
        <section class="container desktop-view">
            <aside class="left">
                <h3 class="headline"> Success Story </h3>
                <h2 class="head-text"> What Our Clients Are Saying </h2>
                <p class="message">
                    {{ client[count].message }}
                </p>
                <div class="action">
                    <div class="client">
                        <h3>{{ client[count].name }}</h3>
                        <h5> {{ client[count].role }}</h5>
                    </div>
                    <div class="btn">
                        <button @click="minus()"> <img src="/images/lt_sign.svg" alt="lt_sgin"> </button>
                        <button @click="plus()"> <img src="/images/gt_sign.svg" alt="gt_sign"> </button>
                    </div>
                </div>
            </aside>
            <aside class="right">
                <div class="image">
                    <img :src="`/images/${client[count].image}`" alt="client">
                </div>
            </aside>
        </section>

        <!-- this section is for mobile view -->
        <section class="container mobile-view-only">
            <aside class="main">
                <h3 class="headline"> Success Story </h3>
                <h2 class="head-text"> What Our Clients Are Saying </h2>
                <div class="image">
                    <img :src="`/images/${client[count].image}`" alt="client">
                </div>
                <p class="message">
                    {{ client[count].message }}
                </p>
                <div class="action">
                    <div class="client">
                        <h3>{{ client[count].name }}</h3>
                        <h5> {{ client[count].role }}</h5>
                    </div>
                    <div class="btn">
                        <button @click="minus()"> <img src="/images/lt_sign.svg" alt="lt_sgin"> </button>
                        <button @click="plus()"> <img src="/images/gt_sign.svg" alt="gt_sign"> </button>
                    </div>
                </div>
            </aside>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            display: true,
            client: [
                {
                    message: 'I had been searching for a job in my field for months with no luck. Then I stumbled upon this job portal and within weeks, I had interviews lined up and landed a job at a great company! I cant thank the platform enough for making my job search so much easier and efficient.',
                    name: 'Lisette Baas',
                    role: 'Product Owner',
                    image: 'client1.jpeg'
                },
                {
                    message: 'I had been searching for a job in my field for months with no luck. Then I stumbled upon this job portal and within weeks, I had interviews lined up and landed a job at a great company! I cant thank the platform enough for making my job search so much easier and efficient.',
                    name: 'Daniel K. Tetteh',
                    role: 'UI/UX Designer',
                    image: 'client3.jpeg'
                },
                {
                    message: 'I had been searching for a job in my field for months with no luck. Then I stumbled upon this job portal and within weeks, I had interviews lined up and landed a job at a great company! I cant thank the platform enough for making my job search so much easier and efficient.',
                    name: 'Razak Adams',
                    role: 'Back-End Engineer',
                    image: 'client2.jpeg'
                },
            ]
        }
    },
    mounted() {
        this.toggle()
    },
    methods: {
        minus() {
            if (this.count == 0) {
                this.count = this.client.length - 1
            } else {
                this.count += -1
            }
        },
        plus() {
            if (this.count == this.client.length - 1)
                this.count = 0
            else
                this.count += 1
        },
        toggle() {
            setInterval(() => {
                this.plus()
            }, 10000);
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100dvh;
    padding: 70px;
    background-color: #f1f1f1;
}

.mobile-view-only {
    display: none;
}

.left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 35px;
}

.left .headline {
    color: #88cc00;
    font-size: 25px;
    font-weight: bold;
}

.left .head-text {
    color: #000;
    font-size: 35px;
    font-weight: 800px;
}

.left .message {
    color: #4B4B4B;
    font-size: 24px;
    font-weight: 400;
}

.left .action {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}

.left .action .client {
    /* animation: fading 10s infinite; */
}

.left .action .client h3 {
    font-size: 25px;
    font-weight: 800;
}

.left .action .client h5 {
    font-size: 20px;
    font-weight: 200;
}

.action .btn button {
    width: 60px;
    background-color: #D9D9D9;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 20px;
}

.action .btn button:last-child {
    background-color: #000;
    margin-left: 31px;
}

.right {
    width: 60%;
    /* border: 1px solid blue; */
}

.right .image::before {
    content: '';
    width: 563px;
    height: 552px;
    position: absolute;
    float: right;
    top: 5%;
    left: 5%;
    background-color: #88CC0073;
    z-index: -1;
}
.right .image {
    width: 563px;
    height: 552px;
    position: relative;
    float: right;
    top: -10%;
    left: -10%;
    z-index: 2;
}

.right .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@keyframes fading {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    75% {
        opacity: 0.5;
    }

    100% {
        opacity: 0;
    }
}

/* Mobile Media Queries*/
@media screen and (max-width: 480px) {
    .container {
        display: block;
        width: 100%;
        height: 100%;
        padding: 20px;
        height: 100%;
    }

    .desktop-view {
        display: none;
    }

    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    .main .headline {
        font-weight: bold;
        color: #88cc00;
    }

    .main .head-text {
        color: #000;
        font-size: 25px;
        font-weight: 800px;
    }

    .main .message {
        color: #4B4B4B;
        font-size: 20px;
        font-weight: 400;
        margin-top: 30px;
    }
    .main .image {
        width: 313px;
        height: 302px;
        position: relative;
        z-index: 2;
        align-self: center;
    }
    .main .image::before {
        content: '';
        width: 313px;
        height: 302px;
        position: absolute;
        float: right;
        top: 5%;
        left: 5%;
        background-color: #88CC0073;
        z-index: -1;
    }
    .main .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

/* Mini Tablets */
@media screen and (min-width: 481px) and (max-width: 1440px) {
    .container {
        display: block;
        width: 100%;
        padding: 40px;
        height: 100%;
    }

    .desktop-view {
        display: none;
    }

    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 35px;
        /* float: left; */
    }

    .main .headline {
        font-weight: bold;
        color: #7FBF4C;
    }

    .main .head-text {
        color: #000;
        font-size: 40px;
        font-weight: 800px;
        /* border: 1px solid black; */
    }

    .main .message {
        color: #4B4B4B;
        font-size: 20px;
        font-weight: 400;
        margin-top: 35px;
    }

    .right {
        width: 100%;
        /* border: 1px solid blue; */
    }

    .main .image {
        align-self: center;
        width: 333px;
        height: 322px;
        position: relative;
        top: 0%;
        left: 0%;
        z-index: 2;
    }
    .main .image::before {
        content: '';
        width: 333px;
        height: 322px;
        position: absolute;
        float: right;
        top: 5%;
        left: 5%;
        background-color: #88CC0073;
        z-index: -1;
    }
    .main .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

/* Mini Tablets */
@media screen and (min-width: 1401px) {
    .mobile-view-only {
        display: none
    }

    .desktop-view {
        display: flex;
    }

}
</style>