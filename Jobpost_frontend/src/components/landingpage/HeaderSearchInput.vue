<template>
    <span>
        <label for="location">{{title}}</label>
        <input :type="type" :placeholder="placeholder">
    </span>
</template>

<script>
    export default {
        props:[
            "title",
            "placeholder",
            "type"
        ]
    }
</script>
<style lang="css" scoped>
    @import '../../assets/landing_assets/headerComponent.css';
</style>