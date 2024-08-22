<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد نویسنده')

useHead({
  title: 'داشبورد نویسنده - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <LifestyleDashboardV4 />
  </div>
</template>
