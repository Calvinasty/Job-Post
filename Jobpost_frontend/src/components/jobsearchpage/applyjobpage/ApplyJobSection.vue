<template>
   <div class="apply-section flex-center">
    <h2>
        Apply Job
    </h2>
    <div class="general-info ">
        <h3>General Information</h3>
        <form @submit="handleApply" class="flex-center">
            <ApplyInputComponent v-for="(item,index) in  inputInfo" :key="index" 
            :id="item.id" :input-name="item.inputName" :input-type="item.inputType" 
            :label="item.label" :placeholder="item.placeholder" 
            :file-types="item.fileTypes"/>
            <ApplyInputComponent id="cover-letter" input-name="cover-letter" 
            input-type="file" label="Cover Letter" placeholder="Kofi" 
            file-types=".pdf,.docx"/>
        
            <div class="cv flex-center">
                <ApplyInputComponent fileTypes=".pdf,.docx" id="cv" 
                inputName="cv" inputType="file" label="CV/Resume" placeholder="cv" />
                <button class="apply-job-btn" type="submit" >Apply</button>
            </div>
           
        </form>
       
    </div>
</div>
</template>

<script>
import {applyJobInput} from '../../../data';
import ApplyInputComponent from './ApplyInputComponent.vue';
export default {
  components: { ApplyInputComponent },
    name: 'JobPostApplyJobSection',

    data() {
        return {
            inputInfo:''     
        }
    },
    props:['currentUser'],

    created() {
        this.inputInfo=applyJobInput
        console.log(this.inputInfo[0].id);

        
    },

    methods: {
        
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
    padding-left: 20px;
}
.general-info{
    padding-top: 20px ;
    border-top: 1px solid #898989;
}
h3{
    color:rgba(120, 114, 114, 1);
    font-weight: 700;
    margin-bottom: 10px;
}
form{
width: 100%;
/* background: #000; */
gap: 20px;
position: relative;
padding-bottom:150px;
}

.cv{
    border-top: 1px solid #898989 ;position: absolute;
    /* background: #541d1d; */
    width: 80%;
    bottom: 0;
    padding:10px 0;
    /* height: 100px; */
}
.apply-job-btn{
    background: rgb(22, 172, 22);
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
</style>