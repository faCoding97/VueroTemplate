<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('لیست جایگزین')

useHead({
  title: 'لیست جایگزین - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV1 />
  </div>
</template>
