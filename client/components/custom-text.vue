<template>
  <p>{{value.text}}</p>
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
