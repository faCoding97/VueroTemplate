<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('لیست جدول 2')

useHead({
  title: 'لیست جدول 2 - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV2 />
  </div>
</template>
