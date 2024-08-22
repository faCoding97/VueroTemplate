### رفع اشکال آبجکت ها

به طور پیش فرض آبجکت ها رندر نمیشوند.
اگر نیاز به نمایش محتوای آنها برای رفع اشکال دارید، می‌توانید ویژگی `print-objects` را به `<VFlexTable />`اضافه کنید.

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
</script>

<template>
  <VFlexTable :data="data" rounded print-objects />
</template>
```

<!--/code-->
