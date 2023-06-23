<template>
    <section class="main">
        <aside class="modal-nav" v-if="navLink=='default'">
            <h2>{{ applicant.name }}</h2>
            <SelectTiles v-for="nav in modalNav" :key="nav.link" :navItem="nav" :handleClick="handleClick" />
        </aside>

        <aside class="status" v-if="navLink=='status'">
            <span class="status-head">
                <span class="material-symbols-outlined" @click="handleClick('default')"> keyboard_backspace </span>
                <h3>Application Status</h3>
            </span>
            <h4> Select the status of the application </h4>
            <SelectTiles v-for="item in status" :key="item.link" :navItem="item" />
        </aside>
    </section>
</template>

<script>
    import {mapState} from 'pinia'
    import { useDashboardStore } from '../../../../stores/dashboard';
    import SelectTiles from './SelectTiles.vue';
    export default {
        components:{ SelectTiles },
        data(){
            return{
                navLink: 'default',
                applicant: {},
                modalNav:[
                    {name: 'Application Status', link:'status'},
                    {name: 'View Cover Letter', link:'cover'},
                    {name: 'View Profile', link:'profile'},
                    {name: 'Download CV', link:'cv'},
                ],
                status:[
                    {name: 'Pending', link:'pending', icon: 'steppers'},
                    {name: 'Accept', link:'accepted', icon: 'check_small'},
                    {name: 'Decline', link:'declined', icon: 'close'},
                ]
            }
        },
        computed:{
            ...mapState(useDashboardStore, ['selectedApplicantId', 'allApplicants'])
        },
        mounted(){
            const applicantResult = this.allApplicants.find(item => item.id == this.selectedApplicantId)
            this.applicant = applicantResult
        },
        methods:{
            handleClick(link){
                this.navLink = link
            }
        }
    }
</script>

<style lang="css" scoped>
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .modal-nav, .status{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        width: 100%;
        height: 100%;
        /* border: 1px solid; */
    }
    .modal-nav h2{
        position: absolute;
        top: 5%;
    }
    .status-head{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* border: 1px solid; */
        width: 100%;
        font-size: 20px;
        position: absolute;
        top: 5%;
    }
    .status h4{
        position: absolute;
        top: 15%;
    }
    .status-head span{
        position: absolute;
        left: 50px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }

</style>