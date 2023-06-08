<template>
    <section class="category-card" @click="handleCategory">
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
    methods:{
        handleCategory(){
            this.$router.push('/jobsearch')
        }
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
    justify-content:center;
   width: 100%;
   padding: 0px 5px;
    height: 120px;
    background: #FFFFFF;
    border: 1px solid #7FBF4C;
    border-radius: 10px;
    color: #000000;
    column-gap: 15px;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
.category-card:hover{
    background:rgba(136, 204, 0, 1);
    color:#FFFFFF;
    transition: all .3s ease-in-out;
}
.category-card img{
    width: 50px;

}
.category-card:hover img{
    filter:  brightness(0) invert(1);
    transition: all .2s ease-in-out;
}
.card-text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;
    font-size: 1.2rem;
    text-align: left;
}
.card-text h4{
    width: fit-content;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    /* background: #000; */
}
.card-text p{
    font-weight: 200;
    font-size: 1rem;
}
</style>