<template>
  <main class="page index-page paddinged">
    <CategoriesSidebar :categories="categories" class="index-page__categories-sidebar non-adaptive"/>
    <CategoriesDropdown :categories="categories" class="index-page__categories-dropdown adaptive"/>
    <div class="index-page__content">
      <Product v-for="product in products" :key='product.id' :product="product"/>
    </div>
  </main>
</template>

<script>
import CategoriesSidebar from "@/components/Categories/Sidebar";
import CategoriesDropdown from "@/components/Categories/Dropdown";
import Product from '@/components/Product';

export default {
  components: {CategoriesSidebar, CategoriesDropdown, Product},
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
      ],
      products: [
        {
          id: 1,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
        },
        {
          id: 2,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
          discount: 300,
        },
        {
          id: 3,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
          discount: 300,
        },
        {
          id: 4,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
        },
        {
          id: 5,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
          discount: 300,
        },
        {
          id: 6,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
        },
        {
          id: 7,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
          discount: 300,
        },
        {
          id: 8,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
        },
        {
          id: 9,
          name: 'какой-то продукт',
          description: "Какое-то неочевидно и крутое описание продукта, которое не должно помещаться в блок, поэтому я еще максимально разбавлю всякой нелепостью, для того чтоьы оно начало занимать больше места",
          price: 1000,
          discount: 300,
        },
      ]
    }
  },
}
</script>
<style lang="scss">
.index-page {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  @include max-md {
    flex-direction: column;
  }

  &__categories-sidebar {
    width: 200px;
    margin-right: 10px;
    flex-shrink: 0;
  }

  &__content {
    flex-grow: 1;
    display: grid;
    background-color: red;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 30px;
  }
}
</style>
