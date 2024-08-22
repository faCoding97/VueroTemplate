<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('چیدمان فرم 5')

useHead({
  title: 'چیدمان فرم 5 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStepper class="is-navbar" />
  </div>
</template>
