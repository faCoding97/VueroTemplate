<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید تایل 2')

useHead({
  title: 'گرید تایل 2 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV2 />
  </div>
</template>
