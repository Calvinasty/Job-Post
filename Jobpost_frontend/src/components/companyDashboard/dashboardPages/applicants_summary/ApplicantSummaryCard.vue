<template>

    <div class="card-1">
        <h2>Work Experience</h2>
        <div v-for="(item, index) in experience" :key="index">
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
        'experience'
      ]  
    }
</script>

<style lang="css" scoped>

.card-1{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:5px;
}
div{
    width: 100%;
    text-align: left;
    font-size: 14px;
}
h3{
    color: rgba(86, 86, 86, 1);
}
p{
    color: rgba(120, 114, 114, 1);
}

</style>