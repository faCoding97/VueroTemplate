<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('ویرایش پروفایل 1')

useHead({
  title: 'ویرایش پروفایل 1 - سایدبار - Vuero',
})
</script>

<template>
  <EditProfileGeneral />
</template>
