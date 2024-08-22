<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید کاربر 4')

useHead({
  title: 'گرید کاربر 4 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV4 />
  </div>
</template>
