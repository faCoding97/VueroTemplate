<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('چیدمان فرم 1')

useHead({
  title: 'چیدمان فرم 1 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayout />
  </div>
</template>
