<template>
  <div class="layout default-layout">
    <Navigation/>
    <nuxt/>
    <Footer/>
    <client-only>
    <transition name="opacity" appear>
      <ModalsWrapper v-if="show_modals_wrapper"/>
    </transition>
    <transition name="opacity" appear>
      <CMSButton @click="openCMS" />
    </transition>
    </client-only>
  </div>
</template>
<script>

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import ModalsWrapper from "@/components/Modals/Wrapper.vue";
import CMSButton from "@/components/CMSButton.Vue"

export default {
  data(){
    return {
      openCMS: ()=>this.$store.commit('modals/open',{modal_name: 'CMS', additional_fields:{first:1,second:3}})
    }
  },
  components: {
    Navigation, Footer, ModalsWrapper, CMSButton
  },
  computed: {
    show_modals_wrapper() {
      for (let object of Object.values(this.$store.state.modals))  if (object.show) return true;
      return false;
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/transitions.scss";
</style>
