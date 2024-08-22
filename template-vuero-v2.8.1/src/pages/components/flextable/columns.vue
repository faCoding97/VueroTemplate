<script setup lang="ts">
import { flexRowsContacts, flexRowsAdvanced } from '/@src/data/documentation/table'
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('سفارشی کردن ستون  ها')
useHead({
  title: 'سفارشی کردن ستون  ها - VFlexTable - کامپوننت ها- Vuero',
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
          label: 'VFlexTable',
          to: '/components/flextable/',
        },
        {
          label: 'سفارشی کردن ستون  ها',
          to: '/components/flextable/columns',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VFlexTableColumnsDocumentation />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'شناسه (معکوس)',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'شرکت (بولد)',
                bold: true,
              },
              type: 'نوع',
              status: {
                label: 'وضعیت (وسط)',
                align: 'center',
              },
              contacts: {
                label: 'مخاطبین (انتها)',
                align: 'end',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <DocumentationDivider
          id="grow"
          title="رشد (Grow)"
        />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'شناسه',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'شرکت',
                bold: true,
              },
              type: 'نوع',
              status: {
                label: 'وضعیت',
                align: 'center',
              },
              contacts: {
                label: 'مخاطبین (رشد (Grow))',
                align: 'end',
                grow: true,
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <DocumentationDivider
          id="grow-lg"
          title="رشد (Grow) (large)"
        />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'شناسه',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'شرکت',
                bold: true,
              },
              type: 'نوع',
              status: {
                label: 'وضعیت',
                align: 'center',
              },
              contacts: {
                label: 'مخاطبین (رشد (Grow): lg)',
                align: 'end',
                grow: 'lg',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <DocumentationDivider
          id="grow-xl"
          title="رشد (Grow) (xl)"
        />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'شناسه',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'شرکت',
                bold: true,
              },
              type: 'نوع',
              status: {
                label: 'وضعیت',
                align: 'center',
              },
              contacts: {
                label: 'مخاطبین (رشد(grow): xl)',
                align: 'end',
                grow: 'xl',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          />
        </div>

        <VFlexTableScrollableDocumentation class="mt-6" />

        <div class="mt-4">
          <VFlexTable
            rounded
            print-objects
            :data="flexRowsContacts"
            :columns="{
              id: {
                label: 'شناسه',
                inverted: true,
                format: (value) => `ID-0000${value}`,
              },
              company: {
                label: 'شرکت',
                bold: true,
                grow: true,
              },
              contacts: {
                label: 'مخاطبین (scrollX و scrollY)',
                grow: true,
                scrollX: true,
                scrollY: true,
                cellClass: 'max-h-280',
              },
            }"
          />
        </div>

        <VFlexTableMediaDocumentation class="mt-6" />

        <div class="mt-4">
          <VFlexTable
            rounded
            :data="flexRowsAdvanced"
            :columns="{
              username: {
                label: 'کاربر(رسانه)',
                grow: true,
                media: true,
              },
              position: 'موقعیت',
              status: {
                label: 'وضعیت',
              },
              contacts: {
                label: 'مخاطبین',
                align: 'end',
                format: (value) => value.map((r: any) => r.initials).join(', '),
              },
            }"
          >
            <template #body-cell="{ row, column, value }">
              <template v-if="column.key === 'username'">
                <VAvatar
                  size="medium"
                  :picture="row.picture"
                  :badge="row.badge"
                />
                <div>
                  <span class="item-name">{{ row.name }}</span>
                  <span class="item-meta">
                    <strong>{{ value }}</strong>
                  </span>
                </div>
              </template>

              <VPlaceload
                v-else-if="column.key === 'status'"
                mobile-width="30%"
              />

              <VAvatarStack
                v-else-if="column.key === 'contacts'"
                class="is-pushed-mobile"
                size="small"
                :avatars="row.contacts"
                :title="value"
                :limit="3"
              />
            </template>
          </VFlexTable>
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
