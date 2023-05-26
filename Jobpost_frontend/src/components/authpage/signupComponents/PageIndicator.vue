<template>
     <div class="dots">
        <span class="dot" :class="{active:activeClass[0]}"></span>
        <span class="dot" :class="{active:activeClass[1]}"></span>
        <span class="dot" :class="{active:activeClass[2]}"></span>
    </div>
</template>
<script>
export default {
    data() {
        return{
          
        }
    },
    props:[
        'activeClass'
    ],
    methods:{
      
       
    }
}
</script>
<style lang="css" scoped>
.dots{
    position:absolute;
    bottom:0;
    left:50%;
    width:40px;
    height: 20px;
    transform: translateX(-50%);
    display: flex;
    gap:5px;
}
.dot{
    display: flex;
    width: 15px;
    height: 12px;
    border-radius:100%;
    background: #D9D9D9;
    
}
.dot.active{
    background: #7D7474;
}
</style>