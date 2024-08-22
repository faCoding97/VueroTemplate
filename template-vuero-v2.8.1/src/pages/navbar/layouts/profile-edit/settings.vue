<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('ویرایش پروفایل 4')

useHead({
  title: 'ویرایش پروفایل 4 - سایدبار - Vuero',
})
</script>

<template>
  <EditProfileSettings />
</template>
