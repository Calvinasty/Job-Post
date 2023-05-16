<template>
    <section class="container">
        <aside class="left">
            <h3 class="headline"> Testimonial </h3>
            <h1 class="head-text"> What Our Clients <br> Are Saying </h1>
            <p class="message">
                Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig 
                Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig 
                Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig 
                Lorem osdfoisf iufog usofgu shofgshckjvhsoighs ghisudf hgisuodfgshdfguhiosdfouig 
            </p>
            <div class="action">
                <div class="client">
                    <h3>Daniella Momo</h3>
                    <h5>Front-End Developer</h5>
                </div>
                <div class="btn">
                    <button> <img src="/images/lt_sign.svg" alt="lt_sgin"> </button>
                    <button> <img src="/images/gt_sign.svg" alt="gt_sign"> </button>
                </div>
            </div>
        </aside>
        <aside class="right">
            <div class="image"></div>
        </aside>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .container{
        font-family: 'Raleway';
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100dvh;
        padding: 195px 125px;
        /* border: 2px solid #7FBF4C; */

        /* background-color: brown; */
    }
    .left{
        width: 40%;
        /* border: 1px solid brown; */
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .left .headline{
        color: #7FBF4C;
        font-size: 25px;
        font-weight: 500;
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
        background-color: #7BA659;
        /* border: 2px solid red; */
    }
    .right .image::before{
        content: '';
        display: block;
        width: 563px;
        height: 552px;
        position: absolute;
        top: -10%;
        left: -10%;
        background-image: url('/images/client1.jpg');
        background-size:cover;
        background-repeat: no-repeat;
        background-position: 70%;
        
    }

</style>