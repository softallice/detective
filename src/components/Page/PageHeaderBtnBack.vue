<template>
  <q-btn
    @click="goPath"
    icon="chevron_left"
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
  name: 'PageHeaderBtnBack',
  setup() {
    const $router = useRouter()

    function goPath() {
      $router.go(-1)
    }

    return {
      goPath
    }
  }
}
</script>