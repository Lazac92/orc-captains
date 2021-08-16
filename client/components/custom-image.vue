<template>
  <img :src="getBestImageSrc(value.image.formats)" />
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
  img {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
