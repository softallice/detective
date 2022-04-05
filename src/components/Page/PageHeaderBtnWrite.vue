<template>
  <q-btn
    @click="goBlogPost"
    icon="las la-pen"
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
  name: 'PageHeaderBtnWrite',
  setup () {
    const $router = useRouter()
    
    function goBlogPost() {
      $router.replace('/blogs/post')
    }

    return {
      goBlogPost
    }
  }
}
</script>