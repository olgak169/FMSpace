<template>
<main class="container container__tech">
  
    <h1 class="heading-5 page-title"><span>03</span> Space launch 101</h1>
    <div class="image-tech">
      <transition name="tech-fade" mode="out-in">
      <Image-component :imageSource="pageData[current]" tech="true" :key="current"/>
      </transition>
    </div>
  
  <div class="content-tech">
    <div class="circle-btns">
      <Nav-button
        v-for="(dot, index) in pageData" 
        :key="index" 
        :number="index" 
        @changeNum="current = $event"
        class="circle-btn"
        :class="{ active: current === index}">
          <span class="circle-btn--span">{{ index + 1 }}</span>
      </Nav-button>
    </div>
    <Article-component>
      <template #titles>
        <p class="subheading-2">The terminology...</p>
        <h2 class="heading-3" >{{ pageData[current].name }}</h2>
      </template>
      <template #text>
        <p class="text-p">{{pageData[current].description}}</p>
      </template>
    </Article-component>
  </div>
</main>
</template>

<script>
import NavButton from '@/components/NavButton.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import ArticleComponent from '@/components/ArticleComponent.vue'
import useData from '@/composables/useData'
export default {
  name: 'Technology',
  components: {
    NavButton,
    ImageComponent,
    ArticleComponent,
  },
  setup() {
    const { current, pageData } = useData('technology')

    return {
      current,
      pageData
    }
  },
  created() {
    document.body.classList.add('technology-page-bg')
  },
  unmounted() {
    document.body.classList.remove('technology-page-bg')
  }
}
</script>