<template>
  <div class="product product-desktop">
    <img src="https://antplanet.ru/img/goods/239.8c1f119e4afd3dc5c58b4c375fbdb324.mid.jpg"
         :alt="`Изображение товара ${product.name}`"
         class="product-desktop__image">
    <p class="product-desktop__name">{{ product.name }}</p>
    <p class="product-desktop__description">{{ product.description }}</p>
    <div class="product-desktop__prices">
      <span v-if="product.discount" class="product-desktop__price">{{ product.price }}₽</span>
      <span class="product-desktop__discount-price">{{ product.price - (product.discount || 0) }}₽</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true
    }
  }
}
</script>
<style lang="scss">
.product-desktop {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;

  > *:not(img) {
    padding: 0 10px;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__image {
    max-width: 100%;
    height: 222px;
    object-fit: contain;
  }

  &__name {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
  }

  &__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
  }

  &__prices {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &__price {
    margin-right: 10px;
  }
}
</style>
