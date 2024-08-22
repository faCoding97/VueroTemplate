<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('فلکس لیست 1')

useHead({
  title: 'فلکس لیست 1 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlexListV1 />
  </div>
</template>
