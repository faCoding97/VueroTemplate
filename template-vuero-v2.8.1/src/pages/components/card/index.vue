<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { popovers } from '/@src/data/users/userPopovers'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCard')

useHead({
  title: 'VCard - کامپوننت ها- Vuero',
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
          label: 'VCard',
          to: '/components/card/',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Basic Cards-->
        <CardBaseDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCard radius="smooth">
              <h3 class="title is-5 mb-2">
                من radius صاف دارم
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard>
              <h3 class="title is-5 mb-2">
              من radius منظمی دارم
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="rounded">
              <h3 class="title is-5 mb-2">
              من radius گرد دارم
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
        </div>

        <!--Elevated Cards-->
        <CardElevatedDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4 mb-2">
            <VCard
              radius="smooth"
              elevated
            >
              <h3 class="title is-5 mb-2">
                VCard بالا برده 
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard elevated>
              <h3 class="title is-5 mb-2">
                VCard بالا برده 
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard
              radius="rounded"
              elevated
            >
              <h3 class="title is-5 mb-2">
                VCard بالا برده 
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
        </div>

        <!--Colored Cards-->
        <CardColorsDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCard
              radius="smooth"
              color="primary"
            >
              <h3 class="title is-5 mb-2">
                VCard اولیه (Primary) 
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard color="secondary">
              <h3 class="title is-5 mb-2">
                 VCard ثانویه (Secondary)
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard
              radius="rounded"
              color="info"
            >
              <h3 class="title is-5 mb-2">
                 VCard اطلاعات ()
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard
              radius="smooth"
              color="success"
            >
              <h3 class="title is-5 mb-2">
                 VCard موفقیت (Success)
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard color="warning">
              <h3 class="title is-5 mb-2">
                 VCard هشدار (Warning)
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard
              radius="rounded"
              color="danger"
            >
              <h3 class="title is-5 mb-2">
                 VCard خطر (Danger)
              </h3>
              <p>
                من را می توان در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
              </p>
            </VCard>
          </div>
        </div>

        <!--Structured Cards-->
        <CardStructuredDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCard
              radius="smooth"
              elevated
            >
              <div class="card-head">
                <VBlock
                  title="سعید ح."
                  subtitle="مدیر فروش"
                  center
                  class="no-margin"
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        picture="/demo/avatars/19.jpg"
                        badge="/images/icons/flags/germany.svg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user19" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <UserCardDropdown />
              </div>

              <div class="card-inner">
                <p>
                  من را می توان  در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
                </p>
              </div>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard elevated>
              <div class="card-head">
                <VBlock
                  title="سعید ح."
                  subtitle="مدیر فروش"
                  center
                  class="no-margin"
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        picture="/demo/avatars/19.jpg"
                        badge="/images/icons/flags/germany.svg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user19" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <UserCardDropdown />
              </div>
              <div class="card-inner">
                <p>
                  من را می توان  در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
                </p>
              </div>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard
              radius="rounded"
              elevated
            >
              <div class="card-head">
                <VBlock
                  title="سعید ح."
                  subtitle="مدیر فروش"
                  center
                  class="no-margin"
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        picture="/demo/avatars/19.jpg"
                        badge="/images/icons/flags/germany.svg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user19" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <UserCardDropdown />
              </div>
              <div class="card-inner">
                <p>
                  من را می توان  در هر طرحی استفاده کرد. VCard ها کانتینرهای ساده ای هستند که می توانند هر نوع محتوایی را در خود جای دهند.
                </p>
              </div>
            </VCard>
          </div>
        </div>

        <!--Props-->
        <CardPropsDocumentation />

        <!--Slots-->
        <CardSlotsDocumentation />
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
