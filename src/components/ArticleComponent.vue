<template>
  <article class="info-content">
      <slot name="titles"></slot>
      <slot name="text"></slot>
  </article>
</template>

<script>
export default {
    name: 'ArticleComponent',
}
</script>