<template>
  <q-page>

    <div class="area row"></div>

    <div class="area row">
      <div>
        <q-card inline>
          <q-card-media overlay-position="top" class="relative-position">
            <q-carousel autoplay infinite arrows class="absolute" style="height: 100%; width: 100%">
              <q-carousel-slide img-src="statics/projects/inmedea-1.jpg" />
              <q-carousel-slide img-src="statics/projects/inmedea-2.jpg" />
              <q-carousel-slide img-src="statics/projects/inmedea-3.jpg" />
              <q-carousel-control slot="control-button" slot-scope="carousel" position="bottom-left" :offset="[5, 5]">
                <q-btn round dense push color="primary"
                  :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="carousel.toggleFullscreen()" />
              </q-carousel-control>
            </q-carousel>
            <img src="statics/projects/inmedea-1.jpg">
            <q-card-title slot="overlay">
              Inmedea Simulator
            </q-card-title>
          </q-card-media>
          <q-card-main class="relative-position down">
            <q-btn fab color="primary" icon="mdi-arrow-down-thick" class="absolute"
            @click="cardSwitch(1)" />
          </q-card-main>
          <q-card-main :class="card_1 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>The INMEDEA Simulator is a web based e-learning system for the medical education.
              It is case based and used for training and exams.</p>
            <p>I worked as architect, project manager, core developer, IT manager and made the system from the start.</p>
            <p>JavaScript, HTML, CSS; Java, JSP, Servlet; MySQL</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions :class="card_1 ? 'float-right' : 'hidden'">
            <q-btn no-caps flat icon="open in browser" color="primary" label="Open Application"
              @click="openURL('http://inmedea-simulator.net')" />
          </q-card-actions>

        </q-card>

      </div>
    </div>

  </q-page>
</template>

<style lang="stylus" scoped>
.down
  padding: 0
  .q-btn
    top: 0
    right: 8px
    transform: translateY(-50%)
</style>

<script>
import { openURL } from 'quasar'

export default {
  name: 'PageIndex',
  data: () => ({
    card_1: false
  }),
  methods: {
    openURL,
    cardSwitch (num) {
      const name = `card_${num}`
      this[name] = !this[name]
    }
  }
}
</script>
