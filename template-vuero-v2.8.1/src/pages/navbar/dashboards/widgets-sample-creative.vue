<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('ویجت های Creative ')

useHead({
  title: 'ویجت های Creative  - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsCreative />
  </div>
</template>
