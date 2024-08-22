---
example_bottom: true
---

### VFlexTable را با اسلات ها مال خود کنید

ساده ترین راه برای ایجاد جداول پیچیده با `<VFlexTable />` استفاده از اسلات است.
این امکان استفاده از کامپوننت های دیگر و داشتن کنترل عالی را فراهم می کند
داخل ردیف‌ها (با اسلات `#body-cell`) و ستون‌ها (با اسلات `#header-column`). برای به‌روزرسانی دینامیک داده‌ها، از props `reactive` استفاده کنید تا رابط شما بداند که داده‌ها به‌روزرسانی می‌شوند، این به طور پیش‌فرض برای جلوگیری از مشکلات عملکرد غیرفعال است.
برای جزئیات بیشتر در مورد استفاده، نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedRowsId = ref<number[]>([])
const editCompanyIndex = ref<number>()

const isAllSelected = computed(
  () => flexRowsContacts.length === selectedRowsId.value.length
)

// this is our data
const data = [
  {
    id: 0,
    company: 'Grubspot',
    type: 'New Lead',
    industry: 'نرم افزار',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  // and more data ...
]

// this is the columns configuration
const columns = {
  select: {
    label: '',
    cellClass: 'is-flex-grow-0',
  },
  company: {
    label: 'شرکت',
    grow: true,
  },
  type: 'نوع',
  industry: 'صنعت',
  status: 'Status',
  contacts: {
    label: 'مخاطبین',
    align: 'end',
  },
}

// the select all checkbox click handler
function toggleSelection() {
  if (isAllSelected.value) {
    selectedRowsId.value = []
  } else {
    selectedRowsId.value = flexRowsContacts.map((_, index) => index)
  }
}
// this it the row click handler (enabled with clickable props)
function clickOnRow(row: any) {
  if (selectedRowsId.value.includes(row.id)) {
    selectedRowsId.value = selectedRowsId.value.filter((i) => i !== row.id)
  } else {
    selectedRowsId.value = [...selectedRowsId.value, row.id]
  }
}

// this is the "Contact me" click handler
function contactUser(row: any) {
  alert(`تماس با  "${row.company}" ...`)
}

// this is a local directive (it begins with V..., usable with v-focus)
// that is used to force the focus on input when mounted
const VFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}
</script>

<template>
  <VFlexTable
    :data="data"
    :columns="columns"
    clickable
    compact
    rounded
    @row-click="clickOnRow"
  >
    <!-- header-column slot -->
    <template #header-column="{ column }">
      <VCheckbox
        v-if="column.key === 'select'"
        class="ml-2 mr-3"
        :checked="isAllSelected"
        name="all_selected"
        color="primary"
        square
        @click="toggleSelection"
      />
    </template>

    <!-- body-cell slot -->
    <template #body-cell="{ row, column, value }">
      <!--This is the slot for row.select cells-->
      <VCheckbox
        v-if="column.key === 'select'"
        v-model="selectedRowsId"
        :value="row.id"
        name="selection"
        square
      />

      <!--This is the slot for row.company cells-->
      <template v-else-if="column.key === 'company'">
        <VControl v-if="editCompanyIndex === index">
          <VField>
            <input
              v-model="row[column.key]"
              v-focus
              type="text"
              class="input is-primary-focus"
              @blur="editCompanyIndex = undefined"
              @keyup.enter="editCompanyIndex = undefined"
            />
          </VField>
        </VControl>

        <a
          v-else
          class="is-overlay m-3 is-flex is-align-items-center is-clickable edit-icon-link"
          tabindex="0"
          @click="editCompanyIndex = index"
          @keydown.enter="editCompanyIndex = index"
        >
          {{ value }}
          <i
            class="iconify is-inline ml-1"
            data-icon="feather:edit"
            role="img"
            aria-label="edit-3"
          ></i>
        </a>
      </template>

      <!--This is the slot for row.status cells-->
      <VTag
        v-else-if="column.key === 'status'"
        rounded
        :color="
          value === 'Suspended'
            ? 'orange'
            : value === 'جدید'
            ? 'info'
            : value === 'فعال'
            ? 'primary'
            : undefined
        "
      >
        {{ value }}
      </VTag>

      <!--This is the slot for row.contacts cells-->
      <VAction v-if="column.key === 'contacts'" @click.stop="contactUser(row)">
        Contact me
      </VAction>

      <!--The default slot is used then-->
    </template>
  </VFlexTable>
</template>
```

<!--/code-->
