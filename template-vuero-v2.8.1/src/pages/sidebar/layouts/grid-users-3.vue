<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید کاربر 3')

useHead({
  title: 'گرید کاربر 3 - سایدبار - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <UsersGridV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
