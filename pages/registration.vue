<template>
  <form @submit.prevent="registrate" class="page registration-page">
    <h1 class="registration-page__title">Регистрация пользователя</h1>
    <InputBlock class="registration-page__input-block" v-model="form.name"
                :properties="{text:'Имя', type:'text'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.surname"
                :properties="{text:'Фамилия', type:'text'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.father_name"
                :properties="{text:'Отчество', type:'text'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.phone"
                :properties="{text:'Телефон', type:'text', phone_mask: true}"/>

    <InputBlock class="registration-page__input-block" v-model="form.email"
                :properties="{text:'Email', type:'email'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.password"
                :properties="{text:'Пароль', type:'password'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.password_confirmation"
                :properties="{text:'Повтор пароля', type:'password'}"/>
    <button type="button" @click="$fetch" class="registration-page__submit">Зарегистрироваться</button>
  </form>
</template>
<script>
import InputBlock from "@/components/InputBlock";

export default {
  components: {InputBlock},
  data() {
    return {
      form: {
        name: null, surname: null, father_name: null,
        phone: null,
        email: 'somemail@mail.ru',
        password: null,
        password_confirmation: null
      }
    }
  },
  async fetch(){
    await this.$axios.get('/api/users').then(response => {
      console.log("response is:");
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(console.log("Ended"));
  },
  // methods: {
  //   registrate() {
  //     console.log("Registrate function");
  //     this.$axios.get('/api/users').then(response => {
  //       console.log("response is:");
  //       console.log(response);
  //     }).catch((error) => {
  //       console.log(error);
  //     }).finally(console.log("Ended"));
  //   }
  // }
}
</script>
<style lang="scss">
.registration-page {
  &__input-block {
    width: 300px;
  }

}
</style>
