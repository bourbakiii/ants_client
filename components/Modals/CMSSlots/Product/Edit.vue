<template>
  <form @submit.prevent="add" class="cms-form">
    <h3 class="cms-form__title">Изменить продукт (тут та же форма что и при добавлении)</h3>
    <InputBlock class="cms-form__input-block" v-model="form.file"
                :properties="{id: 'cms-add-product-image', text:'Изображение', type:'file', name:'image', required:true}"/>
    <InputBlock class="cms-form__input-block" v-model="form.name"
                :properties="{id: 'cms-add-product-name', text:'Название', type:'text', name:'name', required:true}"/>
    <InputBlock class="cms-form__input-block" v-model="form.description"
                :properties="{id: 'cms-add-product-description', text:'Описание', type:'textarea', name:'description', required:true}"/>
    <div class="cms-form__variations">
      <h4 class="cms-form__variations__title">Вариации</h4>
      <div class="cms-form__variations__item" :key="`variation-${index}`"
           v-for="(variation,index) in form.variations">
        <InputBlock class="cms-form__variations__item__input-block" v-model="form.variations[index].name"
                    :properties="{id: `cms-add-product-variation-${index}-name`, text:'Название', type:'text', name:'name', required:true}"/>
        <InputBlock class="cms-form__variations__item__input-block" v-model="form.variations[index].price"
                    :properties="{id: `cms-add-product-variation-${index}-price`, text:'Цена', type:'number', name:'price', required:true}"/>
        <button :disabled="form.variations.length<=1" type="button" @click="removeVariation(index)"
                class="cms-form__variations__item__remove">{{ index }} | Удалить
        </button>
      </div>

      <button @click.prevent="addVariation">Добавить вариацию</button>
    </div>
    <button type="submit" class="cms-form__submit">Добавить</button>
  </form>
</template>
<script>
import InputBlock from "@/components/InputBlock";

export default {
  components: {InputBlock},
  data() {
    return {
      form: {
        file: null,
        name: null,
        description: null,
        loading: false,
        variations: [{name: null, price: null}]
      }
    }
  },
  methods: {
    add() {
      this.loading = true;
      const formData = new FormData();
      formData.append('image', document.getElementById('cms-add-product-image').files[0]);
      formData.append('name', this.form.name);
      formData.append('description', this.form.description);
      formData.append('variations', JSON.stringify(this.form.variations));
      this.$axios.post('/api/products/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).finally(() => {
        this.loading = false;
      })
    },
    addVariation() {
      this.form.variations.push({name: null, price: null})
    },
    removeVariation(variation_index) {
      this.form.variations.splice(variation_index, 1);
    }
  }
}
</script>
<style lang="scss">
.cms-form {
  &__variations {
    &__item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>
