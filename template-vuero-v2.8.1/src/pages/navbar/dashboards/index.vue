<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('شخصی 1')

useHead({
  title: 'شخصی 1 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV1 />
  </div>
</template>
