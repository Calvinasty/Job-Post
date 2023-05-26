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
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'Backend Developer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'Frontend Developer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
                {description: 'UI/UX Designer', role: 'Remote', requirements:'Intern', location:'Ghana'},
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