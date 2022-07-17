<template>
  <header class="navigation">
    <div class="navigation__top paddinged">
      <svg class="navigation__top__burger adaptive" width="30px" height="30px">
        <use xlink:href="@/assets/sprites.svg#burger"></use>
      </svg>
      <!--    src="https://antplanet.ru/assets3/img/logo.png" -->
      <nuxt-img format="webp" alt="Логотип" src="src" class="navigation__top__logotype"/>
      <a href="tel:+79855681761" class="navigation__top__phone non-adaptive">+79855681761</a>
      <div class="navigation__top__times non-adaptive">
        <p class="navigation__top__time">10:00 - 20:00</p>
        <p class="navigation__top__time__aft">Ежедневно</p>
      </div>
      <div class="navigation__top__cart non-adaptive">
        <NuxtLink class="navigation__top__cart__link" to="/cart">К корзине:</NuxtLink>
        <p class="navigation__top__cart__count">0 товаров на сумму</p>
        <p class="navigation__top__cart__summ">0руб.</p>
      </div>
      <svg class="navigation__top__cart_adaptive adaptive" width="30px" height="30px">
        <use xlink:href="@/assets/sprites.svg#basket"></use>
      </svg>
    </div>
    <div class="navigation__bottom paddinged">
      <div class="navigation__bottom__search non-adaptive">
        <input placeholder="Поиск по товарам" type="text" class="navigation__bottom__search__input"/>
        <button class="navigation__bottom__search__button">S</button>
      </div>
      <nav class="navigation__bottom__links non-adaptive">
        <NuxtLink class="navigation__bottom__links__link" to="">Первая</NuxtLink>
        <NuxtLink class="navigation__bottom__links__link" to="">Вторая</NuxtLink>
        <NuxtLink class="navigation__bottom__links__link" to="">Третья</NuxtLink>
        <NuxtLink class="navigation__bottom__links__link" to="">Четвертая</NuxtLink>
      </nav>
      <div class="navigation__bottom__authorization non-adaptive">
        <button class="navigation__bottom__authorization__login">Войти</button>
        <NuxtLink to="/registration" class="navigation__bottom__authorization__registration">Регистрация</NuxtLink>
      </div>
      <div class="navigation__bottom__left adaptive">
        <a href="tel:+79855681761" class="navigation__bottom__phone">Т</a>
        <a href="mailto:vgum@mail.ru" class="navigation__bottom__email">E</a>
      </div>
      <div class="navigation__bottom__right adaptive">
        <button class="navigation__bottom__login">L</button>
        <NuxtLink class="navigation__bottom__registration" to="registration">R</NuxtLink>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.navigation {
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__top {
    width: 100%;
    height: 97px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;


    &__logotype {
      height: auto;
      max-height: 100%;
      width: 220px;
      border: 1px solid black;
    }

    &__times {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    &__cart {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &__bottom {
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 $page_padding;
    @include max-md {
      padding: 0 $page_padding_mobile;
    }

    &__search {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      &__input {
        height: 100%;
      }

      &__button {
        height: 100%;
        width: 34px;
      }
    }

    &__authorization {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
