<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید تایل 3')

useHead({
  title: 'گرید تایل 3 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TilesGridV3 />
  </div>
</template>
