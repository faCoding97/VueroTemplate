<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VPlaceholderSection')

useHead({
  title: 'VPlaceholderSection - کامپوننت ها- Vuero',
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
          label: 'VPlaceholderSection',
          to: '/components/placeholder-section',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <div class="columns is-vcentered">
          <div class="column is-6">
            <VCard>
              <VPlaceholderSection
                title="You were invited"
                subtitle="صابر م. invited you to join the Heartman &amp; Sons project."
              >
                <template #image>
                  <VAvatar
                    picture="/demo/avatars/22.jpg"
                    badge="/images/icons/flags/united-states-of-america.svg"
                  />
                </template>
              </VPlaceholderSection>
            </VCard>
          </div>

          <div class="column is-6">
            <VPlaceholderSection
              title="دریافت پرمیوم"
              subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
            >
              <template #action>
                <VButtons align="centered">
                  <VButton color="primary">
                    View plans
                  </VButton>
                </VButtons>
              </template>
            </VPlaceholderSection>
          </div>
        </div>

        <VPlaceholderSectionPropsDocumentation />

        <VPlaceholderSectionSlotsDocumentation />
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
