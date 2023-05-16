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
            <FeatureJobCard />
            <FeatureJobCard />
            <FeatureJobCard />
        </div>

        <button class="btn">Find More Jobs <img src="/images/arrow.svg" alt=""></button>


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
    flex-direction: column;
    padding-top: 30px;
    width: 100%;
    height: 100dvh;
    background: rgba(123, 166, 89, 0.61);
}

.container header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container header h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 70px;
}

/* .container header p {
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 29px;
    } */

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

.box-sub {
    display: flex;

}

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
</style>