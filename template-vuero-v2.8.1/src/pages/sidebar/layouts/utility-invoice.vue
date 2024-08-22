<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('فاکتور کاربردی')

useHead({
  title: 'فاکتور کاربردی - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Invoice />
  </div>
</template>
