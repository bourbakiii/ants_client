<template>
  <aside class="categories-sidebar">
    <button class="categories-sidebar__category" v-for="category in categories" :key="category.id">{{ category.name }}
    </button>
  </aside>
</template>
<script>

export default {
  data() {
    return {
      categories: [
        {id: 1, name: "Первая категория"},
        {id: 2, name: "Вторая категория"},
        {id: 3, name: "Третья категория"},
        {id: 4, name: "Четвертая категория"},
        {id: 5, name: "Пятая категория"},
        {id: 6, name: "Шестая категория"},
        {id: 7, name: "Седьмая категория"}
      ]
    }
  }
}
</script>
<style lang="scss">
.categories-sidebar {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;,kn+

  flex-direction: column;

}
</style>
