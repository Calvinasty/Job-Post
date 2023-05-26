<template>
    <div>  
        <ApplicantsDescription
            :applicants="applicants"
        />
    </div>
</template>

<script>
import ApplicantsDescription from './ApplicantsDescription.vue';
export default {
    name: 'JobPostJobsViewComponent',
    components: {
        ApplicantsDescription
    },
    data() {
        return {
            date: "April 1st - May 30th",  
            applicants: [
                {id:1,applicant: 'Kwame Amponsah', role: 'Remote - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Yemi Ogbedengbey', role: 'Remote - Full Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Joseph Atugubah', role: 'Remote - Part Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniel McDan', role: 'Remote - Part Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniel Kofi Tetteh', role: 'On Site - Full Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Prince Tindan', role: 'On Site - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Father Benjamin', role: 'Hybride - Full Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Razark Adams', role: 'Remote - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
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