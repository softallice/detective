<template>
  <header
    class="page-header q-header q-layout__section--marginal fixed-top q-header--bordered absolute-top bg-white text-dark"
  >
    <div class="q-toolbar row no-wrap items-center justify-between">
      <slot name="buttons-left" />
      <slot name="buttons-home" />
      <div class="page-header-title q-toolbar__title ellipsis text-body1 q-pl-none">
        <slot name="title" />
      </div>
      <slot name="buttons-write" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>