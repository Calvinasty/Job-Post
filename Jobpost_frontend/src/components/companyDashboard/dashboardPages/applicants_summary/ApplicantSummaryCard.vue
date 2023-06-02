<template>
    <div class="card-1">
        <h1>Work Experience</h1>
        <div v-for="(item, index) in experiences" :key="index" >
            <h3>{{item.role}}</h3>
            <p>{{item.location}}</p>
        </div>
        <!-- <div>
            <h3>UI/UX Designer</h3>
            <p>Zenith Bank | 2017-2022</p>
        </div>
        <div>
            <h3>UI/UX Designer</h3>
            <p>Zenith Bank | 2017-2022</p>
        </div> -->
        
    </div>
</template>

<script>
    export default {
      props:[
        'experiences'
      ]  
    }
</script>

<style lang="
css" scoped>
.card-1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 10px;
    gap: 10px;
    height: fit-content;
    background: red;
    border: 1px solid aqua;
}
.card-1 h1{
    font-size: 14px;
}
.card-1 div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}
.card-1 h3{
    color: rgba(86, 86, 86, 1);
}
.card-1 p{
    color: rgba(120, 114, 114, 1);
}

</style>