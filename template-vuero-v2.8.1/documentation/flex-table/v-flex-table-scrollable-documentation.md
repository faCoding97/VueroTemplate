### ستون های قابل اسکرول

Vuero یک کامپوننت جدول سفارشی به نام`<VFlexTable />` ارائه می دهد.
به نظر می رسد یک جدول است اما یک جدول Html5 نیست.
در عوض، از فناوری flexbox استفاده می کند و کاملاً ریسپانسیو است.
برای جزئیات بیشتر در مورد استفاده، نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
// this is our data
const data = [
  {
    id: 0,
    company: 'Grubspot',
    type: 'راهنمای جدید',
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

const columns = {
  id: {
    label: 'شناسه',
    inverted: true,
    format: (value) => `N°${value}`,
  },
  company: {
    label: 'شرکت',
    bold: true,
    grow: true,
  },
  type: 'نوع',
  status: {
    label: 'مخاطبین',
    align: 'center',
  },
  contacts: {
    label: 'مخاطبین',
    align: 'end',
    scrollX: true,
  },
}
</script>

<template>
  <VFlexTable :data="data" :columns="columns" print-objects />
</template>
```

<!--/code-->
