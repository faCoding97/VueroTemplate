<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('چیدمان فرم 2')

useHead({
  title: 'چیدمان فرم 2 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutSplit />
  </div>
</template>
