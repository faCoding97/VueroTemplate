<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VPlaceholderPage')

useHead({
  title: 'VPlaceholderPage - کامپوننت ها- Vuero',
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
          label: 'VPlaceholderPage',
          to: '/components/placeholder-page',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VPlaceholderPage
          title="ما نتوانستیم نتایج منطبقی پیدا کنیم."
          subtitle="خیلی بد. به نظر می رسد ما نتوانستیم هیچ نتیجه منطبقی برای آن پیدا کنیم
عبارات جستجویی که وارد کرده اید لطفاً عبارات یا معیارهای جستجوی مختلف را امتحان کنید."
          larger
        >
          <template #image>
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/search-1.svg"
              alt=""
            >
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-1-dark.svg"
              alt=""
            >
          </template>
          <template #action>
            <VButtons align="centered">
              <VButton>به کاتالوگ بروید</VButton>
              <VButton color="primary">
               همه جا را جستجو کنید
              </VButton>
            </VButtons>
          </template>
        </VPlaceholderPage>

        <div class="pt-6">
          <VPlaceholderPagePropsDocumentation />

          <VPlaceholderPageSlotsDocumentation />
        </div>
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
