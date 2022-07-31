<template>
  <form @submit.prevent="add" class="cms-content">
    <h3 class="cms-content__title">Добавить продукт</h3>
    <InputBlock class="cms-content__input-block" v-model="form.file"
                :properties="{id: 'cms-add-product-image', text:'Изображение', type:'file', name:'image', required:true}"/>
    <InputBlock class="cms-content__input-block" v-model="form.name"
                :properties="{id: 'cms-add-product-name', text:'Название', type:'text', name:'name', required:true}"/>
    <InputBlock class="cms-content__input-block" v-model="form.description"
                :properties="{id: 'cms-add-product-description', text:'Описание', type:'textarea', name:'description', required:true}"/>
    <!--    <InputBlock class="cms-content__input-block" v-model="form.price"-->
    <!--                :properties="{id: 'cms-add-product-price', text:'Цена', type:'number', name:'price', required:true}"/>-->
    <!--    <InputBlock class="cms-content__input-block" v-model="form.price"-->
    <!--                :properties="{id: 'cms-add-product-price', text:'Цена со скидкой', type:'number', name:'price', required:true}"/>-->
    <div class="cms-content__variations">
      <h4 class="cms-content__variations__title">Вариации</h4>
      <div class="cms-content__variations__item" :key="`variation-${index}`"
           v-for="(variation,index) in form.variations">
        <InputBlock class="cms-content__variations__item__input-block" v-model="form.variations[index].name"
                    :properties="{id: `cms-add-product-variation-${index}-name`, text:'Название', type:'text', name:'name', required:true}"/>
        <InputBlock class="cms-content__variations__item__input-block" v-model="form.variations[index].price"
                    :properties="{id: `cms-add-product-variation-${index}-price`, text:'Цена', type:'number', name:'price', required:true}"/>
        <button :disabled="form.variations.length<=1" type="button" @click="removeVariation(index)"
                class="cms-content__variations__item__remove">{{ index }} | Удалить
        </button>
      </div>

      <button @click.prevent="addVariation">Добавить вариацию</button>
    </div>
    <button type="submit" class="cms-content__submit">Добавить</button>
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
        loading: false,
        variations: [{name: null, price: null}]
      }
    }
  },
  methods: {
    add() {
      console.log(JSON.stringify(this.form.variations));
      this.loading = true;
      this.$axios.post('/api/products/create', Object.assign(this.form.variations, {variations: JSON.stringify(this.form.variations)})).finally(() => {
        console.log("Finally");
        this.loading = false;
      })
    },
    addVariation() {
      this.form.variations.push({name: null, price: null})
    },
    removeVariation(variation_index) {
      console.log('variation_index', variation_index)
      this.form.variations.splice(variation_index, 1);
    }
  }
}
</script>
<style lang="scss">
.cms-content {
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
