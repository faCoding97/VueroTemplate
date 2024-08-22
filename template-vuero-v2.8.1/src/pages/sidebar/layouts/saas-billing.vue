<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صورتحساب Saas')

useHead({
  title: 'صورتحساب Saas - سایدبار - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-triple-slider is-squared is-inverted">
    <div class="page-content-inner">
      <SaasBillingApp />
    </div>
  </div>
</template>
