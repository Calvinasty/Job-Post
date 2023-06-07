<template>
    <div class="container">
        <header>
            <h2>Featured Jobs</h2>
            <p>Discover the latest opportunities and stand out from the crowd with our featured jobs section</p>
        </header>

        <div class="box">
            <FeatureJobCard />
            <FeatureJobCard />
            <FeatureJobCard />
            <FeatureJobCard class="mobile-hide" />
            <FeatureJobCard class="mobile-hide" />
            <FeatureJobCard class="mobile-hide" />
        </div>

        <button @click="handleJobs" class="main-btn mobile-hide">Find More Jobs <span class="material-symbols-outlined">arrow_right_alt</span>
        </button>

        <p class="mobile-show see-more" @click="handleJobs"> see more... </p>

    </div>
</template>

<script>
import FeatureJobCard from './FeatureJobCard.vue'
export default {
    components: {
        FeatureJobCard
    },

    methods:{
        handleJobs(){
            this.$router.push('/jobsearch')
        }
            
    }

}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding:70px 0;
    width: 100%;
    background-color: #88CC0029;
}

.container header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container header h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
}

.container header p {
    font-style: normal;
    font-weight: 400;
    font-size: 18     px;
    line-height: 34px;
}

.box {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width: 80%;
    max-width: 1642px;
    margin: 0 auto;
    margin-top: 30px;
    row-gap: 30px;
    column-gap: 20px;
}

/* .box-sub {
    display: flex;

} */

.main-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 15px;
    width: 200px;
    background-color: #88CC00;
    border: #88CC00;
    color: #ffffff;
    border-radius: 10px;
    font-weight: bolder;
    cursor: pointer;
}

.main-btn span {
    padding-left: 5px;
}

/* .main-btn:hover {
    background-color: #88cc00;
    color: white;
    font-weight: bolder;
    transition: all 0.4s;
} */

.mobile-show {
    display: none;
}

@media screen and (min-width: 1622px) {
    .container header {
        row-gap: 20px;
    }

    .container header h2 {
        font-size: 60px;
    }

    .box {
        width: 70%;
    }
}


@media screen and (max-width: 480px) {
    .mobile-hide {
        display: none;
    }

    .mobile-show {
        display: block;
    }

    .see-more {
        color: #88cc00;
        padding-top: 15px;
        font-size: 20px;
    }

    .container header p {
        padding: 0 15px;
        text-align: center;
    }
}
</style>