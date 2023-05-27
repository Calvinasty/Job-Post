<template>         
 
 
     <main >
         <Transition name="slide-fade">
            <form v-if="pageNumber==0" class=" flex-center">
                    <div class=" input-container flex-center-row">
                        <InputComponent class="input" type="text" placeHolder="Organization Name" inputId="jobposter-name" name="name" :handleInput='handleUserInput'  />
                        <InputComponent class="input" type="email" placeHolder="Organization Email" inputId="jopposter-email" name="email" :handleInput='handleUserInput'/>

                    </div>
                    <div class="input-container pass  flex-center-row">
                        <InputComponent class="input" type="password" placeHolder="Enter Password" inputId="jopposter-password" name="password" :handleInput='handleUserInput'  />
                        <InputComponent class="input" type="password" placeHolder="Confirm Password" inputId="jopposter-confirm-password" name="confirmPassword" :handleInput='handleUserInput'  />

                    </div>
                    <div class="input-container flex-center-row">
                        <InputComponent class="input" type="text" placeHolder="Enter Organizations Website" inputId="jopposter-website" name="website" :handleInput='handleUserInput' />
                        <InputComponent class="input" type="" placeHolder="Enter Organizations name" inputId="jopposter-names" name="name" />
                        
                    </div>
                    <JobPosterFormFooter :pageNum="pageNumber" actionBtnText="Next" :actionBtnType="button" :pageNavigation="pageNavigation"/>
                </form>
            </Transition>
       
            <Transition name="slide-fade">
                <form v-if="pageNumber==1" class=" form-two flex-center">
                    <div class="input-container flex-center">
                        <InputComponent class="input" type="file" placeHolder="Company Logo" inputId="jopposter-logo" name="companyLogo" :handleInput='handleUserInput'/>                    
                        <InputComponent class="input" type="tel" placeHolder="Company Number" inputId="jobposter-phone" name="phone" :handleInput='handleUserInput'  />                                                    
                    </div>
                        <InputComponent class="input" type="text" placeHolder="Location" inputId="jobposter-location" name="location" :handleInput='handleUserInput'/>                                                    
                        <div class="flex-center input-container verification">
                            <select name="verification" class="verification input" v-model="verify" v-on:change="()=>handleVerify({verification:verify})"  >
                                <option value="" class="selected" >How do you want to be verified?</option>
                                <option value="regCert">Registration Certificate /Documents</option>
                                <option value="visit">Physical Visit</option>
                                <option value="vat">VAT</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                 
               <JobPosterFormFooter :pageNum="pageNumber" actionBtnText="Register" actionBtnType="submit" :pageNavigation="pageNavigation"/>
                </form>
               
            </Transition>

            <Transition name="slide-fade">
              <div v-if="pageNumber==2"  class="success-form">

                  <SignupSuccess  :handleRoute="handleHome"/>
              </div>
                
            </Transition>
        </main>
   
</template>

<script>
import InputComponent from '../InputComponent.vue';
import JobPosterFormFooter from './JobPosterFormFooter.vue';

import SignupSuccess from './SignupSuccess.vue';
export default {
  components: {InputComponent, JobPosterFormFooter, SignupSuccess },
    name: 'JobPostJobPosterForm',

    data() {
        return {

             
        };
    },

    props:[
        'pageNavigation',
        'pageNumber',
        'btnText',
        'btnType',
        'handleUserInput',
        'handleVerify',
        'userInfo',
        
    ],

    methods: {        
        handleHome(){
                this.$router.push('/admin/admin')
            },
        
            
            
    },
};
</script>

<style lang="css" scoped>
 form{ gap:19px; }

 form.form-two{
    gap: 5px;
 }
 .form-two .input-container{
gap: 10px;
 }
 form .input{
    max-width: 373px;
 }
 .success-form{
    width: 100%;
    background-color: #f1f1f1;;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
.input-container{
    flex: 1;
    width: 100%;
    column-gap: 49px;
    min-width:200px;
    row-gap: 49px;

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

.selected{
    color: #666;
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