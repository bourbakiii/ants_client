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
        <button @click="show_login=!show_login" class="navigation__bottom__authorization__login">Войти</button>
        <NuxtLink to="/registration" class="navigation__bottom__authorization__registration">Регистрация</NuxtLink>
      </div>
      <div class="navigation__bottom__left adaptive">
        <a href="tel:+79855681761" class="navigation__bottom__phone">Т</a>
        <a href="mailto:vgum@mail.ru" class="navigation__bottom__email">E</a>
      </div>
      <div class="navigation__bottom__right adaptive">
        <button @click="show_login=!show_login" class="navigation__bottom__login">L</button>
        <NuxtLink class="navigation__bottom__registration" to="registration">R</NuxtLink>
      </div>
    </div>
    <form v-click-outside v-if="show_login" @submit.prevent="login" class="navigation__login-form">
      <p class="navigation__login-form__title">Войти</p>
      <InputBlock class="navigation__login-form__email"
                  :properties="{id: 'login-form-email', placeholder: 'Email',type:'email'}"/>
      <InputBlock class="navigation__login-form_password"
                  :properties="{id: 'login-form-password', placeholder: 'Пароль',type:'password'}"/>
      <button class="navigation__login-form__submit">Войти</button>
    </form>
  </header>
</template>
<script>
import InputBlock from "@/components/InputBlock";

export default {

  components: {InputBlock},
  data() {
    return {
      show_login: false
    }
  },
  directives: {
    'click-outside': {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = (event) => {
          if (!(el == event.target || el.contains(event.target))) {
            this.show_login = false;
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
      }
    },
    unbind(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  },
  methods: {
    login() {
      console.log("Login function");
    }
  }
}
</script>
<style lang="scss">
.navigation {
  position: relative;
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

  &__login-form {
    position: absolute;
    right: 0;
    top: 100%;
    padding: 10px;
    background-color: white;
    filter: drop-shadow(0px 0px 4px rgba(black, .5));
    border-radius: 5px;
  }
}
</style>
