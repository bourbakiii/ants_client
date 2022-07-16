<template>
  <div class="categories-dropdown">
    <h2 @click="show_dropdown=!show_dropdown" class="categories-dropdown__title">Категории</h2>
    <button v-if="show_dropdown" class="categories-dropdown__category" v-for="category in categories"
            :key="category.id">
      {{ category.name }}
    </button>
  </div>
</template>
<script>

import commoned from "./commoned.js";

export default {
  mixins: [commoned],
  data() {
    return {
      show_dropdown: false
    }
  },
}
</script>
<style lang="scss">
.categories-dropdown {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  &__title {
    display: flex;
    flex-display: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    color: white;
    background-color: green;
    font-weight: 1000;
  }

  &__content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
}
</style>
