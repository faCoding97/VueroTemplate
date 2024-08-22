<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('پروژه ها 3')

useHead({
  title: 'پروژه ها 3 - نوبار- Vuero',
})
</script>

<template>
  <div class="is-navbar-lg page-content-inner">
    <ProjectsViewV3 />
  </div>
</template>
