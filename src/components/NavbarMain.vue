<template>
  <header>
      <div class="logo">
          <router-link to="/">
            <img src="../assets/img/shared/logo.svg" alt="logo">
          </router-link>
      </div>
      <div class="mobile-btns" v-if="mobileBtns">
          <button class="mobile-btn menu-close" 
          v-show="menuOpen"
          @click="menuOpen = false"
          aria-label="menu close"></button>
          <button class="mobile-btn menu-open" 
          v-show="!menuOpen"
          @click="menuOpen = true"
          aria-label="menu open"></button>
      </div>
      <transition name="nav-open">
      <nav v-if="menuOpen" class="nav" >
          <transition-group name="nav-links" appear>
              <router-link 
              v-for="(item, index) in navItems" 
              :key="index" 
              :to="{name: item}"
              :style="{'--index': index }">
              <span>0{{ index }}</span>
              {{ item }}</router-link>
          </transition-group>
      </nav>
      </transition>
  </header>
</template>

<script>
export default {
    name: 'NavbarMain',
    data() {
        return {
            menuOpen: false,
            mobileBtns: true,
            navItems: ['home', 'destination', 'crew', 'technology']
        }
    },
     mounted() {
         if (window.innerWidth > 720) {
            this.menuOpen = true
            this.mobileBtns = false
         }
         window.addEventListener('resize', () => {
             if (window.innerWidth > 720) {
                 this.menuOpen = true
                 this.mobileBtns = false
             } else {
                 this.menuOpen = false
                 this.mobileBtns = true
             }
         })
     }
}
</script>