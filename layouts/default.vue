<template>
  <div class="layout default-layout">
    <Navigation/>
    <nuxt/>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components:{
    Navigation
  }
}
</script>
