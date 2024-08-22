### ستون و ردیف های سفارشی

ستون‌ها را می‌توان با ویژگی `columns` پیکربندی کرد.
شما می توانید ستون ها را مخفی کنید، ستون های مجازی را تنظیم کنید (برای اقدامات، انتخاب ها، ...).  
علاوه بر این، برخی از رفتارها را می توان برای سلول ها تنظیم کرد، مانند سرریز محتوا، قالب بندی مقادیر و اندازه سلول.
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

// columns properties allow to customize the entire table
const columns = {
  id: {
    label: 'شناسه',
    inverted: true,
    // we can format the value using simple function
    format: (value) => `N°${value}`,
  },
  company: {
    label: 'شرکت',
    bold: true,
    grow: true,
  },
  type: 'نوع',
  // industry: 'صنعت', <- this column is not visible
  status: {
    label: 'مخاطبین',
    align: 'center',
  },
  contacts: {
    label: 'مخاطبین',
    align: 'end',
    grow: true,
    // we can format the value using more complete function
    format: (value) => value.map((r) => r.initials).join(', '),
  },
}
</script>

<template>
  <VFlexTable :data="data" :columns="columns" />
</template>
```

<!--/code-->
