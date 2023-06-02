<template>
    <div class="card-2">
        <h1>Skills/Interests</h1>
        <div class="skill">
            <ul v-for="(item, index) in skills" :key="index">
                <!-- <li> <span class="material-symbols-outlined">{{item.icon}}</span> {{item.name}}</li> -->
                <!-- <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'skills'
    ]
}
</script>

<style lang="css" scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.card-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background: blue;
    height: fit-content;
    border: 1px solid teal;
}
.card-2 h1{
    font-size: 14px;
}
.skill {
    /* display: flex;
    flex-direction: column; */
    /* gap: 200px; */
}
.skill ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 15px;
    /* gap: 5px; */
    width: 100%;
    border: 1px solid red;
    margin: 0;
    padding: 0;
}
li {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-bottom: 7px;
    color:rgba(194, 194, 194, 1);
    width: 50%;
    border: 1px solid black;
    
}
span{
    color: rgba(136, 204, 0, 1);
    font-size: 20px;
    margin-right: 5px;
}


</style>