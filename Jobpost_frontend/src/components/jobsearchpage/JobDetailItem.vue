<template>
   <div class="job-detail-item flex-center-row">
                <p>
                    <img :src="detailIcon" :alt="detailName">
                </p>
                <p>{{ detailText}}</p>
             </div>
</template>

<script>
export default {
    name: 'JobPostJobDetailItem',

    data() {
        return {
            
        };
    },
    props:[
        'detailName',
        'detailIcon',
        'detailText'

    ],
    methods: {
        
    },
};
</script>

<style lang="css" scoped>
 .job-detail-item{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 5px;
        font-size: 12px;
    }
  
</style>