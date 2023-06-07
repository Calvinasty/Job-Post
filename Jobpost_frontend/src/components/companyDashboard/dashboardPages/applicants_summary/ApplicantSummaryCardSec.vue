<template>
    <div class="card-2">
        <h2>Skills/Interests</h2>
             <ul class="skill">
                 <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> SQL</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
                <li> <span class="material-symbols-outlined">task_alt</span> JavaScript</li>
            </ul>
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

.card-2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

}
.skill{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  color: rgba(120, 114, 114, 1);

}
.skill li{
    list-style: none;
    display: flex;
    /* background: #000; */
    text-align: left;   
    justify-content: flex-start; 
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
}
.skill span{
    color: rgba(136, 204, 0, 1);
}

</style>