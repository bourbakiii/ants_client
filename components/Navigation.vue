<template>
  <header class="navigation">
    <nuxt-img format="webp" alt="Логотип" src="https://antplanet.ru/assets3/img/logo.png" class="navigation__logotype"/>
    <a href="tel:+79855681761" class="navigation__phone">+79855681761</a>

    <div class="navigation__times">
      <p class="navigation__time">10:00 - 20:00</p>
      <p class="navigation__time__aft">Ежедневно</p>
    </div>
    <div class="navigation__cart">
      <NuxtLink class="navigation__cart__link" to="/cart">К корзине:</NuxtLink>
      <p class="navigation__cart__count">0 товаров на сумму</p>
      <p class="navigation__cart__summ">0руб.</p>
    </div>
  </header>
</template>
<style lang="scss">
.navigation {
  width: 100%;
  height: 97px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 $page_padding;

  &__logotype {
    height: auto;
    max-height: 100%;
    width: 220px;
    border: 1px solid black;
  }
  &__times{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &__cart{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
