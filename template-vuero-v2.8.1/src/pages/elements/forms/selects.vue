<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VSelect')

useHead({
  title: 'VSelect - المنت های فرم - Vuero',
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
          label: 'فرم‌ها',
        },
        {
          label: 'VSelect',
          to: '/elements/forms/selects',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Select-->
        <SelectBaseDocumentation />

        <!--Rounded Select-->
        <SelectRoundedDocumentation />

        <!--Font Awesome-->
        <SelectFaDocumentation />

        <!--Line Icons-->
        <SelectLineDocumentation />

        <!--Feather Icons-->
        <SelectFeatherDocumentation />

        <!--Loading-->
        <SelectLoadingDocumentation />

        <!--Multiple-->
        <SelectMultipleDocumentation />
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
