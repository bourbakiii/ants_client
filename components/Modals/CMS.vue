<template>
  <div class="cms-modal">
    <div class="cms-modal__tabs">
      <button type="button" @click="switchTabOn('Product')"
              :class="{'cms-modal__tabs__item_active': current_tab_name==='Product'}" class="cms-modal__tabs__item">
        Продукт
      </button>
      <button type="button" @click="switchTabOn('Category')"
              :class="{'cms-modal__tabs__item_active': current_tab_name==='Category'}" class="cms-modal__tabs__item">
        Категория
      </button>
      <button type="button" @click="switchTabOn('New')"
              :class="{'cms-modal__tabs__item_active': current_tab_name==='New'}" class="cms-modal__tabs__item">Новость
      </button>
      <button type="button" @click="switchTabOn('Stock')"
              :class="{'cms-modal__tabs__item_active': current_tab_name==='Stock'}" class="cms-modal__tabs__item">Акция
      </button>
    </div>
    <transition name="opacity" mode="out-in">
      <component v-if="component" :is="component" class="cms-modal__content"/>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current_tab_name: 'Product',
      component: () => import('../Modals/CMSSlots/Product/Index.vue')
    }
  },
  methods: {
    switchTabOn($$tab_name) {

      if ($$tab_name === 'Product') $$tab_name = 'Product/Index';


      this.current_tab_name = $$tab_name;
      this.component = () => import(`../Modals/CMSSlots/${this.current_tab_name}.vue`);
    }
  }
}
</script>
<style lang="scss">
.cms-modal {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &__tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-self: center;
    margin-bottom: 30px;

    &__item {
      margin-right: 30px;
      height: 40px;
      padding: 0 10px;
      border-radius: 5px;

      &_active {
        background-color: rgba(0, 0, 0, .2);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__content {
    width: 100%;
    border: 1px solid black;
    padding: $page_padding_mobile;
  }
}
</style>
