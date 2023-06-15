<template>
    <div class="LP-Layout">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.LP-Layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 50px; */
    width: 100%;
    scroll-behavior: smooth;
}
</style>