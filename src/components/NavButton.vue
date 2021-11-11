<template>
  <button @click="handleClick(number)">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'NavButton',
    props: ['number'],
    methods: {
        handleClick(opt) {
            this.$emit('changeNum',opt)
        }
    }
}
</script>