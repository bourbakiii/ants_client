<template>
  <form @submit.prevent="registrate" class="page registration-page">

    Loading: {{ loading }}
    <br>
    <h1 class="registration-page__title">Регистрация пользователя</h1>
    <InputBlock class="registration-page__input-block" v-model="form.name"
                :properties="{id: 'registration-name', text:'Имя', type:'text', name:'name'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.surname"
                :properties="{id: 'registration-surname',text:'Фамилия', type:'text', name:'surname'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.father_name"
                :properties="{id: 'registration-father_name',text:'Отчество', type:'text', name:'father_name'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.phone"
                :properties="{id: 'registration-phone',text:'Телефон', type:'text',name:'phone', phone_mask: true}"/>

    <InputBlock class="registration-page__input-block" v-model="form.email"
                :properties="{id: 'registration-email',text:'Email', type:'email',name:'email'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.password"
                :properties="{id: 'registration-password',text:'Пароль', type:'password',name:'password'}"/>

    <InputBlock class="registration-page__input-block" v-model="form.password_confirmation"
                :properties="{id: 'registration-password_confirmation',text:'Повтор пароля', type:'password', name:'password_confirmation'}"/>
    <button class="registration-page__submit">Зарегистрироваться</button>
    <ValidationMessages :messages="validation_messages" class="registration-page__validation-messages"/>
  </form>
</template>
<script>
import InputBlock from "@/components/InputBlock";
import ValidationMessages from "@/components/Validation/Messages";

export default {
  components: {InputBlock, ValidationMessages},
  data() {
    return {
      loading: false,
      form: {
        name: null, surname: null, father_name: null,
        phone: null,
        email: 'somemail@mail.ru',
        password: null,
        password_confirmation: null
      },
      validation_messages: []
    }
  },

  methods: {
    async registrate() {
      this.loading = true;
      this.validation_messages = [];
      await this.$axios.post('/api/users/create', this.form)
        .then(() => {
          this.$router.push("/");
        })
        .catch(({response}) => {
          if (response && response.status === 422) this.validation_messages = response.data.data.errors;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>
<style lang="scss">
.registration-page {
  &__input-block {
    width: 300px;
  }

}
</style>
