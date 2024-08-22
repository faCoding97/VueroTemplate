<script setup lang="ts">
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Table')

useHead({
  title: 'جدول- کامپوننت ها- Vuero',
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
          label: 'جدول',
          to: '/components/table',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Table-->
        <TableBaseDocumentation />

        <VCard
          radius="smooth"
          class="demo-table mb-6"
        >
          <table
            class="table is-hoverable is-fullwidth"
            aria-label="Vuero basic table example"
          >
            <thead>
              <tr>
                <th scope="col">
              نام
                </th>
                <th scope="col">
                 نام خانوادگی
                </th>
                <th scope="col">
                  موقعیت
                </th>
                <th
                  scope="col"
                  class="is-end"
                >
                  <div class="dark-inverted is-flex is-justify-content-flex-end">
                    اقدامات
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>تینا</td>
                <td>باکری</td>
                <td>رئیس بخش فروش</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>علی</td>
                <td>احمدی</td>
                <td>مدیر اجرایی ارشد</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>سام</td>
                <td>والایی</td>
                <td>مهندس نرم افزار</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>ژاله</td>
                <td>نکویی</td>
                <td>مدیریت منابع انسانی</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>میثم</td>
                <td>جانپناهی</td>
                <td>حسابدار</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </VCard>

        <!--Table striped-->
        <TableStripedDocumentation />

        <VCard
          radius="smooth"
          class="demo-table"
        >
          <table
            class="table is-striped is-fullwidth"
            aria-label="Vuero striped table example"
          >
            <thead>
              <tr>
                <th scope="col">
                  نام
                </th>
                <th scope="col">
                  نام خانوادگی
                </th>
                <th scope="col">
                  موقعیت
                </th>
                <th
                  scope="col"
                  class="is-end"
                >
                  <div class="dark-inverted is-flex is-justify-content-flex-end">
                    اقدامات
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>تینا</td>
                <td>باکری</td>
                <td>رئیس بخش فروش</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>علی</td>
                <td>احمدی</td>
                <td>مدیر اجرایی ارشد</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>سام</td>
                <td>والایی</td>
                <td>مهندس نرم افزار</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>ژاله</td>
                <td>نکویی</td>
                <td>مدیریت منابع انسانی</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td>میثم</td>
                <td>جانپناهی</td>
                <td>حسابدار</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </VCard>

        <!--Table media-->
        <TableMediaDocumentation />

        <VCard
          radius="smooth"
          class="demo-table"
        >
          <table
            class="table is-hoverable is-fullwidth"
            aria-label="Vuero media table example"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  class="is-media"
                />
                <th scope="col">
                 نام
                </th>
                <th scope="col">
                نام خانوادگی
                </th>
                <th scope="col">
                  موقعیت
                </th>
                <th
                  scope="col"
                  class="is-end"
                >
                  <div class="dark-inverted is-flex is-justify-content-flex-end">
                    اقدامات
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/8.gif" />
                </td>
                <td>تینا</td>
                <td>باکری</td>
                <td>رئیس بخش فروش</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/1.gif" />
                </td>
                <td>علی</td>
                <td>احمدی</td>
                <td>مدیر اجرایی ارشد</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/4.gif" />
                </td>
                <td>سام</td>
                <td>والایی</td>
                <td>مهندس نرم افزار</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar
                    initials="JD"
                    color="info"
                  />
                </td>
                <td>ژاله</td>
                <td>نکویی</td>
                <td>مدیریت منابع انسانی</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <VAvatar picture="/demo/avatars/3.gif" />
                </td>
                <td>میثم</td>
                <td>جانپناهی</td>
                <td>حسابدار</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableDropdown />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </VCard>
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
