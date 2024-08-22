<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('بورد کانبان')

useHead({
  title: 'بورد کانبان - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <KanbanApp />
  </div>
</template>
