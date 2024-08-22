<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('ویرایش پروفایل 3')

useHead({
  title: 'ویرایش پروفایل 3 - سایدبار - Vuero',
})
</script>

<template>
  <EditProfileSkills />
</template>
