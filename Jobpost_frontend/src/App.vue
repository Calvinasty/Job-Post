<script setup>

</script>

<template>
  <div>
    <RouterView :key="key" />
  </div>
</template>
<script>
// resolve routing issues
export default {
  computed:{
    key(){
      return this.$route.params + Math.random()
    }
  }
}
</script>

<style scoped></style>
