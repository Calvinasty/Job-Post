<template>
    <section class="main">
        <CardComponent v-for="(item, index) in card1Info" :key="index" :cardItem="item"/>
        <CardComponent v-for="(item, index) in card2Info" :key="index" :cardItem="item"/>
        <CardComponent v-for="(item, index) in card3Info" :key="index" :cardItem="item"/>
        <div class="first">
            <Chart />
        </div>
    </section>
</template>

<script>
    import CardComponent from './CardComponent.vue';
    import Chart from './Chart.vue';
    export default {
        components:{
            CardComponent,
            Chart
        },
        data(){
            return{
                card1Info: [
                    {type: 'card1', num: 6, text:'New Candidates to review', link:'first', color:'#88CC00'},
                    {type: 'card1', num: 9, text:'New Candidates to review', link:'second', color:'#0596FF'},
                    {type: 'card1', num: 12, text:'New Candidates to review', link:'third', color:'#000'},
                ],
                card2Info: [
                    {type: 'card2', num: 12, title:'Total Job Posts', link:'/admin/jobsView', color:'#f5f5f5'}
                ],
                card3Info: [
                    {type: 'card3', num: 12, title:'Applicants Summary', link:'/admin/viewApplicant', color:'#f5f5f5',
                        jobTypes:[
                            {name: 'Full time', num: 10, color: '#80D25B'},
                            {name: 'Internship', num: 50, color: '#FF763C'},
                            {name: 'Part time', num: 20, color: '#0596FF'},
                            {name: 'Contract', num: 15, color: '#FF0000'},
                            {name: 'Remote', num: 5, color: '#10BBC6'}
                        ]
                    }
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
        gap: 10px;
        /* height: 70dvh; */
        align-items: start;
        /* overflow: scroll; */
        /* height: 100%; */
        height: 0;
        
    }
    /* .main .card1 { */
        /* grid-row: 2 ;
        grid-column: 1; */
        /* background-color: #000; */
        /* display: none; */
    /* } */
    .main div{
        /* padding: 30px 10px; */
    }
    .main div.first{
        grid-area: 2/1/5/3;
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
        align-self: stretch;
    }
    .main .card2{
        grid-area: 2/3/3/4;
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
    }
    .main .card3{
        grid-area: 3/3/5/4;
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
    }
</style>