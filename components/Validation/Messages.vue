<template>
  <transition-group name="validation-messages-transition" appear mode="out-in" tag="div" class="validation-messages">
    <ValidationItem v-for="(message, index) in messages" :key="`${index}|${message.name}`" :message="message.message"/>
  </transition-group>
</template>
<script>
import ValidationItem from "@/components/Validation/Item.vue"

export default {
  props: {
    messages: {
      required: true,
      type: Array
    }
  },
  components: {ValidationItem}
}
</script>
<style lang="scss">
.validation-messages {


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: 1px solid black;


  &-transition {
    &-enter, &-leave-to {
      opacity: 0;
    }

    &-enter-active, &-leave-active {
      transition: $transition;
      position: absolute;
    }

    &-move {
      transition: all $transition ease;
    }
  }
}
</style>

