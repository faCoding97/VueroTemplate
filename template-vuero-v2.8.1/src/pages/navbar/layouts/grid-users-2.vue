<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید کاربر 2')

useHead({
  title: 'گرید کاربر 2 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV2 />
  </div>
</template>
