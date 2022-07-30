<template>
  <button @click="$emit('click')" class="cms-button">
    CMS
  </button>
</template>
<style>
.cms-button {
  position: fixed;
  bottom: 4vh; right:4vw;
  border-radius: 90px;
  width:50px;
  height: 50px;
  border: 2px solid black;
}
</style>
