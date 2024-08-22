<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد اینفلوئنسر')

useHead({
  title: 'داشبورد اینفلوئنسر - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Teleport to="[data-teleport-bg]">
      <div class="lifestyle-dashboard-bg" />
    </Teleport>

    <LifestyleDashboardV1 />
  </div>
</template>
