<template>
    <header class="container">
        <NavComponent />
        <section>
            <aside class="head">
                <h1>Find the <span class="color">job</span><br> that fits <span class="color">your</span> <br> life</h1>
            </aside>
            <aside class="tag">
                <p>
                    lorem isjafj kajfoajf asodjassofjda aojdhfoiahdfuaif
                    lorem isjafj kajfoajf asodjassofjda aojdhfoiahdfuaif Ojsdfghang 
                </p>
            </aside>
            <aside class="action">
                <div>
                    <span>
                        <label for="location">Location</label>
                        <input type="text" placeholder="Enter Location">
                    </span>
                    <span>
                        <label for="location">Type</label>
                        <input type="text" placeholder="Enter type of job">
                    </span>
                    <button>
                        <img src="/images/search.svg" alt="search">
                        Search
                    </button>
                </div>
            </aside>
        </section>
    </header>
</template>

<script>
    import NavComponent from './NavComponent.vue';
    export default {
        components:{
            NavComponent
        }
    }
</script>

<style lang="css" scoped>
    .color{
        color: #7FBF4C;
    }
    .container{
        font-family: 'Raleway';
        width: 100%;
        height: 100dvh;
        padding: 55px 105px;
        background-color: rgba(0, 0, 0, 0.56);
        /* border: 2px solid red; */
    }
    .container::before{
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: url('/images/job_banner.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 60%;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .container section{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        height: 100%;
        /* border: 5px solid green; */
    }
    section .head{
        width: 60%;
        font-size: 90px;
        font-weight: bolder;
        color: #fff;
    }
    section .tag{
        width: 40%;
        font-size: 25px;
        color: #d1d1d1;
    }
    section .action div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5px;
        padding: 19px;
        background-color: #fff;
        border-radius: 15px;
    }
    .action div span{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .action div span label{
        margin-left: 20px;
    }
    .action div span input{
        /* border: none; */
        padding: 20px 20px 10px 20px;
        border: none;
    }
    .action div span input:focus{
        outline: none;
        border-bottom: 0.5px solid #2C2D2B;
    }

    .action div span:first-child{
        border-right: 2px solid #2C2D2B;
    }
    
    .action div button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 200px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        background-color: #2C2D2B;
        border-radius: 15px;
    }
    .action div button img{
        width: 20px;
    }

</style>