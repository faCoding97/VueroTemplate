---
breadcrumb:
  - label: Vuero
    hideLabel: true
    icon: feather:home
    link: https://vuero.cssninja.io/
  - label: کامپوننت ها
    icon: feather:cpu
    to:
      name: /components/
  - label: VBreadcrumb
---

### جداکننده پیشفرض

Vuero یک کامپوننت `<VBreadcrumb />` را ارائه میدهد.
آیتم های پیش‌فرض breadcrumb با علامت اسلش از هم جدا می‌شوند.
برای نمایش آیکون , از پراپ `with-icons` استفاده کنید. همچنین می‌توانید با استفاده از پراپ `align` تراز را تغییر دهید (مقادیر ممکن `center` و `right` هستند).
برای رندر کردن کامپوننت، یک **Array** به پراپ `items` ارسال کنید.
برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Vuero',
    hideLabel: true,
    icon: 'feather:home',
    // use external links
    link: 'https://vuero.cssninja.io/',
  },
  {
    label: 'کامپوننت ها',
    icon: 'feather:cpu',
    // or generate a router link with 'to' props
    to: '/components/',
  },
  {
    label: 'VBreadcrumb',
  },
]
</script>

<template>
  <VBreadcrumb :items="breadcrumb" />
  <VBreadcrumb :items="breadcrumb" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" />
  <VBreadcrumb :items="frontmatter.breadcrumb" with-icons />
</div>

<!--/example-->
