<template>
    <card class="card">
        <span class="num">66</span>
        <span class="txt">New Candidates to review</span>
        <span class="material-symbols-outlined"> chevron_right </span>
    </card>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .card{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        padding: 30px 10px;
        background-color: #88CC00;
        color: #fff;
    }
    .card .num{
        font-size: 40px;
        font-weight: bolder;
    }
</style>