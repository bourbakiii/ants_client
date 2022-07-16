<template>
  <footer class="footer paddinged">
    <div class="footer__top">
      <nuxt-img format="webp" src="https://antplanet.ru/assets3/img/logo.png" alt="Логотип сайта" class="footer__logo"/>
      <ul class="footer__links">
        <li class="footer__links__link">
          Ссылка
        </li>
        <li class="footer__links__link">
          Ссылка
        </li>
        <li class="footer__links__link">
          Ссылка
        </li>
        <li class="footer__links__link">
          Ссылка
        </li>
        <li class="footer__links__link">
          Ссылка
        </li>

      </ul>
    </div>
    <div class="footer__middle">
      <span class="footer__bookmark">
        Заказывайте <br>
        c 10:00 до 20:00
      </span>
      <a href="tel:+79855681761" class="footer__phone">+79855681761</a>
      <a href="mailto:vgum@mail.ru">vgum@mail.ru</a>
      <div class="footer__socials">блок вк</div>
    </div>
    <span class="footer__bottom">
      © В голове у мирмикипера {{ new Date().getFullYear() }}г.
    </span>
  </footer>
</template>
<style lang="scss">
.footer {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  height: auto;
  padding-bottom: 30px;


  > * {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    @include max-md{
      align-items: flex-start;
     flex-direction: column;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__top {
    justify-content: flex-start;
  }

  &__middle {
    justify-content: space-between;
  }


  &__logo {
    width: 220px;
    border: 1px solid black;
    flex-shrink: 0;
    margin-right: 10px;
    @include max-md{
      margin: 0 0 10px 0;
    }
  }

  &__links {
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @include max-md{
      align-items: flex-start;
      flex-direction: column;
    }
    &__link {
      margin-right: 10px;
      @include max-md{
        margin: 0 0 10px 0;
      }
      &:last-child {
        margin: 0;
      }
    }
  }

  &__bookmark {
    background-color: green;
    padding: 10px 30px;
    color: white;
    border-radius: 10px;
    clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
    @include max-md{
      margin: 0 0 10px 0;
    }
  }

  &__socials {

    background-color: cornflowerblue;
    color: white;
    padding: 10px;
    @include max-md{
      margin: 10px 0 0;
    }
  }
  &__bottom{
    width:max-content;
    @include max-md{
      align-self: center;
    }
  }
}
</style>

