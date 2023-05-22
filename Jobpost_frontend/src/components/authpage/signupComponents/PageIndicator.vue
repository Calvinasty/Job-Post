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
            activeClass:[false,false,false]
        }
    },
    props:[
        'isActive'
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
    width: 13px;
    height: 12px;
    border-radius:50%;
    background: #D9D9D9;
    
}
.dot.active{
    background: #7D7474;
}
</style>