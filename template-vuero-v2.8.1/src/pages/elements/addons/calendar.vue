<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCalendar')

useHead({
  title: 'VCalendar - افزونه ها- Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'المنت ها',
          to: '/elements/',
        },
        {
          label: 'افزونه ها',
        },
        {
          label: 'VCalendar',
          to: '/elements/addons/calendar',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Datepicker-->
        <DatepickerBaseDocumentation />

        <!--DateRangepicker-->
        <DatepickerRangeDocumentation />

        <!--DateTimepicker-->
        <DatepickerTimeDocumentation />

        <!--Timepicker-->
        <DatepickerTimeSingleDocumentation />
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
