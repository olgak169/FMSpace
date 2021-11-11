<template>
  <main class="container container__crew">
    <h1 class="heading-5 page-title"><span>02</span> Meet your crew</h1>
    <div class="image-crew">
      <transition name="crew-fade" mode="out-in" appear>
        <Image-component 
        :imageSource="pageData[current]"
        :tech="false"
        class="image-content"
        :key="current"/>
      </transition>
    </div>
    <div class="dots">
      <Nav-button
        v-for="(dot, index) in pageData" 
        :key="index" 
        :number="index" 
        @changeNum="current = $event" 
        :class="{ active: current === index}"
        class="dot" 
        :aria-label="dot.name" />
    </div>
    <Article-component>
      <template v-slot:titles>
        <h2 class="heading-4">{{ pageData[current].role}}</h2>
        <h3 class="heading-3" >{{ pageData[current].name }}</h3>
      </template>
      <template v-slot:text>
        <p class="text-p">{{pageData[current].bio}}</p>
      </template>
    </Article-component>
  </main>
</template>

<script>
import NavButton from '@/components/NavButton.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import ArticleComponent from '@/components/ArticleComponent.vue'
import useData from '@/composables/useData'
export default {
    name: 'Crew',
    components: {
      NavButton,
      ImageComponent,
      ArticleComponent,
    },
    setup() {
      const { current, pageData } = useData('crew')
      return {
        current,
        pageData
      }
    },
    created() {
    document.body.classList.add('crew-page-bg')
    },
    unmounted() {
      document.body.classList.remove('crew-page-bg')
    }
}
</script>