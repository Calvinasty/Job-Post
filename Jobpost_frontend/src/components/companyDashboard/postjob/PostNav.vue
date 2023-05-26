<template>
    <div>
        <ul>
            <router-link to="" @click="$emit('details')"><li> Details </li></router-link>
            <router-link to="" @click="$emit('jobtype')"><li> JobType </li></router-link>
            <router-link to="" @click="$emit('salary')"><li> Salary Range </li></router-link>
            <router-link to="" @click="$emit('recruiter')"><li> Recruiter Details </li></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        methods:{
        }
    }
</script>

<style lang="css" scoped>
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        padding: 7px;
        border-bottom: 0.5px solid #666;
    }
    ul a{
        text-decoration: none;
        color: #000;
        font-size: 15px;
        font-weight: 600;
    }
</style>