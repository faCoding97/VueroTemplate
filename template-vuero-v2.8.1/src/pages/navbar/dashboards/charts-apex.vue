<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('نمودار Apex')

useHead({
  title: 'نمودار Apex - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ApexDashboard />
  </div>
</template>
