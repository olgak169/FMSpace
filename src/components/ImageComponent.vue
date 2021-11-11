<template>
    <picture v-if="!tech">
      <source :srcset="imageSource.images.webp" type="image/webp">
      <img :src="imageSource.images.png" :alt="imageSource.name" />
    </picture>
    <picture v-else>
        <source media="(min-width: 1040px)" :srcset="imageSource.images.portrait">
        <img 
        :src="imageSource.images.landscape"
        :alt="imageSource.name">
    </picture>
</template>

<script>
export default {
    props: ['imageSource', 'tech']
}
</script>