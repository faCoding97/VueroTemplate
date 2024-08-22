<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('فاکتور کاربردی')

useHead({
  title: 'فاکتور کاربردی - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Invoice class="is-navbar" />
  </div>
</template>
