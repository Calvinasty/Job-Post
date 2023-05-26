<template>
    <div>  
        <JobsDescriptionComponent
            :myjobs="jobs"
        />
    </div>
</template>

<script>
import JobsDescriptionComponent from './JobsDescriptionComponent.vue';
export default {
    name: 'JobPostJobsViewComponent',
    components: {
        JobsDescriptionComponent,
    },
    data() {
        return {
            date: "April 1st - May 30th",  
            jobs: [
                {description: 'UI/UX Designer', role: 'Remote - Intern', experience:'2 years', location:'Ghana'},
                {description: 'Backend Developer', role: 'On Site - Full Time', experience:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote - Part Time',experience:'5 years', location:'Ghana'},
                {description: 'Full Stack', role: 'On Site - Full Time ', experience:'5 years', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', experience:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'On Site - Intern', experience:'1 year', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Hybride - Full Time', experience:'2 years', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'On Site - Intern', experience:'1 year', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote - Intern', experience:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', experience:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', experience:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', experience:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'On Site - Intern', experience:'1 year', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Hybride - Full Time', experience:'2 years', location:'Ghana'},
                {description: 'Frontend Developer', role: 'Remote - Part Time',experience:'3 years', location:'Ghana'},

                
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
.container{
    display: flex;
    flex-direction: row;
    gap: 50%;
    padding-top: 80px;
}
.text{
    padding-left: 40px;
}
.text p {
    color: #9C9595;
    font-size: 15px;
}
.date{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 5px;
    border: 3px solid #88CC00;
}
.date span{
    color: #88CC00;
}

</style>