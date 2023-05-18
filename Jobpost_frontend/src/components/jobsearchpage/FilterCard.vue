<template>
    <div class="filter-card" :class={hide:hideOption}>
        <header @click="toggleDropdown">
          <h3>{{ title }}</h3><img src="/images/dropdown_arrow.svg" alt="arrow">
        </header>
        <div  class="filter-card-body">
             <slot></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'JobPostFilterCard',

    data() {
        return {
            hideOption:true
            
        };
    },
    props:[
        'title',
    ],    

    methods: {
        toggleDropdown(){
            this.hideOption=!this.hideOption
        }
        
    },
};
</script>

<style lang="css" scoped>
.filter-card{
    transition: all .3s ease-in-out;
    padding:0px 22px;
    width: 100%;
    border-bottom: 2px solid rgba(217, 217, 217, 1)
}
.filter-card header{
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    padding: 5px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filter-card img{
    transform: rotate(0deg);
    transition: all .3s ease;
}

.filter-card.hide img{
    transform: rotate(-180deg);
}

.filter-card .filter-card-body{
    overflow: hidden;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
    transition: all .3s ease;
    transition: height .3s ease;
}
.filter-card.hide .filter-card-body{
    height: 0px;
    transition: height .3s ease;
}


/* .filter-card .filter-card-body *{
   
   
} */


</style>