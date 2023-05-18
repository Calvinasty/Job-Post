<template>
    <header class="container">
        <NavComponent />
        <section>
            <aside class="head">
                <h1>Find the <span class="color">jobs</span><br> that fits <span class="color">your</span> <br> career</h1>
            </aside>
            <aside class="tag">
                <p>
                    Connecting Talent to Opportunity:<br>
                    Your Path to Success Begins Here!
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
                <!-- button displays only on mobile -->
                <button class="mobile-search">
                    <img src="/images/search.svg" alt="search">
                    Get started
                </button>
            </aside>
        </section>
    </header>
</template>

<script>
    import NavComponent from './NavComponent.vue';
    export default {
        components: {
            NavComponent
        }
    }
</script>

<style lang="css" scoped>
    .color {
        color: #7FBF4C;
    }
    .container {
        width: 100%;
        height: 100dvh;
        padding: 55px 105px;
        background-color: rgba(0, 0, 0, 0.75);
        background-image: url('/images/job_banner.jpeg');
        /* background-position: 90%; */
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: overlay;
    }
    /* .container::before {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: url('/images/job_banner.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 60%;
        top: 0;
        left: 0;
        z-index: -1;
    } */
    .container section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 40px;
        height: 100%;
        /* border: 5px solid green; */
    }
    section .head {
        width: 60%;
        font-size: 65px;
        font-weight: bolder;
        color: #fff;
        letter-spacing:normal;
    }
    section .tag {
        width: 40%;
        font-size: 20px;
        color: #d1d1d1;
    }
    section .action div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5px;
        padding: 19px;
        background-color: #fff;
        border-radius: 15px;
    }
    .action div span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .action div span label {
        margin-left: 20px;
    }
    .action div span input {
        /* border: none; */
        padding: 20px 20px 10px 20px;
        border: none;
    }
    .action div span input:focus {
        outline: none;
        border-bottom: 0.5px solid #2C2D2B;
    }
    .action div span:first-child {
        padding-right: 5px;
        border-right: 2px solid #2C2D2B;
    }
    .action div button {
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
        border: none;
    }
    .action div button img {
        width: 20px;
    }
    .mobile-search{
        display: none;
    }

    /* Mobile Media Queries*/
    @media screen and (max-width: 480px) {
        .container {
            width: 100%;
            height: 100dvh;
            padding: 50px 0;
            background-color: rgba(0, 0, 0, 0.75);
            background-image: url('/images/job_banner2.jpeg');
            background-position: 60% 0%;
            background-repeat: no-repeat;
            background-size: 300%;
            background-blend-mode: overlay;
        }
        .container section {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 80dvh;
            /* border: 5px solid green; */
        }
        section .head {
            width: 100dvw;
            padding: 30px;
            font-size: 42px;
            text-align: center;
            font-weight: bolder;
            color: #fff;
            margin-top: 80px;
            /* border: 1px solid red; */
        }
        section .tag {
            width: 100dvw;
            padding: 30px;
            font-size: 20px;
            text-align: center;
            color: #d1d1d1;
            margin-top: -50px;
        }
        section .action div {
            display: none;
        }
        .mobile-search{
            display: block;
            
        }
        .action button.mobile-search {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 190px;
            padding: 20px;
            cursor: pointer;
            /* color: #7FBF4C; */
            color: #fff;
            font-size: 18px;
            font-weight: 400;
            background-color: #2C2D2B;
            border-radius: 20px;
            border: none;
        }
        .action button.mobile-search img{
            /* filter: brightness(0) saturate(100%) invert(63%) sepia(8%) saturate(2334%) hue-rotate(50deg) brightness(103%) contrast(100%); */
        }
    }
</style>