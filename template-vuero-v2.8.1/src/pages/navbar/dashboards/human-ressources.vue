<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد منابع انسانی')

useHead({
  title: 'داشبورد منابع انسانی - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <HumanRessourcesDashboard class="has-navbar-spacing" />
  </div>
</template>
