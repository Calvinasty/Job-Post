<template>
    <div class="card-2">
        <h1>Skills/Interests</h1>
        <div class="skill">
            <ul>

                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
            </ul>

            <ul>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.card-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}
.card-2 h1{
    font-size: 14px;
}
.skill {
    display: flex;
    flex-direction: row;
    gap: 200px;
}
.skill ul {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    gap: 5px;
}
li {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 10px;
    color:rgba(194, 194, 194, 1)
}
span{
    color: rgba(136, 204, 0, 1);
    font-size: 20px;
    /* padding: 1px; */
}


</style>