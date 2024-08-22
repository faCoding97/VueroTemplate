<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد منابع انسانی')

useHead({
  title: 'داشبورد منابع انسانی - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <HumanRessourcesDashboard />
  </div>
</template>
