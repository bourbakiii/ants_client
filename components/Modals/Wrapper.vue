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
  computed: {
    component() {
      for (let key in this.$store.state.modals) if (this.$store.state.modals[key].show === true) return () => import(`../Modals/${key}.vue`)
      return null;
    }
  },
  mounted() {
    document.lastChild.classList.add("ovh");
  },
  destroyed() {
    document.lastChild.classList.remove("ovh");
  }
}
</script>
<style lang="scss">
.content-swipe-transition {
  &-enter {
    transform: translateY(-80px);
    opacity: 0;
  }

  &-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: all .5s ease;
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
  padding: 10vh 0;
  cursor: pointer;
  overflow-y: overlay;
  &__content {
    max-width: $maxwidth;
    width: 100%;
    min-height: 100%;
    cursor: default;
    padding: $page_padding;
    border-radius: 5px;
  }
}

</style>
