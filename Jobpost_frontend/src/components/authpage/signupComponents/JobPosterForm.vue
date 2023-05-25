<template>         
 
 
     <main >
         <Transition name="slide-fade">
            <form v-if="pageNumber==0" class=" flex-center">
                    <div class=" input-container flex-center-row">
                        <InputComponent type="text" placeHolder="Organization Name" inputId="jobposter-name" name="name"  />
                        <InputComponent type="email" placeHolder="Organization Email" inputId="jopposter-email" name="email"/>

                    </div>
                    <div class="input-container pass  flex-center-row">
                        <InputComponent type="password" placeHolder="Enter Password" inputId="jopposter-password" name="password"  />
                        <InputComponent type="password" placeHolder="Confirm Password" inputId="jopposter-confirm-password" name="confirm-password"  />

                    </div>
                    <div class="input-container flex-center-row">
                        <InputComponent type="text" placeHolder="Organizations Website" :inputId="inputData[4].inputId" :name="inputData[4].name" />
                        <InputComponent :type="inputData[5].type" :label="inputData[5].label" :inputId="inputData[5].inputId" :name="inputData[5].name" :placeHolder="inputData[5].placeholder" />
                        
                    </div>
                    <JobPosterFormFooter :actionBtnText="btnText" :actionBtnType="btnType" :pageNavigation="pageNavigation"/>
                </form>
            </Transition>
       
            <Transition name="slide-fade">
                <form v-if="pageNumber==1" class=" form-two flex-center">
                    <div class="input-container flex-center-row">
                        <InputComponent :type="inputData[6].type" :label="inputData[6].label" :inputId="inputData[6].inputId" :name="inputData[6].name" :placeHolder="inputData[6].placeholder" />                    
                        <InputComponent :type="inputData[7].type" :label="inputData[7].label" :inputId="inputData[7].inputId" :name="inputData[7].name" :placeHolder="inputData[7].placeholder" />                                                    
                    </div>
                        <InputComponent :type="inputData[8].type" :label="inputData[8].label" :inputId="inputData[8].inputId" :name="inputData[8].name" :placeHolder="inputData[8].placeholder" />                                                    
                        <div class="flex-center input-container verification">
                            <label for="verification">How you want to be verified</label>
                            <select name="verification" id="verification">
                                <option value="regCert">Registration Certificate /Documents</option>
                                <option value="visit">Physical Visit</option>
                                <option value="vat">VAT</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                 
               <JobPosterFormFooter :actionBtnText="btnText" :actionBtnType="btnType" :pageNavigation="pageNavigation"/>
                </form>
               
            </Transition>

            <Transition name="slide-fade">
              <div  v-if="pageNumber==2" class="success-form">

                  <SignupSuccess  :handleRoute="handleHome"/>
              </div>
                
            </Transition>
        </main>
   
</template>

<script>
import InputComponent from '../InputComponent.vue';
import JobPosterFormFooter from './JobPosterFormFooter.vue';
import {jobposterSignupData} from '../../../data'
import SignupSuccess from './SignupSuccess.vue';
export default {
  components: {InputComponent, JobPosterFormFooter, SignupSuccess },
    name: 'JobPostJobPosterForm',

    data() {
        return {
            btnText:'Next',
            btnType:'button',
            inputData:jobposterSignupData
            
        };
    },

    props:[
        'pageNavigation',
        'pageNumber'
    ],

    methods: {        
        handleHome(){
                this.$router.push('/admin/admin')
            }
    },
};
</script>

<style lang="css" scoped>
 form{ gap:19px; }

 form.form-two{
    gap: 5px;
 }
 .success-form{
    position: absolute;
    width: 100%;
    background-color: #f1f1f1;;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
 }
.input-container{
    flex: 1;
    width: 100%;
    column-gap: 49px;
    min-width:200px;
    
    row-gap: 19px;

}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  transition: all .3s;
}

.input-container.verification label{
    color: #666;
    font-size: 14px;
    width: 100%;
    text-align: left;
}
.verification select{
    width: 100%;
    padding: 14px;
    border: 2px solid #7FBF4C;
    border-radius: 5px;
}



@media screen and (max-width:786px) {
.input-container{ column-gap: 30px;}    
}

@media screen and (max-width:600px) {
    .auth-container{
    padding:0;
    background: #fff;
}
.input-container{  flex-wrap: wrap;}
.input-container.pass{ flex-wrap: nowrap;}

}

@media screen and (max-width:480px){
.input-container{
    row-gap: 5px;
    padding: 0px 10px;
}

}
</style>