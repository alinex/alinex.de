<template>
  <q-page>

    <div class="area row">
      <div>Get to know some of my projects.</div>
    </div>

    <div class="area row">

      <div>
        <q-card inline>
          <q-card-media overlay-position="top" class="relative-position">
            <q-carousel autoplay="5100" infinite arrows class="absolute" style="height: 100%; width: 100%">
              <q-carousel-slide img-src="statics/projects/web-1.jpg" />
              <q-carousel-slide img-src="statics/projects/web-2.jpg" />
              <q-carousel-slide img-src="statics/projects/web-3.jpg" />
              <q-carousel-slide img-src="statics/projects/web-4.jpg" />
              <q-carousel-slide img-src="statics/projects/web-5.jpg" />
              <q-carousel-slide img-src="statics/projects/web-6.jpg" />
              <q-carousel-slide img-src="statics/projects/web-7.jpg" />
              <q-carousel-slide img-src="statics/projects/web-8.jpg" />
              <q-carousel-control slot="control-button" slot-scope="carousel" position="bottom-left" :offset="[5, 5]">
                <q-btn round dense push color="primary"
                  :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="carousel.toggleFullscreen()" />
              </q-carousel-control>
            </q-carousel>
            <img src="statics/projects/web-1.jpg">
            <q-card-title slot="overlay">
              Websites
            </q-card-title>
          </q-card-media>
          <q-card-main class="relative-position down">
            <q-btn fab color="primary" icon="mdi-arrow-down-thick" class="absolute"
            @click="cardSwitch(10)" />
          </q-card-main>
          <q-card-main :class="card_10 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>Websites for private, organisations and small companies. They are really different and individual.</p>
            <p>I always use the technology of the time it is created, often with content management systems to change contents on their own.
              Sometimes also together with logo design.<br/></p>
            <p>HTML, JavaScript, Bootstrap, Joomla, Google Tools</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions :class="card_10 ? 'float-right' : 'hidden'">
            <q-btn no-caps flat icon="open in browser" color="primary" title="Art Organisation"
              @click="openURL('http://kulturmuehle-rechberghausen.de')" />
            <q-btn no-caps flat icon="open in browser" color="primary" title="VfB Fanclub"
              @click="openURL('http://www.schwaben-piranhas.de')" />
            <q-btn no-caps flat icon="open in browser" color="primary" title="Small Company"
              @click="openURL('http://freytag-finanzberatung.de')" />
            <q-btn no-caps flat icon="open in browser" color="primary" title="Small Company"
              @click="openURL('http://steinmetz-sartorius.de')" />
            <q-btn no-caps flat icon="open in browser" color="primary" title="Holiday Appartments"
              @click="openURL('http://ferienwohnungspanja.de')" />
            <q-btn no-caps flat icon="open in browser" color="primary" title="Music Organisation"
              @click="openURL('http://www.lichtensteinerblasmusik.de')" />
          </q-card-actions>
        </q-card>
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
            <p>Universal device independent administration interface with frontend and REST server base.</p>
            <p>
              (2017-2018)</p>
            <p>JavaScript ES6, HTML, CSS, Vue, Electron; NodeJS, Express; MongoDB</p>
          </q-card-main>
        </q-card>
      </div>

<!--
8 DBReport, Mailman, Scripter
-->
      <div>
        <q-card inline>
          <q-card-media overlay-position="top" class="relative-position">
            <q-carousel autoplay="5100" infinite arrows class="absolute" style="height: 100%; width: 100%">
              <q-carousel-slide img-src="statics/projects/mc-1.jpg" />
              <q-carousel-slide img-src="statics/projects/mc-2.jpg" />
              <q-carousel-slide img-src="statics/projects/mc-3.jpg" />
              <q-carousel-control slot="control-button" slot-scope="carousel" position="bottom-left" :offset="[5, 5]">
                <q-btn round dense push color="primary"
                  :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="carousel.toggleFullscreen()" />
              </q-carousel-control>
            </q-carousel>
            <img src="statics/projects/mc-1.jpg">
            <q-card-title slot="overlay">
              Media Server
            </q-card-title>
          </q-card-media>
          <q-card-main class="relative-position down">
            <q-btn fab color="primary" icon="mdi-arrow-down-thick" class="absolute"
            @click="cardSwitch(7)" />
          </q-card-main>
          <q-card-main :class="card_7 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>The Media Server is a managing system for media files which can analyze, convert, watermark and download/stream them.</p>
            <p>I developed this as an add on to the shop, doing all the media file based tasks. Bacause of the high CPU Usage it contains a weighted queue with multiple workers for doing conversions and watermarking.I worked as architect, project manager, core developer, IT manager and made the system from the start.<br/>
              (2012-2016)</p>
            <p>PHP, MySQL; ffmpeg, handbreak, Fraunhofer Watermark</p>
          </q-card-main>
        </q-card>
      </div>

      <div>
        <q-card inline>
          <q-card-media overlay-position="top" class="relative-position">
            <q-carousel autoplay="3200" infinite arrows class="absolute" style="height: 100%; width: 100%; position=fixed;" >
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
            @click="cardSwitch(6)" />
          </q-card-main>
          <q-card-main :class="card_6 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>The INMEDEA Simulator is a web based e-learning system for the medical education.
              It is case based and used for training and exams.</p>
            <p>I worked as architect, project manager, core developer, IT manager and made the system from the start.<br/>
              The system is build as tomcat application with an content authoring tool to add new cases through a web interface.
              (2002-2011)</p>
            <p>JavaScript, HTML, CSS; Java, JSP, Servlet, MySQL</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions :class="card_6 ? 'float-right' : 'hidden'">
            <q-btn no-caps flat icon="open in browser" color="primary" label="Open Application"
              @click="openURL('http://inmedea-simulator.net')" />
          </q-card-actions>
        </q-card>
      </div>

      <div>
        <q-card inline>
          <q-card-media overlay-position="top" class="relative-position">
            <q-carousel autoplay="1400" infinite arrows class="absolute" style="height: 100%; width: 100%">
              <q-carousel-slide img-src="statics/projects/php-1.jpg" />
              <q-carousel-slide img-src="statics/projects/php-2.jpg" />
              <q-carousel-control slot="control-button" slot-scope="carousel" position="bottom-left" :offset="[5, 5]">
                <q-btn round dense push color="primary"
                  :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="carousel.toggleFullscreen()" />
              </q-carousel-control>
            </q-carousel>
            <img src="statics/projects/php-1.jpg">
            <q-card-title slot="overlay">
              Alinex PHP Server
            </q-card-title>
          </q-card-media>
          <q-card-main class="relative-position down">
            <q-btn fab color="primary" icon="mdi-arrow-down-thick" class="absolute"
            @click="cardSwitch(5)" />
          </q-card-main>
          <q-card-main :class="card_5 ? 'q-mt-md q-pb-none' : 'hidden'">
            <p>Server rendered web application based on modular PHP system for easy development of flexible applications.</p>
            <p>I started this and made lots of modules all completely tested and completely API documented but I got lost in it making all modules as flexible as possible and didn't completely finish the whole suite.
              (20ß9-2013)</p>
            <p>PHP, MySQL, Memcache, Redis</p>
          </q-card-main>
        </q-card>
      </div>

<!--
4 Code Manager
3 Webhoch3 CMS
2 Brokat Intranet Systems
1 Organisation Manager
-->

    </div>

  </q-page>
</template>

<style lang="stylus" scoped>
.q-card
  margin-bottom: 40px
  width: 100%
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
    card_9: false,
    card_10: false
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
