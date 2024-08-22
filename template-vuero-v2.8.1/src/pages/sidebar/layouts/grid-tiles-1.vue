<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید تایل 1')

useHead({
  title: 'گرید تایل 1 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV1 />
  </div>
</template>
