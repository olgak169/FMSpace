<template>
  <main class="container container__destination">
    <h1 class="heading-5 page-title"><span>01</span> Pick your destination</h1>
    <section class="tabs" aria-label="page navigation">
        <Nav-button 
        v-for="(planet, index) in pageData" 
        :key="index" 
        :number="index" 
        @changeNum="current = $event" 
        :class="{ active: current === index}"
        class="tab subheading-2">
          <span>{{ pageData[index].name }}</span>
        </Nav-button>
    </section>
    <transition name="planet-fade" mode="out-in">
      <Image-component 
        :imageSource="pageData[current]" 
        :tech="false"
        class="image-content"
        :key="current"/>
    </transition>
    <Article-component>
      <template #titles>
        <h2 class="heading-2" >{{ pageData[current].name }}</h2>
        <p class="text-p">{{ pageData[current].description }}</p>
      </template>
      <template #text>
        <section class="details-content">
          <div class="details-distance">
            <h3 class="subheading-2">Avg. distance</h3>
            <p class="subheading-1">{{ pageData[current].distance }}</p>
          </div>
          <div class="details-time">
            <h3 class="subheading-2">Est. travel time</h3>
            <p class="subheading-1">{{ pageData[current].travel }}</p>
          </div>
        </section>
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
    name: 'Destination',
    components: { 
      NavButton, 
      ImageComponent,
      ArticleComponent, 
    },
    setup() {
      const { current, pageData } = useData('destinations')

      return {
        current,
        pageData
      }
    },
    created() {
      document.body.classList.add('destination-page-bg')
    },
    unmounted() {
      document.body.classList.remove('destination-page-bg')
    }
}
</script>