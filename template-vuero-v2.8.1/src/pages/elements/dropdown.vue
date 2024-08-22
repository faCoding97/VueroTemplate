<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('وی دراپ‌داون (VDropdown)')

useHead({
  title: 'وی دراپ‌داون (VDropdown) - المنت ها- Vuero',
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
          label: 'وی دراپ‌داون (VDropdown)',
          to: '/elements/dropdown',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Dropdown-->
        <DropdownDocumentation />

        <!--Dropdown-->
        <DropdownColorsDocumentation />

        <!--Dropdown-->
        <DropdownButtonSlotDocumentation />

        <!--Dropdown-->
        <DropdownButtonHoverDocumentation />

        <!--Dropdown-->
        <DropdownModernDocumentation />

        <!--Dropdown-->
        <DropdownWithIconsDocumentation />

        <!--Dropdown-->
        <DropdownWithImagesDocumentation />

        <!--Props-->
        <DropdownPropsDocumentation />

        <!--Slots-->
        <DropdownSlotsDocumentation />

        <!--Expose-->
        <DropdownExposeDocumentation />

        <!--Artificial Spacing-->
        <div class="demo-spacer" />
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
