<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('تجارت الکترونیک')

useHead({
  title: 'تجارت الکترونیک - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <EcommerceDashboardV1 class="has-navbar-spacing" />
  </div>
</template>
