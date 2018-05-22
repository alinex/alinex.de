<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="tertiary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          Alinex
        </q-toolbar-title>
        <q-btn flat no-caps icon="home" label="Start" @click="$router.push('/')" />
        <q-btn flat no-caps icon="mdi-chart-timeline" label="Biographia" @click="$router.push('/timeline')" />
        <q-btn flat no-caps icon="mdi-projector-screen" label="Projects" @click="$router.push('/projects')" />
        <q-btn flat no-caps icon="security" label="Policy" @click="$router.push('/policy')" />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
