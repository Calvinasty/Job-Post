<template>
    <div>
        <div class="main">
            <ul class="table-head">
                <li>No.</li>
                <li>Applicant Name</li>
                <li>Role Type</li>
                <li>Location</li>
                <li>Status</li>
            </ul>

            <ul v-for="(applicant, index) in applicants" :key="applicant.id" class="table-body">
                <li class="count">{{ index+1 }}</li>
                <!-- <li>{{ applicant.first_name }} {{ applicant.last_name }}</li> -->
                <li>{{ applicant.name }}</li>
                <li>{{ applicant.role }}</li>
                <li>{{ applicant.location }}</li>
                <li><span class="status pending">{{ applicant.status }}</span></li>
                <!-- <li class="eye-icon">
                    <span @click="()=>showTip()" class="material-symbols-outlined tooltip">visibility</span>
                    <p class="hide"  :class="{view:edit}">
                        <span @click="setModal('ApplicantSummary')">View Applicant</span>
                        <br>
                        <span><a :href="cv" download style="text-decoration: none;color:#666"> Download Resume </a></span>
                    </p>
                </li><br> -->
            </ul>
            <!-- <div class="hide"  :class="{showCover:edit}"> <span style="color: #88cc00;"> COVER LETTER:</span> <br> {{ cover }} </div> -->
        </div>
    </div>
</template>

<script>
import {mapActions} from 'pinia'
import { useDashboardStore } from '../../../stores/dashboard';
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
        ...mapActions(useDashboardStore, ['setModal']),
        showTip(index){
            this.edit = !this.edit
            this.toolVisible=!this.toolVisible
            console.log(index);
        },
        hideTip(index){
            this.edit = index
            this.toolVisible =! this.toolVisible
            console.log(index);
        }
    },
};
</script>

<style lang="css" scoped>
    .main {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        height: 100%;
        width: 100%;
        padding: 20px 40px;
        overflow: scroll;
    }
    .main ul {
        list-style: none;
        margin: 0;
    }

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
        width: 25%;
        padding: 10px;
    }
    .table-head li:first-child{ width: 5%; text-align: center; }
    .table-head li:nth-child(2){ width: 35%; }
    .table-head li:nth-child(3){ width: 25%; }
    .table-head li:nth-child(4){ width: 25%; }
    .table-head li:last-child{ width: 10%; }

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
    .table-body:hover li:nth-child(2){
        color: #88cc00;
    }
    .table-body li {
        width: 25%;
        padding: 10px;
    }
    .table-body li:first-child{  width: 5%; text-align: center; font-weight: 600; color: #88cc00;}
    .table-body li:nth-child(2){  width: 35%; }
    .table-body li:nth-child(3){  width: 25%; }
    .table-body li:nth-child(4){  width: 25%; }
    .table-body li:last-child{  width: 10%; }

    li span.status{
        padding: 8px 15px;
        color: #fff;
        border-radius: 5px;
        margin-top: 50px;
    }
    li span.pending{
        background-color: rgb(236, 217, 109);
    }

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