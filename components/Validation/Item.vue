<template>
  <div class="validation-item">
    {{message}}
  </div>
</template>
<script>
export default {
  props: {
    message: {
      required: true,
      type: String
    }
  }
}
</script>
