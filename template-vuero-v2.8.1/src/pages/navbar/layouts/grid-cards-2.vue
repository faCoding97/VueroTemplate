<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید کارت 2')

useHead({
  title: 'گرید کارت 2 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV2 />
  </div>
</template>
