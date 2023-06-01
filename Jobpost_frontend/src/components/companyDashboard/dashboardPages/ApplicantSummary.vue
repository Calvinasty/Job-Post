<template>
    <!-- <div> -->
        <section class="container">
            <header class="head">
                <h1>Applicant Information</h1>
            </header>
            <ApplicantSummarySide class="side" />
            <ApplicantSummaryCard class="card-1" />
            <ApplicantSummaryCardSec class="card-2" />
            <ApplicantSummaryCardTh class="card-3" />
       </section>
   
</template>

<script>
import ApplicantSummarySide from '../dashboardPages/applicants_summary/ApplicantSummarySide.vue'
import ApplicantSummaryCard from '../dashboardPages/applicants_summary/ApplicantSummaryCard.vue'
import ApplicantSummaryCardSec from '../dashboardPages/applicants_summary/ApplicantSummaryCardSec.vue'
import ApplicantSummaryCardTh from '../dashboardPages/applicants_summary/ApplicantSummaryCardTh.vue'
export default {
    components:{
        ApplicantSummarySide,
        ApplicantSummaryCard,
        ApplicantSummaryCardSec,
        ApplicantSummaryCardTh
    }

}
</script>

<style lang="css" scoped>
.container{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    
}
.head{
    grid-area: 1/1/2/5 ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 20px 20px 50px;
    border: 1px solid rgba(194, 194, 194, 1);
    font-size: 10px;
   
}
.side{
    grid-area: 2/1/8/2;
    padding: 20px;
    border: 1px solid rgba(194, 194, 194, 1);
}
.card-1, .card-2, .card-3{
    padding: 20px 20px 20px 50px;
}
.card-1{
    grid-area: 2/2/4/5;
    border: 1px solid rgba(194, 194, 194, 1);
}
.card-2{
    grid-area: 4/2/6/5;
    border: 1px solid rgba(194, 194, 194, 1);
}
.card-3{
    grid-area: 6/2/8/5;
    border: 1px solid rgba(194, 194, 194, 1);
}






</style>