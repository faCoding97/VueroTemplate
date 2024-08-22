<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید کارت 1')

useHead({
  title: 'گرید کارت 1 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV1 />
  </div>
</template>
