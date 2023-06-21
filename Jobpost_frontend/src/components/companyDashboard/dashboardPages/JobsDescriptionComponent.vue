<template>
    <div class="main">
        <ul class="table-head">
            <li>Job Title</li>
            <li>Role Type </li>
            <li>Location</li>
            <li>Deadline🗓</li>
            <li>View Applicants</li>
            <li>Edit</li>
        </ul>

        <ul v-for="(item, index) in myjobs" :key="index" class="table-body">
            <li @click="showApplicantsPage(item.id)">{{ item.job_title }}</li>
            <li>{{ item.job_type }}</li>
            <li>{{ item.location }}</li>
            <li>{{ item.application_deadline.split('T')[0] }}</li>
            <li style="text-align: center;"><span  @click="showApplicantsPage(item.id)" class="material-symbols-outlined tooltip">visibility</span></li>
            <li class="edit-btns">
                <span @click="updatePost(item.id)" class="material-symbols-outlined">edit</span>
                <span @click="deletePost(item.id)" class="material-symbols-outlined">close</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'pinia';
import { useDashboardStore } from '../../../stores/dashboard';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
    name: 'JobPostJosDescriptionComponent',
    components: {
    },
    props: [
        'myjobs'
    ],
    methods: {
        ...mapActions(useDashboardStore, ['setModal','setJobId']),
        updatePost(postId) {
            this.setModal('PostJobForm', postId)
            // console.log(param)
        },
        deletePost(postId){
            if(confirm("Are you want to delete this job?")){
                axios.delete(`${BASE_URL}/job/deleteJob/${postId}`)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
            }else{
                return
            }
        },
        showApplicantsPage(jobId){
            this.setJobId(jobId)
            this.$router.push('/admin/viewApplicant')
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
        /* justify-content: center; */
        font-weight: 800;
        font-size: 18px;
        line-height: 27px;
        padding: 0;
        color: #000;
        border-bottom: 2px solid #88cc00;
    }
    .table-head li {
        width: 15%;
        padding: 10px;
    }
    .table-head li:first-child{ width: 30%; text-align: left; }
    .table-head li:last-child{ width: 10%; text-align: center;}
    .table-body {
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-bottom: 1px solid rgba(120, 114, 114, 1);
        padding-top: 15px;
        cursor: pointer;
    }
    .table-body:hover {
        font-weight: 600;
        transition: 0.3s ease-in-out;
        background-color: #f1f1f1;
    }
    .table-body:hover li:first-child{
        color: #88cc00;
    }

    .table-body li {
        width: 15%;
        padding: 10px;
        justify-content: center;
    }
    .table-body li:first-child{ width: 30%; justify-content: flex-start;}
    .table-body li:last-child{ width: 10%; justify-content: center;}
    .table-body li span {
        color: rgba(136, 204, 0, 1);
        cursor: pointer;
        font-weight: bolder;
    }
    .edit-btns{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }
    .edit-btns span:last-child{
        color: red;
    }

</style>