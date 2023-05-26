<template>
    <div>
        <ul>
            <router-link ><li> Details </li></router-link>
            <router-link ><li> JobType </li></router-link>
            <router-link ><li> Salary Range </li></router-link>
            <router-link ><li> Recruiter Details </li></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
</style>