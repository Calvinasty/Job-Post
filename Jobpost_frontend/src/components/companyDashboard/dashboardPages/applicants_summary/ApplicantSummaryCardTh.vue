<template>
    <div class="card-3">
        <h1>Education History</h1>
        <div v-for="(item, index) in educations" :key="index" >
            <h3>{{item.name}}</h3>
            <p>{{item.type}}</p>
        </div>
        <!-- <div>
            <h3>University of Ghana, Legon</h3>
            <p>BSc. Administration | 2014-2018</p>
        </div>
        <div></div> -->
    </div>
</template>

<script>
    export default {
        props:[
            'educations'
        ]
        
    }
</script>

<style lang="css" scoped>
.card-3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 10px;
    gap: 15px;
    background: green;
    height: fit-content;
    border: 1px solid black;
}
.card-3 h1{
    font-size: 14px;
}
.card-3 div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: rgba(86, 86, 86, 1);
    gap:5px
}

</style>