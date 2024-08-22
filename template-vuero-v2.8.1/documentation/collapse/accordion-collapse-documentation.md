### VCollapse

Vuero 2 نوع کامپوننت کالپس (collapse )را ارائه می دهد:
`<VCollapse />` و `<VCollapse with-chevron />`.
2 تنوع موجود وجود دارد که می توانید از آنها برای تغییر آیکون هدر جمع کردن استفاده کنید. یک **آرایه** را به props `items` ارسال کنید تا کامپوننت جمع‌کردن انتخابی را ارائه کنید. برای جزئیات بیشتر نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    title: 'آیتم آکاردئون 1',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
  },
  {
    title: 'آیتم آکاردئون 2',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
  },
  {
    title: 'آیتم آکاردئون 3',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .....',
  },
]
</script>

<template>
  <div class="column is-6">
    <VCollapse :items="data" />
  </div>

  <div class="column is-6">
    <VCollapse :items="data" with-chevron />
  </div>
</template>
```

<!--/code-->
