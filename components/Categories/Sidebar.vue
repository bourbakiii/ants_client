<template>
  <aside class="categories-sidebar">
    <button class="categories-sidebar__category" v-for="category in categories" :key="category.id">{{ category.name }}
    </button>
  </aside>
</template>
<script>
import commoned from "./commoned.js";

export default {
  mixins: [commoned],
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>
<style lang="scss">
.categories-sidebar {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid black;
  flex-direction: column;
  max-width: 200px;
  height: auto;

  &__category {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
