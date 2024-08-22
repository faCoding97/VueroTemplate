### VFlexTable

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
    emoji: '🚴‍♂️',
    color: 'زرد',
    name: 'دوچرخه  سواری',
    category: 'ورزشی',
  },
  // and more data ...
]
</script>

<template>
  <VFlexTable :data="data" />
</template>
```

<!--/code-->
