<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('چیدمان فرم 4')

useHead({
  title: 'چیدمان فرم 4 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStacked class="is-navbar" />
  </div>
</template>
