<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صفحه اکشن 2')

useHead({
  title: 'صفحه اکشن 2 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ActionPageV2 />
  </div>
</template>
