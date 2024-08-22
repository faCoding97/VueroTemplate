<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('گرید کاربر 3')

useHead({
  title: 'گرید کاربر 3 - نوبار- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV3 :active-tab="activeTab" />
  </div>
</template>
