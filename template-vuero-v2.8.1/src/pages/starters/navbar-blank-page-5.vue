<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/starters/navbar-blank-page-5
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('صفحه خالی 5')

useHead({
  title: 'صفحه خالی 5 - نوبار- Vuero',
})
</script>

<template>
  <NavbarDropdownLayout theme="colored">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <!--
        Page content goes here

        You can see pages content samples from 
        files in /src/components/pages directory
      -->
    </div>
  </NavbarDropdownLayout>
</template>
