<template>
    <section class="main">
        <CardComponent class="card1" v-for="(item, index) in card1Info" :key="index" :cardItem="item"/>
        <CardComponent class="card2" v-for="(item, index) in card2Info" :key="index" :cardItem="item"/>
        <div class="first">1</div>
        <!-- <div class="second">2</div> -->
        <div class="third">3</div>
    </section>
</template>

<script>
    import CardComponent from './CardComponent.vue';
    export default {
        components:{
            CardComponent
        },
        data(){
            return{
                card1Info: [
                    {type: 'card1', num: 6, text:'New Candidates to review', link:'first', color:'#88CC00'},
                    {type: 'card1', num: 9, text:'New Candidates to review', link:'second', color:'#0596FF'},
                    {type: 'card1', num: 12, text:'New Candidates to review', link:'third', color:'#000'},
                ],
                card2Info: [
                    {type: 'card2', num: 12, text:'New Candidates to review', link:'third', color:'#f5f5f5'}
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
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
    }
    .main .card2{
        grid-area: 2/3/3/4;
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
    }
    .main div.third{
        grid-area: 3/3/5/4;
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
    }
</style>