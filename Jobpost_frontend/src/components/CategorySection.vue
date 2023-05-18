<template>
    <div class="category-section">
        <h3 class="category-title">Choose Your Desired <br/> Category</h3>
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
export default {
    name: 'JobPostCategorySection',
    components:{
        CategoryCard
    },
    data() {
        return {
            categoryCardData:[
                {
                    icon:'images/headset_icon.svg',
                    headText:'Technical Support',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                {
                    icon:'images/code_icon.svg',
                    headText:'Software Development',
                    subText:'59 Jobs Available'
                },
                
            ]
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
 .category-section{
        width: 100%;
        max-width: 1460px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap:5rem;
    }
    .category-title{
        font-weight: 800;
        font-size: 90px;
        line-height: 106px;
        text-align: center;
    }
    .category-list{
        display: grid;
        width: 90%;
        align-content: center;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    @media screen and (max-width:480px){
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
        display: grid;
        width: 100%;}
        
    }
    

</style>