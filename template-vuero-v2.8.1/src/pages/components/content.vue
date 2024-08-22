<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('محتوا')

useHead({
  title: 'محتوا - کامپوننت ها- Vuero',
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
          label: 'کامپوننت ها',
          to: '/components/',
        },
        {
          label: 'محتوا',
          to: '/components/content',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Typography-->
        <ContentUnorderedListsDocumentation />

        <!--Typography-->
        <ContentOrderedListsDocumentation />

        <!--Typography-->
        <ContentTitlesDocumentation />

        <!--Typography-->
        <ContentSubtitlesDocumentation />

        <!--Typography-->
        <ContentBlockquotesDocumentation />

        <!--Typography-->
        <ContentDividersDocumentation />

        <!--Typography-->
        <ContentTablesDocumentation />
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
