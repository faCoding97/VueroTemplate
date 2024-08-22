<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VSwitchBlock')

useHead({
  title: 'VSwitchBlock - المنت های سوئیچ - Vuero',
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
          label: 'سوئیچ ها',
        },
        {
          label: 'VSwitchBlock',
          to: '/elements/switch-block',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Switch-->
        <SwitchBlockDocumentation />

        <!--Thin Switch-->
        <SwitchBlockThinDocumentation />

        <!--Switch Block-->
        <SwitchBlockLabelDocumentation />

        <!--Switch Block Thin-->
        <SwitchBlockThinLabelDocumentation />

        <!--Props-->
        <SwitchBlockPropsDocumentation />

        <!--Events-->
        <SwitchBlockEventsDocumentation />
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
