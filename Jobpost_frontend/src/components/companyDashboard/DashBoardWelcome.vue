<template>
    <section class="container">
        <aside class="text">
            <h4>{{ greeting }}, {{ company.company_name }}</h4>
            <p>
                Here is your job listing statictic and report from {{  }}
            </p>
        </aside>
        <aside class="date">
            <h5> January 1st - {{ date }} </h5><span class="material-symbols-outlined">
                calendar_month
            </span>
        </aside>
    </section>
</template>

<script>
import { mapState } from 'pinia';
import { useCompanyStore } from '../../stores/companies';

export default {
    name: 'JobPostDashBoardWelcome',
    data(){
        return{
            greeting: '',
            date: ''
            
            
        }
    },
    computed:{
        ...mapState(useCompanyStore, ['company'])
    },
    mounted(){
        this.updateGreeting()
        this.updateDate()
    },
    methods:{
        getGreeting(){
            const date = new Date()
            const getTime = date.getHours() 
            console.log(getTime)

            let greeting;

            if(getTime  < 12){
                greeting = 'Good morning'
            }; 
            if ((getTime >= 12) && (getTime <= 17)){
                greeting = 'Good afternoon'
            }
            else if(getTime > 17){
                greeting = 'Good evening'
            }
            return greeting 

        },
        
         updateGreeting(){
            this.greeting = this.getGreeting()
         },


        currentDate(){
         const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];

        const current = new Date();
        const date = `${current.getDate()} ${monthNames[current.getMonth()]}`;
        return date
    },


        //  currentDate(){
        //     const current = new Date()
        //     const date = `${current.getDate()}/${current.getMonth()+1}`;
        //     return date  
        //     },
        
       
         updateDate(){
            this.date = this.currentDate()
    
         }




        
    }
};
</script>

<style lang="css" scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* padding-top: 80px; */
    /* border: 1px solid green; */
}
.text{
    /* padding-left: 40px; */
}
.text p {
    color: #9C9595;
    font-size: 15px;
}
.date{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    gap: 5px;
    border: 1px solid #88CC00;
}
.date span{
    color: #88CC00;
}


</style>