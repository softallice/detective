<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="50px" class="absolute-center shadow-10">
              <img src="/images/gnome.png">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div class=" row justify-between">
                <q-btn class ="btn-fixed-width" label="고객" to="/" type="button" color="primary"/>
                <q-btn class ="btn-fixed-width"  label="사용자" to="/" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import {ref} from 'vue'

export default defineComponent({
  setup() {
    return {
      username: ref('Hoho'),
      password: ref('12345')
    }
  },
})
</script>

<style>

.bg-image {
  background-image: linear-gradient(135deg, #2b28e4 0%, #b2dfe5 100%);
}
</style>
