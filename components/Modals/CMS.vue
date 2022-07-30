<template>
  <div class="cms-modal">
    Продукт | Категория | Новость | Акция
    <br>
    Добавить продукт
    <img src="" alt="">
    <input type="file"><input type="text"><input type="text"><input type="text">
    <button>Добавить</button>
    <br/>
    Добавить категорию
    <img src="" alt="">
    <input type="text"><input type="text"><input type="text"><input type="text">
    <button>Добавить</button>
    <br/>
    Новость <img src="" alt="">
    <textarea placeholder="HTML разметка"/>
    <button @click.prevent="$store.commit('modals/open', {modal_name:'Product'})">Добавить</button>
  </div>
</template>
<style lang="scss">
.cms-modal {
  background-color: white;
  padding: 10px;
}
</style>
