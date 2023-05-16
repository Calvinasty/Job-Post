<template>
  <div class="regflow-card">
    <img :src="icon" :alt="regText">
    <h3>{{regText }}</h3>
  </div>
</template>

<script>
export default {
    props:[
        'icon',
        'regText'
    ]
}
</script>

<style lang="css" scoped>
.regflow-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 196px; */
    width: fit-content;
    height: 200px;
    /* background: #000; */
    row-gap: 10px;
}

.regflow-card h3{
  width: 100%;
  text-align: center;
  font-weight: 700;
  line-height: 29px;
  color: #FFFFFF;
}

@media screen and (max-width:788px) {
  .regflow-card img{
    width:50%;
    height: auto;
  }
  .regflow-card h3{
    font-size: 14px;
    line-height: normal;
  }
  
}
@media screen and (max-width:661px) {

  .regflow-card h3{
    font-size: 8px;
    line-height: normal;
  }
  
}



</style>