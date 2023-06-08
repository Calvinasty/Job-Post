<template>
    <section class="main">
        <CardComponent v-for="(item, index) in card1Info" :key="index" :cardItem="item"/>
        <div class="chart">
            <Chart :chartData="chartData" :chartOptions="chartOptions" />
        </div>
        <CardComponent v-for="(item, index) in card2Info" :key="index" :cardItem="item"/>
        <CardComponent v-for="(item, index) in card3Info" :key="index" :cardItem="item"/>
    </section>
</template>

<script>
    import {mapState} from 'pinia'
    import { useDashboardStore } from '../../../stores/dashboard';
    import CardComponent from './CardComponent.vue';
    import Chart from './Chart.vue';
    export default {
        components:{
            CardComponent,
            Chart
        },
        data(){
            return{
                hello: 'hjhjkhkjhk',
                card1Info: [
                    {type: 'card1', num: 0, text:'Jobs Active', link:'first', color:'#88CC00'},
                    {type: 'card1', num: 0, text:'Jobs Expired', link:'second', color:'#c73d3dd6'},
                    {type: 'card1', num: 0, text:'Jobs Deleted', link:'third', color:'#000000c8'},
                ],
                card2Info: [
                    {type: 'card2', num: 0, title:'Total Job Posts', link:'/admin/jobsView', color:'#f5f5f5'}
                ],
                card3Info: [
                    {type: 'card3', num: 0, title:'Applicants Summary', link:'/admin/viewApplicant', color:'#f5f5f5',
                        jobTypes:[
                            {name: 'Full time', num: 10, color: '#80D25B'},
                            {name: 'Internship', num: 50, color: '#FF763C'},
                            {name: 'Part time', num: 20, color: '#0596FF'},
                            {name: 'Contract', num: 15, color: '#FF0000'},
                            {name: 'Remote', num: 5, color: '#10BBC6'}
                        ]
                    }
                ],
                chartData: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'Jun'],
                    datasets: [ 
                        { data: [], fill: false, label: 'Data One', lineTension: 0.3, backgroundColor: '#88CC00',} 
                    ],
                    options:{ plugins: { filler: { propagate: true } } }
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        computed:{
            ...mapState(useDashboardStore, ['chartDataValues']),
        },
        mounted(){
            Object.values(this.chartDataValues).forEach((value,index) => {
                this.chartData.datasets[0].data[index] = value
            })
        },
        beforeMount(){
            this.getCompanyData()
        },
        methods:{
            getCompanyData(){
                // alert('Hello')
            },
            getActiveJobs(){
                // name, email, password, phone, verification
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
    .main div{
        /* padding: 30px 10px; */
    }
    .main div.chart{
        grid-area: 2/1/5/3;
        background-color: #F5F5F5;
        border: 2px solid #88CC00;
        align-self: stretch;
    }
    .main .card2{
        grid-area: 2/3/3/4;
        background-color: #F5F5F5;
        border: 1.5px solid #88CC00;
        align-self: stretch;
    }
    .main .card3{
        grid-area: 3/3/5/4;
        background-color: #F5F5F5;
        border: 1.5px solid #c73d3dd6;
        align-self: stretch;
    }
</style>