<template>
  <Navbar-main />
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
import NavbarMain from '@/components/NavbarMain.vue'
export default {
  components: {
    NavbarMain,
  }
}
</script>
<style lang="scss">
  .page-fade {
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateY(5rem);
    }
    &-enter-active {
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    &-leave-active {
      transition: transform 0.4s ease-in opacity 0.6s ease-in;
    }
  }
</style>
