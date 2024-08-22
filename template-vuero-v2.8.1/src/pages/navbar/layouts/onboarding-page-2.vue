<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صفحه معارفه 2')

useHead({
  title: 'صفحه معارفه 2 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV2 />
  </div>
</template>
