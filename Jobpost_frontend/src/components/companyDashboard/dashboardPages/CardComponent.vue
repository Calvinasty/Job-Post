<template>
    <!-- Show card1 using conditional rendering -->
    <card v-if="cardItem.type == 'card1'" class="card1" :style="{backgroundColor: cardItem.color}">
        <span class="num">{{ cardItem.num }}</span>
        <span class="txt"> {{ cardItem.text }} </span>
        <router-link :to="cardItem.link"> <span class="material-symbols-outlined"> chevron_right </span></router-link>
    </card>

    <!-- Show card2 using conditional rendering -->
    <card v-if="cardItem.type == 'card2'" class="card2" :style="{backgroundColor: cardItem.color}" @click="$router.push(cardItem.link)">
        <h1>{{ cardItem.title }}</h1>
        <span class="num">{{ cardItem.num }}</span>
    </card>

    <!-- Show card3 using conditional rendering -->
    <card v-if="cardItem.type == 'card3'" class="card3" :style="{backgroundColor: cardItem.color}">
        <h1>{{ cardItem.title }}</h1>
        <span class="num">{{ cardItem.num }}</span>
        <div class="progress">
            <div class="progress-bar"
                :style="{background: `linear-gradient(to right, 
                    ${cardItem.jobTypes[0].color} ${cardItem.jobTypes[0].num}%, 
                    ${cardItem.jobTypes[1].color} ${cardItem.jobTypes[1].num}%, 
                    ${cardItem.jobTypes[2].color} ${cardItem.jobTypes[2].num}%,
                    ${cardItem.jobTypes[3].color} ${cardItem.jobTypes[3].num}%,
                    ${cardItem.jobTypes[4].color} ${cardItem.jobTypes[4].num}%
                )`}"
            >
                <div class="progress-shadow"></div>
            </div>
        </div>
        <div class="progress-details">
            <span class="job-type" v-for="(item, index) in cardItem.jobTypes" :key="index">
                <span :style="{backgroundColor:item.color}"></span>
                <span>{{ item.name }}:&emsp;</span>
                <span>{{ item.num }}</span>
            </span>
        </div>
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

    .card3{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        width: 100%;
        padding: 30px 10px;
        border: 2px solid #88CC00;
    }
    .progress{
        /* background-color: #88CC00; */
        width: 306px;
        height: 17px;
        position: relative;
    }
    .progress-bar{
        position: relative;
        /* background-size: 24em 0.25em; */
        width: 100%;
        height: 100%;
        border: 1px solid;
        /* background-image: linear-gradient(to right, #80D25B, #FF763C, #0596FF, #FF0000, #10BBC6); */
    }
    .progress-details{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 5px;
        /* border: 1px solid red; */
        width: 80%;
    }
    .job-type{
        display: flex;
        flex-direction: row;
        font-size: 10px;
        /* border: 1px solid red; */
        flex-basis: 45%;
    }
    .job-type span:first-child{
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
    .job-type span:last-child{
        font-weight: 700;
        color: #787272;
    }

</style>