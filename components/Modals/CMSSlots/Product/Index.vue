<template>
  <div class="cms-content product-cms-content">
    <ComponentsSwitcher :cases="component_cases" @switch="switchComponent"/>
    <transition name="switch-transition" mode="out-in">
      <component v-if="component" :is="component"/>
    </transition>
  </div>
</template>
<script>
import ComponentsSwitcher from "@/components/ComponentsSwitcher.vue";

export default {
  components: {
    ComponentsSwitcher
  },
  data() {
    return {
      component_cases: [
        {name: 'Добавить', import: () => import('./Add.vue')},
        {name: 'Изменить', import: () => import('./Edit.vue')}
      ],
      component: null
    }
  },
  async created() {
    this.component = this.component_cases[0].import;
  },
  methods: {
    switchComponent(path = null) {
      this.component = path;
    }
  },
  mounted() {
    console.log()
  }
}
</script>
<style lang="scss">
.switch-transition {
  &-enter {
    transform: translateX(-60px);
    opacity: 0;
  }

  &-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: all .4s;
  }
}

</style>
