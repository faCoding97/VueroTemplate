<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VInput')

useHead({
  title: 'VInput - المنت های فرم - Vuero',
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
          label: 'VInput',
          to: '/elements/forms/inputs',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Input-->
        <InputBasicDocumentation />

        <!--Help Text-->
        <InputHelpDocumentation />

        <!--Rounded Input-->
        <InputRoundedDocumentation />

        <!--Focus Colors-->
        <InputFocusDocumentation />

        <!--Font Awesome-->
        <InputFaDocumentation />

        <!--Line Icons-->
        <InputLineDocumentation />

        <!--Feather Icons-->
        <InputFeatherDocumentation />

        <!--Loading State-->
        <InputLoadingDocumentation />

        <!--Disabled Input-->
        <InputDisabledDocumentation />

        <InputDatasetDocumentation />
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
