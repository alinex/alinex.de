<template>
  <q-page>

    <div class="area row">
      <div>Get to know some of my projects.</div>
    </div>

    <div>
      <q-card inline>
        <q-card-main overlay-position="top" class="relative-position">
          <!--
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
          -->
          <q-card-title>
            Alinex Admin
          </q-card-title>
        </q-card-main>
        <q-card-main class="relative-position down">
          <q-btn fab color="primary" icon="mdi-arrow-down-thick" class="absolute"
          @click="cardSwitch(9)" />
        </q-card-main>
        <q-card-main :class="card_9 ? 'q-mt-md q-pb-none' : 'hidden'">
          <p>universal device independent administration interface with frontend and rest server base.</p>
          <p>
            (2017-2018)</p>
          <p>JavaScript ES6, HTML, CSS; NodeJS, Express; MongoDB</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions :class="card_9 ? 'float-right' : 'hidden'">
          <q-btn no-caps flat icon="open in browser" color="primary" label="Open Application"
            @click="openURL('http://inmedea-simulator.net')" />
        </q-card-actions>
      </q-card>
    </div>

<!--
8 Alinex Admin
8 DBReport, Mailman, Scripter
7 MediaCenter
-->

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
            @click="cardSwitch(2)" />
          </q-card-main>
          <q-card-main :class="card_2 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>The INMEDEA Simulator is a web based e-learning system for the medical education.
              It is case based and used for training and exams.</p>
            <p>I worked as architect, project manager, core developer, IT manager and made the system from the start.<br/>
              The system is build as tomcat application with an content authoring tool to add new cases through a web interface.
              (2002-2011)</p>
            <p>JavaScript, HTML, CSS; Java, JSP, Servlet; MySQL</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions :class="card_2 ? 'float-right' : 'hidden'">
            <q-btn no-caps flat icon="open in browser" color="primary" label="Open Application"
              @click="openURL('http://inmedea-simulator.net')" />
          </q-card-actions>

        </q-card>
      </div>
<!--
5 Code Manager
4 Webhoch3 CMS
3 Alinex PHP
2 Brokat Intranet Systems
1 Organisation Manager
-->
      <div>
        <q-card inline>
          <q-card-main overlay-position="top" class="relative-position">
            <!--
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
            -->
            <q-card-title>
              Alinex PHP
            </q-card-title>
          </q-card-main>
          <q-card-main class="relative-position down">
            <q-btn fab color="primary" icon="mdi-arrow-down-thick" class="absolute"
            @click="cardSwitch(3)" />
          </q-card-main>
          <q-card-main :class="card_3 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>Server rendered web application based on modular PHP system for easy development of flexible applications.</p>
            <p>I started this and made lots of modules all completely tested and completely API documented but I got lost in it making all modules as flexible as possible and didn't completely finish the whole suite. 
              (20ß9-2013)</p>
            <p>PHP; MySQL, Memcache, Redis</p>
          </q-card-main>
        </q-card>
      </div>

    </div>

  </q-page>
</template>

<style lang="stylus" scoped>
.q-card
  margin-bottom: 40px
.down
  padding: 0
  .q-btn
    top: 0
    right: 8px
    transform: translateY(-50%)
.q-card-main p
  text-align: left
</style>

<script>
import { openURL } from 'quasar'

export default {
  name: 'PageIndex',
  data: () => ({
    card_1: false,
    card_2: false,
    card_3: false,
    card_4: false,
    card_5: false,
    card_6: false,
    card_7: false,
    card_8: false,
    card_9: false
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
