<template>
  <form @submit.prevent="logIn" class="login-form form dropdown">
    <p class="login-form__title">Войти</p>
    <InputBlock class="login-form__email"
                v-model="form.email"
                :properties="{id: 'login-form-email', placeholder: 'Email',type:'email',name:'email',text:'Email'}"/>
    <InputBlock class="login-form_password"
                v-model="form.password"
                :properties="{id: 'login-form-password', placeholder: 'Пароль',type:'password',name:'password', text:'Пароль'}"/>
    <button class="login-form__submit">Войти</button>
    <ValidationMessages :messages="validation_errors" class="login-form__validation-messages"/>
  </form>
</template>

<script>
import ValidationMessages from "@/components/Validation/Messages.vue";
import InputBlock from "@/components/InputBlock.vue";
import UserService from "@/services/User.js";

export default {
  components: {InputBlock, ValidationMessages},
  directives: {},
  data() {
    return {
      loading: false,
      validation_errors: [],
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async logIn() {
      this.loading = true;
      this.validation_errors = [];
      await this.$axios.post("/api/users/login", this.form)
        .then(({data: {data: {user}}}) => {
          UserService.login(user);
          this.$emit('close');
        })
        .catch(({response}) => {
          if (response) {
            if (response.status === 422) this.validation_errors = response.data.data.errors;
            else if (response.status === 401) this.validation_errors = [{
              name: "password",
              message: response.data.data.message
            }];
          }
        })
        .finally(() => this.loading = false);
    }
  }

}
</script>
<style lang="scss">
.login-form {
  padding: 10px;
  background-color: white;
  filter: drop-shadow(0px 0px 4px rgba(black, .5));
  border-radius: 5px;
}
</style>
