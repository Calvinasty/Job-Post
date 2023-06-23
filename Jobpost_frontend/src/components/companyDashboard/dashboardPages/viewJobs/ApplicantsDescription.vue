<template>
    <div>
        <div class="main">
            <ul class="table-nav">
                <li @click="$router.back()">Jobs</li> 
                <li>/</li> 
                <li>Applicants</li>
            </ul>
            <ul class="table-head">
                <li>No.</li>
                <li>Applicant Name</li>
                <li>Role Type</li>
                <li>Location</li>
                <li>View</li>
                <li>Status</li>
            </ul>

            <ul v-for="(applicant, index) in applicants" :key="applicant.id" class="table-body">
                <li class="count">{{ index+1 }}</li>
                <!-- <li>{{ applicant.first_name }} {{ applicant.last_name }}</li> -->
                <li @click="viewApplicant(applicant.id)">{{ applicant.name }}</li>
                <li>{{ applicant.role }}</li>
                <li>{{ applicant.location }}</li>
                <li style="text-align: center;"><span  @click="viewApplicant(applicant.id)" class="material-symbols-outlined tooltip">visibility</span></li>
                <li><span 
                    class="status" 
                    @click="viewApplicant(applicant.id)"
                    :class="{pending:applicant.status=='Pending'}, {accepted:applicant.status=='Accepted'}, {rejected:applicant.status=='Declined'}"
                >
                    {{ applicant.status }}
                </span></li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'pinia'
import { useDashboardStore } from '../../../../stores/dashboard';
export default {
    components: {
    },
    props: [
        'applicants',
        'jobDetails',
        'cv', 'cover'
    ],

    data() {
        return {
            showtip: '',
            toolVisible: false,
            edit: false
        };
    },
    mounted() {
        console.log(this.applicants);
    },

    methods: {
        ...mapActions(useDashboardStore, ['setModal', 'setApplicant']),
        showTip(index){
            this.edit = !this.edit
            this.toolVisible=!this.toolVisible
            console.log(index);
        },
        hideTip(index){
            this.edit = index
            this.toolVisible =! this.toolVisible
            console.log(index);
        },
        viewApplicant(id){
            this.setApplicant(id)
            this.setModal('ApplicantModal')
        }
    },
};
</script>

<style lang="css" scoped>
    .main {
        display: flex;
        flex-direction: column;
        /* row-gap: 20px; */
        height: 100%;
        width: 100%;
        padding: 20px 40px;
        overflow: scroll;
    }
    .main ul {
        list-style: none;
        margin: 0;
    }
    .table-nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 5px;
        /* gap: 10px; */
    }
    .table-nav li{
        /* background-color: #f1f1f1; */
        padding: 5px 10px;
        cursor: pointer;
        font-weight: bold;
    }
    .table-nav li:first-child{ text-decoration: underline; }
    .table-nav li:last-child{ text-decoration: underline; color: #88cc00; }

    .table-head {
        display: flex;
        flex-direction: row;
        font-weight: 800;
        font-size: 18px;
        line-height: 27px;
        padding: 0;
        color: #000;
        border-bottom: 2px solid #88cc00;
    }
    .table-head li {
        /* width: 25%; */
        padding: 10px;
        /* border: 1px solid; */
    }
    .table-head li:first-child{ width: 5%; text-align: center; }
    .table-head li:nth-child(2){ width: 35%; }
    .table-head li:nth-child(3){ width: 20%; }
    .table-head li:nth-child(4){ width: 20%; }
    .table-head li:nth-child(5){ width: 10%; text-align: center; }
    .table-head li:last-child{ width: 10%; text-align: center; }

    .table-body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(120, 114, 114, 1);
        /* padding-top: 20px; */
        cursor: pointer;
    }
    .table-body:hover {
        font-weight: 600;
        transition: 0.3s ease-in-out;
        background-color: #f1f1f1;
    }
    .table-body:hover li:nth-child(2), .table-body:hover li:nth-child(5){ color: #88cc00; }
    .table-body li {
        /* width: 25%; */
        padding: 20px;
        /* border: 1px solid; */
    }
    .table-body li:first-child{  width: 5%; text-align: center; font-weight: 600; color: #88cc00;}
    .table-body li:nth-child(2){  width: 35%; }
    .table-body li:nth-child(3){  width: 20%; }
    .table-body li:nth-child(4){  width: 20%; }
    .table-body li:nth-child(5){  width: 10%; text-align: center; }
    .table-body li:last-child{  width: 10%; display: flex; justify-content: center; align-items: center; }
    .table-body li span.status:last-child:hover{ border-radius: 10px; }

    li span.status{
        padding: 7px 10px;
        color: #fff;
        border-radius: 5px;
        font-size: 14px;
        height: 100%;
    }
    li span.pending{ background-color: #DCD40E; }
    li span.accepted{ background-color: #88CC00; }
    li span.rejected{ background-color: #D81A1ACC; }

   /* .table-body span {
        color: rgba(136, 204, 0, 1);
    }

  .eye-icon {
        position: relative;
        cursor: pointer;
    }
    .hide{
        display: none;
    }
    .hide.view {
        display: block;
        background: #f1f1f1;
        border: 3px solid #88cc00;
        text-align: center;
        position: relative;
        left: 0px;
        bottom: 5px;
        border-radius: 10px;
    }
    .hide.showCover{
        display: block;
        background-color: #f1f1f1;
        padding: 20px;
    }

    .hide.view span {
        color: #7D7474;
    }
    .hide.view span:hover{
        color: rgba(136, 204, 0, 1);
        transition: 0.3s ease-in-out;
    } */
    

</style>