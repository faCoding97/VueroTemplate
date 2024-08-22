<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('بانکداری 1')

useHead({
  title: 'بانکداری 1 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV1 />
  </div>
</template>
