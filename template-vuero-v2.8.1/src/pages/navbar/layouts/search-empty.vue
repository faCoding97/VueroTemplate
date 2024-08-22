<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('جستجوی خالی')

useHead({
  title: 'جستجوی خالی - نوبار- Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted is-navbar-lg"
  >
    <div class="page-content-inner">
      <EmptySearch />
    </div>
  </div>
</template>
