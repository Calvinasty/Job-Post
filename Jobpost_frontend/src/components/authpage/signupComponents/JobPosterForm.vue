<template>         
 
        <main>
            <form class="flex-center">
                <div class=" input-container flex-center-row">
                    <InputComponent :type="inputData[0].type" :label="inputData[0].label" :inputId="inputData[0].inputId" :name="inputData[0].name" :placeHolder="inputData[0].placeholder" />
                    <InputComponent :type="inputData[1].type" :label="inputData[1].label" :inputId="inputData[1].inputId" :name="inputData[1].name" :placeHolder="inputData[1].placeholder" />

                </div>
                <div class="input-container pass  flex-center-row">
                    <InputComponent :type="inputData[2].type" :label="inputData[2].label" :inputId="inputData[2].inputId" :name="inputData[2].name" :placeHolder="inputData[2].placeholder" />
                    <InputComponent :type="inputData[3].type" :label="inputData[3].label" :inputId="inputData[3].inputId" :name="inputData[3].name" :placeHolder="inputData[3].placeholder" />

                </div>
                <div class="input-container flex-center-row">
                    <InputComponent :type="inputData[4].type" :label="inputData[4].label" :inputId="inputData[4].inputId" :name="inputData[4].name" :placeHolder="inputData[4].placeholder" />
                    <InputComponent :type="inputData[5].type" :label="inputData[5].label" :inputId="inputData[5].inputId" :name="inputData[5].name" :placeHolder="inputData[5].placeholder" />

                </div>
                <JobPosterFormFooter :actionBtnText="btnText" :actionBtnType="btnType"/>
            </form>
        </main>
        <!-- <main>
            <form class="flex-center">
                <div class=" input-container flex-center-row">
                    <InputComponent :type="inputData[0].type" :label="inputData[0].label" :inputId="inputData[0].inputId" :name="inputData[0].name" :placeHolder="inputData[0].placeholder" />
                    <InputComponent :type="inputData[1].type" :label="inputData[1].label" :inputId="inputData[1].inputId" :name="inputData[1].name" :placeHolder="inputData[1].placeholder" />

                </div>
                <div class="input-container pass  flex-center-row">
                    <InputComponent :type="inputData[2].type" :label="inputData[2].label" :inputId="inputData[2].inputId" :name="inputData[2].name" :placeHolder="inputData[2].placeholder" />
                    <InputComponent :type="inputData[3].type" :label="inputData[3].label" :inputId="inputData[3].inputId" :name="inputData[3].name" :placeHolder="inputData[3].placeholder" />

                </div>
                <div class="input-container flex-center-row">
                    <InputComponent :type="inputData[4].type" :label="inputData[4].label" :inputId="inputData[4].inputId" :name="inputData[4].name" :placeHolder="inputData[4].placeholder" />
                    <InputComponent :type="inputData[5].type" :label="inputData[5].label" :inputId="inputData[5].inputId" :name="inputData[5].name" :placeHolder="inputData[5].placeholder" />

                </div>
                <JobPosterFormFooter :actionBtnText="btnText" :actionBtnType="btnType"/>
            </form>
        </main> -->
        

   
</template>

<script>
import InputComponent from '../InputComponent.vue';
import JobPosterFormFooter from './JobPosterFormFooter.vue';
export default {
  components: {InputComponent, JobPosterFormFooter },
    name: 'JobPostJobPosterForm',

    data() {
        return {
            btnText:'Next',
            btnType:'button',
            inputData:[
                {
                    placeholder:'Enter Organizations name',
                    label:'Organization Name',
                    name:'name',
                    value:'',
                    inputId:'job-poster-name',
                    type:'text'

                },
                {
                    placeholder:'Enter Organizations email',
                    label:'Organization Email',
                    name:'email',
                    value:'',
                    inputId:'job-poster-email',
                    type:'email'

                },
                {
                    placeholder:'Enter Password',
                    label:'Password',
                    name:'password',
                    value:'',
                    inputId:'job-poster-password',
                    type:'password'

                },
                {
                    placeholder:'Confirm Password',
                    label:'Confirm Password',
                    name:'confirm-password',
                    value:'',
                    inputId:'job-poster-confirm-password',
                    type:'password'

                },
                {
                    placeholder:'Organizations Website',
                    label:'Enter Website URL',
                    name:'website',
                    value:'',
                    inputId:'job-poster-website',
                    type:'text'

                },
                {
                    placeholder:'Enter Organizations name',
                    label:'Organization Name',
                    name:'name',
                    value:'',
                    inputId:'job-poster-nam',
                    type:'text'

                },
            ]
            
        };
    },

    mounted() {
        
    },

    methods: {        
    },
};
</script>

<style lang="css" scoped>
 form{ gap:19px;}
.input-container{
    flex: 1;
    width: 100%;
    column-gap: 49px;
    min-width:200px;
    row-gap: 19px;

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