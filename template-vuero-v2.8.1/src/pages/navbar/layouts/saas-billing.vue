<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صورتحساب Saas')

useHead({
  title: 'صورتحساب Saas - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SaasBillingApp />
  </div>
</template>
