<template>
    <div class="job-details">
        <div class="flex-center-row describtion job-summary">
           <span class="logo-container">
               <img class="logo"  src="/images/icon_microsoft.svg" alt="">
           </span>
            <div class="flex-center company-info">
                <span class="">
                    <h1>{{ job.job_title }}</h1>
                    <p>{{job.company_name}}</p>
                </span>
                <span class="flex-center-row "  >
                    <p class="location">{{ job.location }}</p>
                    <p class="type">{{job.job_type}}</p>
                    <p class="time-poste">Updated: {{job.updatedAt?.split('T')[0]}}</p>
                </span> 
                <div class="flex-center-row" style="gap:20px">
                    <p>Deadline: {{ job.application_deadline?.split('T')[0] }}</p>
                    <p>{{ job.salary_range }}</p>
                </div>
            </div>

        </div>
        <div class="flex-center describtion job-description">

            <h2>Job Description</h2>
            <p>
                {{ job.job_description }}
            </p>
            <ul>

                <h3>Job Requirement</h3>
                <p>{{ job.requirements }}</p>
                <!-- seperate each requirement eith a special symbole -->
                <!-- <li>Bachelor's degree in Computer Science or related field.</li>
               <li>Proven experience as a software engineer with a strong track record of delivering high-quality software applications.</li>
                <li>Proficient in one or more programming languages such as Java, Python, or C++.</li>
                <li>Experience with software development tools such as Git, JIRA, and Jenkins.</li>
                <li>Familiarity with agile software development methodologies.</li>
                <li>Strong analytical and problem-solving skills.</li>
                <li>Excellent communication and interpersonal skills.</li>
                <li>If you are a driven and innovative software engineer looking for a challenging role in a fast-paced environment, we encourage you to apply for this exciting opportunity.</li> -->
            </ul>
            

        </div>
        <div class="flex-center describtion job-how-to-apply">
            <h2>How to Apply</h2>
            <p>
              {{job.how_to_apply}}
            </p>
        </div>
        <div class="flex-center describtion job-poster-info">
            <h2>Recruiter Details</h2>
            <p> {{ job.name_of_poster }}</p>
            <p>{{ job.role }}</p>
            <p>Microsoft Inc</p>
            <p>{{ job.contact }}</p>
        </div>
        

</div>
</template>

<script>
export default {
    name: 'JobPostJobDescription',

    data() {
        return {
            
        };
    },
    props:['job'],
    mounted() {
        // console.log(this.job);
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

.job-details{
    color: rgba(120, 114, 114, 1);
    /* background: #0000007e; */
    border: 1px solid #9E9E9E;
    border-radius: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 928px;
    width: 100%;
}
.job-summary{
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    width: 100%;
    flex: 1;
    max-width: 928px;
}
.job-summary .logo-container{
    border: 2px solid #898989;
    padding: 12px 15px;
    border-radius: 50%;
}


.company-info{
    width:100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 34px;
    gap: 13px;
}
.job-details :is(h1,h2,h3){
    color: #000000;
    margin-bottom: 10px;
}
.company-info span:last-of-type{
    gap:30px;
}

.job-description,.job-how-to-apply,.job-poster-info{
    border-top: 1px solid #898989;
    justify-content: flex-start; 
    align-items: flex-start;
    text-align: left;
    padding: 20px;
}
h1,h2,h3{
    font-size:18px;
}
.job-description ul{
    margin-top:20px;
    padding-left: 40px;
}
h2{
    font-weight: 700px;
}
ul{
    font-weight:400;
}
.job-poster-info{
    gap:20px;
}
</style>