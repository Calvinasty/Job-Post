<template>
      <div class="filter-card-wrapper location-filter">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15881.869081054127!2d-0.249435!3d5.645326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9eb2725c769f%3A0x6e56e102246ca516!2sMaxim%20Nyansa%20IT%20Solutions!5e0!3m2!1sen!2sgh!4v1684459328788!5m2!1sen!2sgh" width="250" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <button @click.prevent="handleFilter" class="flex-cente-row apply-filter-btn" >
            Apply
            <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
        </button>
        </div>
</template>

<script>

export default {
    name: 'JobPostLocationFilter',
    components:{
      
    },

    data() {
        return {
          
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.location-filter{
    justify-content: flex-start;
}
  
    
</style>