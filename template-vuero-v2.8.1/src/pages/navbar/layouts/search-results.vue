<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Search Results')

useHead({
  title: 'Search Results - نوبار- Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted is-navbar-lg"
  >
    <div class="page-content-inner">
      <FacetSearch />
    </div>
  </div>
</template>
