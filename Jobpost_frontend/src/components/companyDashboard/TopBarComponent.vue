<template>
    <header class="top-bar">
        <div>
            <img src="/images/company_logo.png" alt="c-logo">
            <h3 style="margin-left: 50px;">Candle Technologies</h3>
        </div>
        <button class="post flex-center-row">
            <span class="material-symbols-outlined">add</span>
            Post a job
        </button>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .top-bar{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #f9f8f8;
        text-align: right;
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
    }
    .top-bar div{
        position: relative;
    }
    .top-bar div img{
        position: absolute;
        width: 100px;
        top:-140%;
        left: -15%;
    }
    .post{
        background-color: #7FBF4C;
        color: #fff;
        padding: 10px 15px;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>