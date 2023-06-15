<template>
    <div class="category-section">
        <h3 class="category-title">Choose Your Desired Category</h3>
        <div class="category-list">
            <CategoryCard v-for="(card,i) in categoryCardData" 
            :key="i" 
            :headText="card.headText" 
            :icon="card.icon" 
            :subText="card.subText"/>
        </div>
    </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue';
import {categoryCardData} from '../../data';
export default {
    name: 'JobPostCategorySection',
    components:{
        CategoryCard
    },
    data() {
        return {
            categoryCardData:categoryCardData
        };
    },
};
</script>

<style lang="css" scoped>
    .category-section{
        width: 100%;
        padding: 70px;
        max-width: 1728px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap:5rem;
    }
    .category-title{
        /* font-weight: 100%; */
        font-size: 35px;
        /* background-color: blue; */
        /* line-height: 106p4; */
        text-align: center;
    }
    .category-list{
        display: grid;
        width: 90%;
        align-content: center;
        justify-items: center;
        grid-template-columns: repeat(4,1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
        gap: 1rem;
    }

    
    @media screen and (max-width:1121px){
        .category-list{
            width: 100%;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            
        }
    }
    @media screen and (max-width:700px){
        .category-section{
            display: none;
    }
        
    }

    @media screen and (max-width:662px) {
        .category-title{
            font-size: 40px;
        line-height: 36px;
        }
        .category-list{
        width: 100%;}
        
    }
    

</style>