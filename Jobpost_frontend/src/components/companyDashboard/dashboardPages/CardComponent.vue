<template>
    <card v-if="cardItem.type == 'card1'" class="card1" :style="{backgroundColor: cardItem.color}">
        <span class="num">{{ cardItem.num }}</span>
        <span class="txt"> {{ cardItem.text }} </span>
        <router-link :to="cardItem.link"> <span class="material-symbols-outlined"> chevron_right </span></router-link>
    </card>

    <card v-if="cardItem.type == 'card2'" class="card2" :style="{backgroundColor: cardItem.color}" @click="$router.push(cardItem.link)">
        <h1>{{ cardItem.title }}</h1>
        <span class="num">{{ cardItem.num }}</span>
    </card>

    <card v-if="cardItem.type == 'card3'" class="card1" :style="{backgroundColor: cardItem.color}">
        <h1>{{ cardItem.title }}</h1>
        <span class="num">{{ cardItem.num }}</span>
    </card>
</template>

<script>
    export default {
        props:[
            "cardItem"
        ],
    }
</script>

<style lang="css" scoped>
    .card1{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 30px 10px;
        /* background-color: #88CC00; */
        color: #fff;
    }
    .num{
        font-size: 40px;
        font-weight: bolder;
    }
    a{
        text-decoration: none;
        color: #fff;
    }

    .card2{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        width: 100%;
        padding: 30px 10px;
        border: 2px solid #88CC00;
        cursor: pointer;
        /* color: #fff; */
    }
    .card2 h1{
        font-size: 20px;
    }
    .card2:hover{
        background-color: #88CC00 !important;
        color: #fff;
    }
</style>