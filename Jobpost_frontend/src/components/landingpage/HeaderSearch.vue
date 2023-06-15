<template>
    <div class="searchbar">
        <HeaderSearchInput class="first" type='textFilter' />
        <HeaderSearchInput class="second" type='filterType' />
        <HeaderSearchInput class="third" type='filterLocation'/>
        <span class="fourth">
            <button>Search</button>
        </span>
    </div>
</template>

<script>
    import HeaderSearchInput from './HeaderSearchInput.vue';
    export default {
        components:{HeaderSearchInput}
    }
</script>

<style lang="css" scoped>
    .searchbar{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        background-color: #fff;
        padding: 20px;
        width: 70%;
        border-radius: 10px;
    }
    .searchbar .first, .searchbar .second{
        border-right: 2px solid;
    }
    .searchbar .first{ width: 40%;}
    .searchbar .second{ width: 20%; padding-right: 10px;}
    .searchbar .third{ width: 20%; padding-right: 10px;}
    .searchbar .fourth{ width: 20%; 
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: brown; */
    }
    .fourth button{
        width: 90%;
        height: 80%;
        background-color: #000;
        color: #f1f1f1;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 10px;
    }
</style>