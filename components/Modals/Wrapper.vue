<template>
  <div @click.self="close" class="modals-wrapper">
    <transition name="content-swipe-transition" mode="out-in" appear>
    <component v-if="component" :is='component' class="modals-wrapper__content"/>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      close: () => this.$store.commit('modals/closeAll'),
    }
  },
  computed:{
    component(){
      let final_key = null
      for (let key in this.$store.state.modals)
        if (this.$store.state.modals[key].show === true) {
          final_key = key;
          break;
        }
      return final_key === null ? null :()=> import(`../Modals/${final_key}.vue`);
    }
  },
  created(){

  },
  mounted() {
    // document.lastChild.classList.add("ovh");
  },
  destroyed() {
    // document.lastChild.classList.remove("ovh");
  },

}
</script>
<style lang="scss">
.content-swipe-transition{
  &-enter{
    transform: translateY(-50px);
    opacity: 0;
  }
  &-leave-to{
    transform: translateY(50px);
    opacity: 0;
  }
  &-enter-active, &-leave-active{
    transition: all $transition ease;
  }
}
.modals-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  z-index: $z_modals;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
  cursor: pointer;

  &__content {
    max-width: $maxwidth;
    width: 100%;
    height: 3000px !important;
    cursor: default;
    padding: $page_padding;
    border-radius: 5px;
  }
}

</style>
