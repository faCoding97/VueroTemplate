<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('نمای لیست 1')

useHead({
  title: 'نمای لیست 1 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewListV1 />
  </div>
</template>
