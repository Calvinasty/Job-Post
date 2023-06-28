<template>
    <section class="main">
        <aside class="modal-nav" v-if="navLink=='default'">
            <h2>{{ applicant.Job_seeker?.job_seeker_profile?.first_name +' '+ applicant.Job_seeker?.job_seeker_profile?.last_name }}</h2>
            <SelectTiles v-for="(nav,index) in modalNav" :key="nav.link" :navItem="nav" :handleClick="handleClick" />
        </aside>

        <aside class="status" v-if="navLink=='status'">
            <span class="status-head">
                <span class="material-symbols-outlined" @click="handleClick('default')"> keyboard_backspace </span>
                <h3>Application Status</h3>
            </span>
            <span class="status-sub">
                <span class="status-tag">
                    <span class="pending" v-if="status[0].active == true">Pending</span> 
                    <span class="accepted" v-if="status[1].active == true">Accepted</span> 
                    <span class="declined" v-if="status[2].active == true">Declined</span>
                </span><br><br>
                <h4> Select the status of the application </h4>
            </span>
            <SelectTiles v-for="(item,index) in status" :key="item.link" :navItem="item" :navIndex="index" :status="applicant.status" :handleSelect="handleSelect"/>
        </aside>

        <aside class="cover" v-if="navLink=='cover'">
            <span class="cover-head">
                <span class="material-symbols-outlined" @click="handleClick('default')"> keyboard_backspace </span>
                <h3> Cover Letter </h3>
            </span>
            <textarea name="cover" id="" cols="70" rows="25" :value="coverletter" disabled />
        </aside>

        <aside v-if="navLink=='profile'">
            <span class="profile-head">
                <span class="material-symbols-outlined" @click="handleClick('default')"> keyboard_backspace </span>
            </span>
            <ApplicantSummary />
        </aside>

        <aside class="cv" v-if="navLink=='cv'">
            <span class="cv-head">
                <span class="material-symbols-outlined" @click="handleClick('default')"> keyboard_backspace </span>
                <h3> CV Download </h3>
            </span>
            <span class="material-symbols-outlined icon"> picture_as_pdf </span>
            <a href="" :download="cv"><button>Download</button></a>
        </aside>
    </section>
</template>

<script>
    import {mapState} from 'pinia'
    import { useDashboardStore } from '../../../../stores/dashboard';
    import SelectTiles from './SelectTiles.vue';
    import ApplicantSummary from './ApplicantSummary.vue';
    export default {
        components:{ SelectTiles, ApplicantSummary },
        data(){
            return{
                navLink: 'default',
                applicant: {},
                cv: '',
                coverletter:'Dear hiring manager, I’ve been working as a front- end web developer at TypoTech for 4 years, and now seek a new challenge.I think my experience and skills in JavaScript, HTML, and CSS make me perfect for this role.I’ve worked in large development teams that have sharpened my technical skills, improved my communication, and made me understand what it takes to meet tight deadlines. I’ve recently developed web - based applications for a project management client.My involvement as a designer and a front - end developer has given me the opportunity to manage a diverse range of client requests.I have also proven myself as a team player, which is another crucial requirement for this role. My keen interest in programming and design helps me find creative solutions to technical challenges and develop visually appealing websites.My extensive knowledge of technical standards helps me manage projects efficiently. Thank you for your time and consideration.I look forward to meeting you soon and I’m happy to answer any questions you have Regards, ',
                modalNav:[
                    {name: 'Application Status', link:'status'},
                    {name: 'View Cover Letter', link:'cover'},
                    {name: 'View Profile', link:'profile'},
                    {name: 'Download CV', link:'cv'},
                ],
                status:[
                    {name: 'Pending', link:'pending', icon: 'steppers', active: true},
                    {name: 'Accept', link:'accepted', icon: 'check_small', active: false},
                    {name: 'Decline', link:'declined', icon: 'close', active: false},
                ],
            }
        },
        computed:{
            ...mapState(useDashboardStore, ['selectedApplicantId', 'allApplicants', 'updatePostModalId'])
        },
        beforeMount(){
            // check if status is clicked to route user to status tile
            if(this.updatePostModalId == 'status')
                this.navLink = 'status'
        },
        mounted(){
            const applicantResult = this.allApplicants.find(item => item.js_id == this.selectedApplicantId)
            this.applicant = applicantResult
            this.cv = this.applicant.cv
            this.coverletter = this.applicant.cover_letter
            this.setStatus()
        },
        methods:{
            setStatus(){
                Object.keys(this.status).forEach((key,index) => {
                    if(this.applicant.status.toLowerCase() == this.status[index].link)
                        this.status[key].active = true
                    else
                        this.status[key].active = false
                })
            },
            handleClick(link){
                this.navLink = link
            },
            handleSelect(itemIndex){
                Object.keys(this.status).forEach((key, index) => {
                    if(itemIndex == index){
                        this.status[key].active = true 
                    }else{
                        this.status[key].active = false
                    }
                })
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
        padding: 0;
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
    .status-head span{
        position: absolute;
        left: 50px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    .status-sub{
        position: absolute;
        top: 13%;
    }
    .status-tag span{
        padding: 5px 10px;
        border-radius: 10px;
        color: #fff;
        font-size: 14px;
        box-shadow: 5px 5px 9px rgb(215, 213, 213);
    }
    .status-tag span.pending{ background-color: #dcd40ecc;}
    .status-tag span.accepted{ background-color: #8c0;}
    .status-tag span.declined{ background-color: #d81a1acc;}

    .cover{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
    .cover-head{
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        width: 100%;
        font-size: 20px;
        position: absolute;
        top: 5%;        
    }
    .cover-head span{
        position: absolute;
        left: 50px;
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    .cover textarea{
        padding: 20px;
        border-radius: 20px;
        outline: 1px solid #8c0;
        max-width: 600px;
        max-height: 500px;
    }
    .profile{
        width: 100%;
        padding: 0;
    }
    .profile-head span{
        position: absolute;
        left: 50px;
        font-size: 30px;
        font-weight: bolder;
        cursor: pointer;
    }
    .cv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .cv-head{
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        width: 100%;
        font-size: 20px;
        position: absolute;
        top: 5%;
    }
    .cv-head span{
        position: absolute;
        left: 50px;
        font-size: 30px;
        font-weight: bolder;
        cursor: pointer;
    }
    .cv .icon{
        font-size: 200px;
        color: rgb(193, 42, 42);
    }
    .cv button{
        padding: 10px 40px;
        border: 2px solid #8c0;
        border-radius: 10px;
        outline: none;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 5px 5px 9px rgb(215, 213, 213);
    }
    .cv button:hover{
        box-shadow: none;
    }
</style>