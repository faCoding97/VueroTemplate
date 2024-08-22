### استفاده از توابع رندر با VFlexTable (پیشرفته)

گاهی اوقات رندر توابع بهترین راه برای ایجاد رابط های پرفورمنت است، به خصوص در هنگام کار با حجم زیادی از داده ها.

`<VFlexTable />` به گونه‌ای طراحی شده است که به شما امکان کنترل روی ردیف‌ها (با `renderRow`) و ستون‌ها (با `renderHeader`) را بدهد.
اما هنگام استفاده از توابع رندر مراقب باشید.
برای جزئیات بیشتر در مورد استفاده، نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
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

// this is the how rows and columns are rendered
const columns = {
  company: {
    label: 'شرکت',
    bold: true,
  },
  type: 'نوع',
  industry: 'صنعت',
  status: {
    label: 'وضعیت',
    // we can use custom render function for each rows
    renderRow: (row: any) =>
      h(
        VTag,
        {
          rounded: true,
          color:
            row.status === 'Active'
              ? 'success'
              : row.status === 'جدید'
              ? 'info'
              : row.status === 'معلق'
              ? 'orange'
              : undefined,
        },
        // this notation is to render content in the default slot
        {
          default() {
            return `${row.status}`
          },
        }
      ),
  },
  contacts: {
    // we can use custom render function for each columns too
    renderHeader: () =>
      h('span', {}, [
        h(
          RouterLink,
          { to: '/' },
          {
            default() {
              const icon = h('span', {
                class: 'iconify is-inline ml-2',
                'data-icon': 'prime:sort-alt',
              })

              return ['Contacts', icon]
            },
          }
        ),
      ]),
    renderRow: (row: any) =>
      // We can render custom components and set props
      h(VAvatarStack, {
        class: 'is-pushed-mobile',
        size: 'small',
        avatars: row.contacts,
        limit: 3,
      }),
  },
  actions: {
    label: 'اقدامات',
    align: 'end',
    renderRow: (row: any) =>
      h(FlexTableDropdown, {
        // We can catch all events from vue
        onView: () => {
          console.log('viewing', row)
        },
        onProjects: () => {
          console.log('projects', row)
        },
        onSchedule: () => {
          console.log('schedule', row)
        },
        onRemove: () => {
          console.log('remove', row)
        },
      }),
  },
}
</script>

<template>
  <VFlexTable :data="data" :columns="columns" />
</template>
```

<!--/code-->
