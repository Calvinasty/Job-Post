<template>
   <div class="apply-section flex-center">
    <h2>
        Apply Job
    </h2>
    <div class="general-info ">
        <form  class="flex-center">
            <h3>General Information</h3>
            <ApplyInputComponent :id="inputInfo[0].id" :input-name="inputInfo[0].inputName" :input-type="inputInfo[0].inputType" 
            :label="inputInfo[0].label" :placeholder="inputInfo[0].placeholder" :value="inputValues[1]?.toUpperCase()"/>
            
            <ApplyInputComponent :id="inputInfo[1].id" :input-name="inputInfo[1].inputName" :input-type="inputInfo[1].inputType" 
            :label="inputInfo[1].label" :placeholder="inputInfo[1].placeholder"  :value="inputValues[3].toUpperCase()"/>

            <ApplyInputComponent :id="inputInfo[2].id" :input-name="inputInfo[2].inputName" :input-type="inputInfo[2].inputType" 
            :label="inputInfo[2].label" :placeholder="inputInfo[2].placeholder" :value="inputValues[7]"/>

            <ApplyInputComponent :id="inputInfo[3].id" :input-name="inputInfo[3].inputName" :input-type="inputInfo[3].inputType" 
            :label="inputInfo[3].label" :placeholder="inputInfo[3].placeholder" :value="inputValues[6]"/>

            <ApplyInputComponent id="cover-letter" input-name="cover-letter" 
            input-type="file" label="Cover Letter" placeholder="Kofi" 
            file-types=".pdf,.docx"  :handleInput="handleInput"/>
        
            <div class="cv flex-center">
                <ApplyInputComponent fileTypes=".pdf,.docx" id="cv"
                inputName="cv" inputType="file" label="CV/Resume" placeholder="cv" :handleInput="handleInput"  />
                <button class="apply-job-btn" type="button" @click.prevent="handleApply">Apply</button>
                <button class="apply-job-btn alt" type="button" @click.prevent="handleCancel" >Cancel</button>
            </div>
           
        </form>
       
    </div>
    <ToastMessage v-show="toast.active" :toast="toast" />
</div>
</template>

<script>
import axios from 'axios';
import {applyJobInput} from '../../../data';
import ApplyInputComponent from './ApplyInputComponent.vue';
import ToastMessage from '../../utils/ToastMessage.vue'
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
  components: { ApplyInputComponent,ToastMessage },
    name: 'JobPostApplyJobSection',

    data() {
        return {
            inputInfo:''    ,
            inputValues:[],
            application:{
                cv:false,
                cover_letter:'',
            },
            loading: false,
            toast: {
                active: false, msg: '', color: ''
            }

        }
    },
    props:['user','job','handleCancel'],

    created() {
        this.inputInfo=applyJobInput
        this.setInputValues()  
    },

    methods: {
        
        axios(){
            axios.post('')
        },

        handleApply(){
            if(!this.application.cv){
                console.log(this.application.cv);
                alert('cv is required')
                return
            }
            const token=JSON.parse(localStorage.getItem('userToken'))
            if(!token){
                this.showToast("Sign in to Apply", 'error')
                setTimeout(()=>(this.$router.push('/auth/login')),6000)
                return          
            }
            const userAplly= new FormData()
            userAplly.append('js_id',this.user.id)
            userAplly.append('job_id',this.job.id)
            userAplly.append('company_id',this.job.company_id)
            userAplly.append('cv_resume',this.application.cv)
            userAplly.append('cover_letter',this.application.cover_letter)
            console.log();

            axios.post( `${BASE_URL}/application/jobApply`, userAplly,{headers:{token}})
            .then(res=>{
                if(res.message){
                    alert(res.message)
                }
                if(res.data){
                    console.log(res.data);
                }
            })
            .catch((err)=>console.log(err))

        },
        handleInput(inputId){
            if(inputId.id=="cv"){this.application.cv=event.target.files[0]   }
            if(inputId.id=="cover-letter"){this.application.cover_letter=event.target.files[0]   }          
        },
        setInputValues(){
            if(this.user){
                this.inputValues=Object.values(this.user)
            }
        },
        showToast(msg, color) {
            this.toast = {
                active: true, msg, color
            }
            setTimeout(() => {
                this.toast = { active: false, msg: '', color: '' }
            }, 6000)
        }

        
    },
};
</script>

<style lang="css" scoped>
.apply-section{
    max-width: 556px;
    min-width: 320px;
    flex:1;
    height: 100%;
    border: 1px solid #9E9E9E;
    border-radius: 20px;
   
}
.apply-section >*{
    width: 100%;
    /* padding: 0px 40px; */
}
h2{
    color: #000000;
    margin-bottom: 10px;
    padding: 10px 40px;
}
.general-info{
    padding: 20px 40px ;
    border-top: 1px solid #898989;
    max-width:556px;
}
h3{
    color:rgba(120, 114, 114, 1);
    font-weight: 700;
    margin-bottom: 10px;
    width:100%;
}
form{
width: 100%;
align-items: flex-start;
/* background: #000; */
gap: 20px;
position: relative;
padding-bottom:300px;
}

.cv{
    border-top: 1px solid #898989 ;
    position: absolute;
    /* background: #541d1d; */
    align-items: flex-start;
    width: 100%;
    bottom: 0;
    padding:20px 0;
    /* height: 100px; */
}
.apply-job-btn{
    background:rgba(136, 204, 0, 1);
    color:#fff;
    width: 100%;
    margin-top:20px;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    border: none;
    border-radius:10px;
    cursor: pointer;
}

.apply-job-btn:hover{
    background: rgb(98, 147, 2);
    transition: all .3s ease;
}
.apply-job-btn.alt{
    background: transparent;
    color: #000;
    border: 1px solid #898989;
}
</style>