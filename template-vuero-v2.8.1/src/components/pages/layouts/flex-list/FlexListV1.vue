<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as listData from '/@src/data/layouts/flex-list-v1'

export interface UserData extends VAvatarProps {
  id: number
  username: string
  position: string
  picture: string
  badge: string
  location: string
  industry: string
  status: string
  contacts: VAvatarProps[]
}

const page = ref(42)
const filters = ref('')

const users = listData.users as UserData[]

const columns = {
  username: {
    label: 'کاربر',
    grow: true,
    media: true,
  },
  location: 'موقعیت',
  industry: 'صنعت',
  status: 'وضعیت',
  contacts: 'روابط',
  actions: {
    label: 'اقدامات',
    align: 'end',
  },
} as const

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    const filterRe = new RegExp(filters.value, 'i')
    return users.filter((item) => {
      return (
        item.username.match(filterRe) ||
        item.position.match(filterRe) ||
        item.industry.match(filterRe) ||
        item.status.match(filterRe) ||
        item.location.match(filterRe)
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-flex-toolbar flex-list-v1">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="جستجو..."
          >
        </VControl>
      </VField>

      <VButtons>
        <VButton
          color="primary"
          icon="fas fa-plus"
          elevated
        >
          افزودن کاربر
        </VButton>
      </VButtons>
    </div>

    <div class="page-content-inner">
      <div class="flex-list-wrapper flex-list-v1">
        <!--List Empty Search Placeholder -->
        <VPlaceholderPage
          v-if="!filteredData.length"
          title="ما نتوانستیم نتایج منطبقی پیدا کنیم."
          subtitle="خیلی بد. به نظر می‌رسد ما نتوانستیم هیچ نتیجه منطبقی برای عبارات جستجویی که وارد کرده‌اید پیدا کنیم. لطفاً عبارات یا معیارهای جستجوی مختلف را امتحان کنید."
          larger
        >
          <template #image>
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/search-4.svg"
              alt=""
            >
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
              alt=""
            >
          </template>
        </VPlaceholderPage>

        <VFlexTable
          v-if="filteredData.length"
          :data="filteredData"
          :columns="columns"
          compact
        >
          <template #body>
            <TransitionGroup
              name="list"
              tag="div"
              class="flex-list-inner"
            >
              <!--Table item-->
              <div
                v-for="item in filteredData"
                :key="item.id"
                class="flex-table-item"
              >
                <VFlexTableCell
                  :column="{ media: true, grow: true }"
                  data-th="Label"
                >
                  <VAvatar
                    :picture="item.picture"
                    :badge="item.badge"
                    :color="item.color"
                    :initials="item.initials"
                    size="medium"
                  />
                  <div>
                    <span class="item-name dark-inverted">{{ item.username }}</span>
                    <span class="item-meta">
                      <span>{{ item.position }}</span>
                    </span>
                  </div>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.location }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.industry }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <VTag
                    v-if="item.status === 'آنلاین'"
                    color="success"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'در حال کار'"
                    color="info"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'معلق'"
                    color="danger"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                  <VTag
                    v-if="item.status === 'آفلاین'"
                    rounded
                  >
                    {{ item.status }}
                  </VTag>
                </VFlexTableCell>
                <VFlexTableCell>
                  <VAvatarStack
                    :avatars="item.contacts"
                    size="small"
                    :limit="3"
                    class="is-pushed-mobile"
                  />
                </VFlexTableCell>
                <VFlexTableCell :column="{ align: 'end' }">
                  <FlexTableDropdown />
                </VFlexTableCell>
              </div>
            </TransitionGroup>
          </template>
        </VFlexTable>

        <!--Table Pagination-->
        <VFlexPagination
          v-if="filteredData.length > 5"
          v-model:current-page="page"
          :item-per-page="10"
          :total-items="873"
          :max-links-displayed="7"
          no-router
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-inline-end: auto;
    margin-inline-start: auto;
  }
}
</style>
