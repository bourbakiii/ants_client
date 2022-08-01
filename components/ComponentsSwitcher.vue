<template>
  <div class="switch">
    <button @click="$emit('switch', item.import)" class="switch-button" v-for="(item, index) in cases"
            :key="`switcher-${index}`">
      {{ item.name }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    cases: {
      required: true,
      type: Array
    }
  }
}
</script>
