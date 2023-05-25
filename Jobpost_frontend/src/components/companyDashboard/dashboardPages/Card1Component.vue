<template>
    <card class="card" :style="{backgroundColor: cardItem.color}">
        <span class="num">{{ cardItem.num }}</span>
        <span class="txt"> {{ cardItem.text }} </span>
        <router-link :to="cardItem.link"> <span class="material-symbols-outlined"> chevron_right </span></router-link>
    </card>
</template>

<script>
    export default {
        props:[
            "cardItem"
        ]
    }
</script>

<style lang="css" scoped>
    .card{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 30px 10px;
        background-color: #88CC00;
        color: #fff;
    }
    .card .num{
        font-size: 40px;
        font-weight: bolder;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
</style>