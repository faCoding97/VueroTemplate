<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('سبک زندگی 1')

useHead({
  title: 'سبک زندگی 1 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg has-top-nav" />
    </Teleport>

    <LifestyleDashboardV1 class="has-navbar-spacing" />
  </div>
</template>
