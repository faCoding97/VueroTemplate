<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('تجارت الکترونیک 1')

useHead({
  title: 'تجارت الکترونیک 1 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <EcommerceDashboardV1 />
  </div>
</template>
