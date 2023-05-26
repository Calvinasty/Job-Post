<template>
    <aside class="nav-item flex-center">
        <button type="button" v-for="navItem in navItems" @click="goto(navItem.link)" :key="navItem">
            <span class="material-symbols-outlined"> {{ navItem.icon }} </span>
            {{ navItem.name }}
        </button>
    </aside>
</template>

<script>
    export default {
        props:[
            "navItems",
            "goto"
        ]
        
    }
</script>

<style lang="css" scoped>
.nav-item {
    width: 100%;
    padding: 5px;
    border: 1px solid rgba(217, 217, 217, 1)
}

.nav-item button {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    outline: none;
    border: none;
    font-size: 15px;
    font-weight: 500;
    color: #666;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    text-align: left;
    background-color: transparent;
    /* border-bottom: 0.5px solid #666; */
    transition: 0.2s ease-in-out;
}

.nav-item button:hover {
    /* box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633); */
    /* background-color: #7FBF4C; */
    background-color: rgba(217, 217, 217, 1);
    color: #000;
    font-weight: bold;
}

.nav-item button span {
    margin-right: 10px;
}
.material-symbols-outlined {
    /* fill: #7FBF4C; */
    color: #88CC00;
}

</style>