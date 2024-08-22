<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCardAction')

useHead({
  title: 'VCardAction - کامپوننت ها- Vuero',
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
          label: 'VCardAction',
          to: '/components/card/action',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VCardActionDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCardAction
              avatar="/demo/avatars/19.jpg"
              badge="/images/icons/flags/germany.svg"
              title="سعید ح."
              subtitle="مدیر فروش"
            >
              <template #action>
                <VTag
                  color="green"
                  label="در حال ترند شدن"
                  rounded
                />
              </template>
            </VCardAction>
          </div>
          <div class="column is-4">
            <VCardAction
              avatar="/demo/avatars/18.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
              title="محمد و."
              subtitle="مهندس نرم افزار"
            >
              <template #action>
                <VIconButton
                  icon="feather:heart"
                  circle
                />
              </template>
            </VCardAction>
          </div>
          <div class="column is-4">
            <VCardAction
              avatar="/demo/avatars/22.jpg"
              badge="/images/icons/flags/france.svg"
              title="سارینا س."
              subtitle="مدیریت منابع انسانی"
              radius="rounded"
            >
              <template #action>
                <WidgetDropdown />
              </template>
            </VCardAction>
          </div>
        </div>

        <VCardActionContentDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCardAction
              avatar="/demo/avatars/19.jpg"
              badge="/images/icons/flags/germany.svg"
              title="سعید ح."
              subtitle="مدیر فروش"
            >
              <template #action>
                <VTag
                  color="green"
                  label="در حال ترند شدن"
                  rounded
                />
              </template>
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و 
              </p>
            </VCardAction>
          </div>
          <div class="column is-4">
            <VCardAction
              avatar="/demo/avatars/18.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
              title="محمد و."
              subtitle="مهندس نرم افزار"
            >
              <template #action>
                <VAction>مشاهده</VAction>
              </template>
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و 
              </p>
            </VCardAction>
          </div>
          <div class="column is-4">
            <VCardAction
              avatar="/demo/avatars/22.jpg"
              badge="/images/icons/flags/france.svg"
              title="سارینا س."
              subtitle="مدیریت منابع انسانی"
              radius="rounded"
            >
              <template #action>
                <WidgetDropdown />
              </template>
              <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و 
              </p>
            </VCardAction>
          </div>
        </div>
        <!--Props-->
        <VCardActionPropsDocumentation />
        <!--Slots-->
        <VCardActionSlotsDocumentation />
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
