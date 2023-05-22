<template>
    <div>
        <div class="container">
            <div class="text">
                <h4>Good Morning, Maxim</h4>
                <p>
                    Here is your job listing statictic and report from {{ date }}
                </p>
            </div>
            <div class="date">
                <h5>April 1st - May 30th</h5><span class="material-symbols-outlined">
                    calendar_month
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobPostDashBoardWelcome',

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