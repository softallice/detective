<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="{ 'ios-browser-swiping-back' : store.state.iosBrowserSwipingBack }"
  >
  {{useFooter}}
    <q-footer v-if="route.name !== 'Login'"
      bordered 
      class="bg-white text-primary">
      <q-tabs
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        no-caps
      >
        <q-route-tab
          v-for="navItem in store.state.navItems"
          :key="navItem.root"
          :to="navItem.to"
          :label="navItem.label"
          :icon="navItem.icon"
        />

      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
          
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import store from 'src/myStore'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'MainLayout',
  
  setup () {
    const route = useRoute()

    return {
      store,
      route
    }
  }
}
</script>
