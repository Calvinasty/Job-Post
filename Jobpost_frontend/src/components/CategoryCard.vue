<template>
    <section class="category-card">
        <img :src="icon" :alt="headText">
        <div class="card-text">
            <h4 >{{ headText }}</h4>
            <p >{{ subText }}</p>

        </div>

   
    </section>
</template>

<script>
export default {
    name: 'JobPostCategoryCard',

    data() {
        return {
            
        };
    },
    props:[
        "icon",
        "headText",
        "subText"
    ]

  
};
</script>

<style lang="css" scoped>
   
.category-card{
    display: flex;
    align-items: center;
    justify-content: flex-start;
   width: 250px;
   padding: 5px;
    height: 120px;
    background: #FFFFFF;
    border: 1px solid #7FBF4C;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #000000;
    column-gap: 20px;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
}
.category-card >img{
    width: 50px;
}

.card-text{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    font-size: 1.2rem;
}
.card-text h4{
    font-weight: 600;
    /* background: #000; */
}

.card-text p{
    font-weight: 200;
    font-size: 1rem;
}
</style>