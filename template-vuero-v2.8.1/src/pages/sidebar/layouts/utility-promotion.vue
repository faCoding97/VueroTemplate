<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('ارتقا کاربردی')

useHead({
  title: 'ارتقا کاربردی - سایدبار - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Promotion />
  </div>
</template>
