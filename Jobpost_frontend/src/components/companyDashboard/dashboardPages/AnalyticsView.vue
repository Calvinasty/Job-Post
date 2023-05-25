<template>
    <section class="main">
        <Card1Component class="card1" v-for="(item, index) in cardInfo" :key="index" :cardItem="item"/>
        <div class="first">1</div>
        <div class="second">2</div>
        <div class="third">3</div>
    </section>
</template>

<script>
    import Card1Component from './Card1Component.vue';
    export default {
        components:{
            Card1Component
        },
        data(){
            return{
                cardInfo: [
                    {num: 6, text:'New Candidates to review', link:'first', color:'#88CC00'},
                    {num: 9, text:'New Candidates to review', link:'second', color:'#0596FF'},
                    {num: 12, text:'New Candidates to review', link:'third', color:'#000'}
                ]
            }
        }
    }
</script>

<style lang="css" scoped>
    .main{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 20px;
        height: 70dvh;
    }
    .main .card1 {
        grid-row: 1fr;
        grid-column: 1fr 1fr 1fr;
    }
    .main div{
        /* padding: 30px 10px; */
    }
    .main div.first{
        grid-area: 2/1/5/3;
        background-color: aqua;
    }
    .main div.second{
        grid-area: 2/3/3/4;
        background-color: brown;
    }
    .main div.third{
        grid-area: 3/3/5/4;
        background-color: #88CC00;
    }
</style>