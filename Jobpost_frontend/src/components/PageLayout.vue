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
    gap: 151px;
}
</style>