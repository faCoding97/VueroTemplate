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

### جداکننده پیکان

آیتم های بردکرامب را می توان با جداکننده های جایگزین جدا کرد.
برای نمایش جداکننده‌های بردکرامب پراپ `separator` را روی `arrow` قرار دهید.
برای جزئیات بیشتر به نشانه گذاری مراجعه کنید.

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
  <VBreadcrumb :items="breadcrumb" separator="arrow" />
  <VBreadcrumb :items="breadcrumb" separator="arrow" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="arrow" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="arrow" with-icons />
</div>

<!--/example-->
