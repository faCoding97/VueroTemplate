<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صفحه معارفه 3')

useHead({
  title: 'صفحه معارفه 3 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV3 />
  </div>
</template>
