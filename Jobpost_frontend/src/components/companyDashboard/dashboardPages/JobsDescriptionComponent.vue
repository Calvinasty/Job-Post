<template>
    <div class="main">
        <ul class="table-head">
            <li>Job Title</li>
            <li>Role Type </li>
            <li>Location</li>
            <li>Deadline🗓</li>
            <li>View Applicants</li>
            <li>Edit 📝</li>
        </ul>

        <ul v-for="(item, index) in myjobs" :key="index" class="table-body">
            <li>{{ item.job_title }}</li>
            <li>{{ item.job_type }}</li>
            <li>{{ item.location }}</li>
            <li>{{ item.application_deadline.split('T')[0] }}</li>
            <li><span  @click="showApplicantsPage(index)" class="material-symbols-outlined tooltip" style="justifySelf:center">visibility</span></li>
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
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {
        ...mapActions(useDashboardStore, ['setModal']),
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
        }
    },
};
</script>

<style lang="css" scoped>
    .main {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        /* background-color: rgba(255, 255, 255, 1); */
        /* margin-top: 20px; */
        /* background: #F4F4F4; */
        height: 100%;
        width: 100%;
        padding: 20px 40px;
        /* overflow: scroll; */
        /* flex: 1; */
        /* padding: 0px 90px 120px 100px; */
    }
    .main ul {
        list-style: none;
    }
    .table-head {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        font-weight: 800;
        font-size: 18px;
        line-height: 27px;
        padding: 0;
        /* padding-top: 30px; */
        /* padding-bottom: 10px; */
        /* background-color: #88cc00; */
        color: #000;
        border-bottom: 5px solid #88cc00;
        /* border: 1px solid red ; */
        /* background-color: aqua; */
    }
    .table-head li {
        width: 15%;
        padding: 10px;
        /* margin-left: 50px; */
        /* border: 1px solid; */
    }
    .table-head li:first-child{ width: 30%; }
    .table-head li:last-child{ width: 10%; text-align: center;}
    .table-body {
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        border-bottom: 1px solid rgba(120, 114, 114, 1);
        padding-top: 15px;
        /* margin-right: 10px; */
        /* background-color: aqua; */
        /* border: 1px solid green; */
        padding: 0px;
    }
    .table-body li {
        width: 15%;
        padding: 10px;
        /* margin-left: 50px; */
        /* border: 1px solid; */
    }
    .table-body li:first-child{ width: 30%; }
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