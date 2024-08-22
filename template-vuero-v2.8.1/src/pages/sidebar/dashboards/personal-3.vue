<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('شخصی 3 ')

useHead({
  title: 'شخصی 3 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV3 />
  </div>
</template>
