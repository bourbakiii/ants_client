<template>
  <label type="text" :for="`input-block-${properties.id}`" class="input-block">
    <p v-if="properties.text" class="input-block__name">{{ properties.text }}</p>
    <div class="input-block__input-wrapper" :class="{'input-block__input-wrapper_with-digit':properties.phone_mask}"
         digit="+7">
      <input v-if="properties.type!=='textarea'" class="input-block__input"
             :class="{'input-block__input_with-digit':properties.phone_mask}"
             :required="properties.required"
             v-mask="properties.phone_mask?'(###) ###-##-##':''"
             :value="value" @input="updateValue"
             :type="properties.type||'text'"
             :name="properties.name"
             :placeholder="properties.phone_mask?'(000) 000 00 00':properties.placeholder"/>
      <textarea v-else class="input-block__input"
                :required="properties.required"
                :value="value" @input="updateValue"
                :name="properties.name"
                :cols="properties.cols||30"
                :rows="properties.rows||10"
                :placeholder="properties.placeholder||null"/>
    </div>
  </label>
</template>
<script>
import {VueMaskDirective} from 'v-mask'

export default {
  props: {
    value: {
      required: true,
      default: null
    },
    properties: {
      required: true,
      type: Object
    }
  },
  directives: {mask: VueMaskDirective},
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  mounted() {
    console.log(this);
  }
}
</script>
<style lang="scss">
.input-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  background-color: red;

  &__name {
    width: 30%;
    padding-right: 10px;
    flex-shrink: 0;
  }

  &__input {
    width: 100%;
    max-width: 100%;

    &:is(textarea) {
      min-height: 30px !important;
      max-height: 300px !important;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 100% !important;
    }

    &_with-digit {
      padding-left: 25px;
    }

    &-wrapper {
      position: relative;
      display: flex;
      width: 100%;

      &_with-digit {
        &::before {
          position: absolute;
          top: 50%;
          left: 5px;
          content: attr(digit);
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>


