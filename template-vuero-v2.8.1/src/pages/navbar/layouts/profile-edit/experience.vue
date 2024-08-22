<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('ویرایش پروفایل 2')

useHead({
  title: 'ویرایش پروفایل 2 - سایدبار - Vuero',
})
</script>

<template>
  <EditProfileExperience />
</template>
