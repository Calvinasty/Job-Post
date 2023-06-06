<template>
    <div class="card-3">
        <h2>Education History</h2>
        <div>
            <h3>University of Ghana, Legon</h3> 
            <p>BSc. Administration | 2014-2018</p>
        </div> 
         <div>
            <h3>University of Ghana, Legon</h3>
            <p>BSc. Administration | 2014-2018</p>
        </div>
         <div>
            <h3>University of Ghana, Legon</h3>
            <p>BSc. Administration | 2014-2018</p>
        </div>
         <div>
            <h3>University of Ghana, Legon</h3>
            <p>BSc. Administration | 2014-2018</p>
        </div>
        <div></div>
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
    justify-content: flex-start;
    align-items: flex-start;
    gap:5px;
}
div{
    width: 100%;
    text-align: left;
}
h3{
    color: rgba(86, 86, 86, 1);
}
p{
    color:rgba(120, 114, 114, 1);
}

</style>