<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('مشاغل')

useHead({
  title: 'داشبورد  مشاغل - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <JobsDashboard />
  </div>
</template>
