<template>
    <div class="job-details">
        <div class="flex-center-row describtion job-summary">
            <img class="logo" src="" alt="">
            <div class="flex-center">
                <span>
                    <h1>Software Engineer</h1>
                    <p>company name</p>
                </span>
                <span class="flex-center-row">
                    <p class="location">La de Kotopon</p>
                    <p class="type">Remote</p>
                    <p class="time-poste">2 hours ago</p>
                </span>
            </div>

        </div>
        <div class="flex-center describtion job-description">

            <h2>Job Description</h2>
            <p>
                We are seeking a highly skilled software engineer to join our dynamic team. The successful candidate will be responsible for designing and implementing software solutions that meet customer needs and business objectives. This role requires strong technical skills, attention to detail, and the ability to work independently and in a team environment.
            </p>
            <ul>

                <h3>Responsibilities:</h3>
                Design, develop, and maintain high-quality software applications that meet customer needs and business objectives
                Collaborate with cross-functional teams to identify and solve complex software problems
                Write clean, efficient, and well-documented code
                Participate in code reviews to ensure code quality and consistency
                Continuously improve software development processes and practices
                Stay up-to-date with emerging trends and technologies in software engineering
            </ul>
            

        </div>
        <div class="flex-center describtion job-requirement">
            <h2></h2>
            <ul>
                Bachelor's degree in Computer Science or related field
                Proven experience as a software engineer with a strong track record of delivering high-quality software applications
                Proficient in one or more programming languages such as Java, Python, or C++
                Experience with software development tools such as Git, JIRA, and Jenkins
                Familiarity with agile software development methodologies
                Strong analytical and problem-solving skills
                Excellent communication and interpersonal skills
                If you are a driven and innovative software engineer looking for a challenging role in a fast-paced environment, we encourage you to apply for this exciting opportunity.
            </ul>
        </div>
        <div class="flex-center describtion job-poster-info">
            <h2>Recruiter Details</h2>

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
    props:['currentJob'],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.job-details{
    color: rgba(120, 114, 114, 1);
    background: #000;
    border: 1px solid #9E9E9E;
    border-radius: 20px;
    justify-content: flex-start;
    align-items: flex-start;
}
.job-summary{
    width: 100%;
    flex: 1;
    max-width: 928px;
}
.description{
    border-top: 1px solid #898989;
    justify-content: flex-start; 
}
h2{
    font-weight: 700px;
}
ul{
    font-weight:400;
}
</style>