<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('فلکس لیست 3')

useHead({
  title: 'فلکس لیست 3 - سایدبار - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FlexListV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
