<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صفحه معارفه V1')

useHead({
  title: 'صفحه معارفه V1 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <OnboardingV1 />
  </div>
</template>
