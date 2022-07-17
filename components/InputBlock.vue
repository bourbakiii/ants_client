<template>
  <label type="text" :for="`input-block-${properties.id}`" class="input-block"
  >
    <p class="input-block__name">{{ properties.text }}</p>
    <div class="input-block__input-wrapper" :class="{'input-block__input-wrapper_with-digit':properties.phone_mask}"
         digit="+7">
      <input class="input-block__input" :class="{'input-block__input_with-digit':properties.phone_mask}"
             v-mask="properties.phone_mask?'(###) ###-##-##':''"
             @input="$emit('input', $event.target.value)"
             :type="properties.type||'text'"
             :placeholder="properties.phone_mask?'(000) 000 00 00':properties.placeholder"/>
    </div>
  </label>
</template>
<script>
import {VueMaskDirective} from 'v-mask'

export default {
  props: {
    properties: {
      required: true,
      type: Object
    }
  },
  directives: {mask: VueMaskDirective}
}
</script>
<style lang="scss">
.input-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  &__input {
    width: 100%;

    &_with-digit {
      padding-left: 25px;
    }

    &-wrapper {
      position: relative;
      display: flex;

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


