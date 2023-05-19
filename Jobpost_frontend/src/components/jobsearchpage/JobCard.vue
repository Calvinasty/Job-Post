<template>
    <div class="job-card">
        <header class="flex-center">
            <span>
            <img src="/images/icon_microsoft.svg" alt="company-logo">
            <span class="titles">
                <h3>Job TItle</h3>
                <h4>company name</h4>
            </span>
            <img src="/images/save_job_icon.svg" alt="save job for later">


            </span>
            <div>
                <p>
                    <img src="/images/icon_locationpin.svg" alt="location">
                </p>
                <p></p>
        </div>
        </header>
        <main>

        </main>
        <footer>

        </footer>
    </div>
</template>

<script>
export default {
    name: 'JobPostJobCard',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
    .job-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 429px;
        min-width: 429px;   
        background: #F9F8F8;
        border-radius: 10px;
        padding: 10px;
    }

    .job-card header{
        flex-direction: row;
        width: 100%;
        background: #000;

    }
</style>