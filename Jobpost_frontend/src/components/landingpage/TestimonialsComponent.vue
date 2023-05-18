<template>
    <section class="container desktop-view">
        <aside class="left">
            <h3 class="headline"> Testimonial </h3>
            <h1 class="head-text"> What Our Clients <br> Are Saying </h1>
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
            <h3 class="headline"> Testimonial </h3>
            <h1 class="head-text"> What Our Clients <br> Are Saying </h1>
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
</template>

<script>
    export default {
        data(){
            return{
                count: 0,
                display: true,
                client:[
                    {
                        message: 'FIRST osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouigLorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf',
                        name: 'Lisette Baas',
                        role: 'Product Owner',
                        image: 'client1.jpeg'
                    },
                    {
                        message: 'SECOND osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouigLorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf',
                        name: 'Daniel K. Tetteh',
                        role: 'UI/UX Designer',
                        image: 'client3.jpeg'
                    },
                    {
                        message: 'THIRD osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouigLorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf',
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
        methods:{
            minus(){
                if(this.count == 0){
                    this.count = this.client.length - 1
                }else{
                    this.count += -1
                }
            },
            plus(){
                if(this.count == this.client.length -1)
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
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100dvh;
        padding: 195px 125px;
    }
    
    .mobile-view-only{
        display: none;
    }
    .left{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .left .headline{
        color: #7FBF4C;
        font-size: 25px;
        font-weight: bold;
    }
    .left .head-text{
        color: #000;
        font-size: 60px;
        font-weight: 800px;
    }
    .left .message{
        color: #4B4B4B;
        font-size: 24px;
        font-weight: 400;
    }
    .left .action{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
    .left .action .client{
        /* animation: fading 10s infinite; */
    }
    .left .action .client h3{
        font-size: 25px;
        font-weight: 800;
    }
    .left .action .client h5{
        font-size: 20px;
        font-weight: 200;
    }
    .action .btn button{
        width: 60px;
        background-color: #D9D9D9;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        margin-top: 20px;
    }
    .action .btn button:last-child{
        background-color: #000;
        margin-left: 31px;
    }

    .right{
        width:60%;
        /* border: 1px solid blue; */
    }
    .right .image{
        width: 563px;
        height: 552px;
        position: relative;
        float: right;
        top: -10%;
        left: -10%;
    }
    .right .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @keyframes fading {
        0%{opacity: 0;}
        25%{opacity: 1;}
        50%{opacity: 1;}
        75%{opacity: 0.5;}
        100%{opacity: 0;}
    }
    .right .image::after{
        content: '';
        display: block;
        width: 563px;
        height: 552px;
        position: absolute;
        top: 10%;
        left: 10%;
        background-color: #7BA659;
        background-size:cover;
        background-repeat: no-repeat;
        background-position: 70%;
        z-index: -1;
    }

    /* Mobile Media Queries*/
    @media screen and (max-width: 480px) {
        .container{
            display: block;
            /* flex-direction: column-reverse;
            justify-content: space-between; */
            /* align-items: center; */
            width: 100%;
            height: 100dvh;
            padding: 20px; 
            /* border: 1px solid red; */
            height: 100%;
        }
        .desktop-view{
            display: none;
        }
        .main{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 35px;
            /* float: left; */
        }
        .main .headline{
            font-weight: bold;
            color: #7FBF4C;
        }
        .main .head-text{
            color: #000;
            font-size: 40px;
            font-weight: 800px;
        }
        .main .message{
            color: #4B4B4B;
            font-size: 20px;
            font-weight: 400;
            margin-top: 30px;
        }
        .right{
            width:100%;
            /* border: 1px solid blue; */
        }
        .main .image{
            width: 313px;
            height: 302px;
            position: relative;
            /* top: -5%;
            left: -5%; */
        }
        .main .image::after{
            content: '';
            display: block;
            width: 313px;
            height: 302px;
            position: absolute;
            top: 10%;
            left: 10%;
            background-color: #7BA659;
            background-size:cover;
            background-repeat: no-repeat;
            background-position: 70%;
            z-index: -1;
        }
        .main .image img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>