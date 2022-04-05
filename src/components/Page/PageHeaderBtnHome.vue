<template>
  <q-btn
    @click="goHome"
    icon="las la-home"
    color="primary"
    flat
    rounded
    dense
    no-caps
  />
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'PageHeaderBtnHome',
  setup () {
    const $router = useRouter()
    
    function goHome() {
      $router.push('/home')
    }

    return {
      goHome
    }
  }
}
</script>