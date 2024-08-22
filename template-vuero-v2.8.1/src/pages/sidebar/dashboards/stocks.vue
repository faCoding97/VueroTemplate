<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد سهام')

useHead({
  title: 'داشبورد سهام - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <StockDashboard />
  </div>
</template>
