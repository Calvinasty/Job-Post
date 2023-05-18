<template>
    <div class="container">
        <header>
            <h1>Featured Jobs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis</p>
        </header>

        <div class="box">
            <FeatureJobCard />
            <FeatureJobCard />
            <FeatureJobCard />
            <FeatureJobCard class="mobile-hide" />
            <FeatureJobCard class="mobile-hide" />
            <FeatureJobCard class="mobile-hide" />
        </div>

        <button class="btn mobile-hide">Find More Jobs <img src="/images/arrow.svg" alt=""></button>

        <router-link class="mobile-show" to="">see more</router-link>

    </div>
</template>

<script>
import FeatureJobCard from './FeatureJobCard.vue'
export default {
    components: {
        FeatureJobCard
    }

}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 40px 0;
    width: 100%;
    background-color: #88CC0029;
}

.container header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container header h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
}

.container header p {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 34px;
}

.box {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    row-gap: 30px;
    column-gap: 20px;
}

/* .box-sub {
    display: flex;

} */

.btn {
    margin-top: 50px;
    padding: 15px;
    width: 200px;
    background-color: black;
    border-radius: 20px;
    color: white;
    border-radius: 10px;
}

.btn img {
    padding-left: 20px;
}

.mobile-show {
    display: none;
}

@media screen and (max-width: 480px) {
    .mobile-hide {
        display: none;
    }

    .mobile-show {
        display: block;
    }
}
</style>