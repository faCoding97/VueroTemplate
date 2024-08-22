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

### جداکننده گلوله ای

آیتم های بردکرامب را می توان با جداکننده های جایگزین جدا کرد.
برای نمایش جداکننده‌های بردکرامب پراپ `separator` را روی `bullet` قرار دهید.برای جزئیات بیشتر به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
const breadcrumb = [
  {
    icon: 'feather:home',
    hideLabel: true,
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
  <VBreadcrumb :items="breadcrumb" separator="bullet" />
  <VBreadcrumb :items="breadcrumb" separator="bullet" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="bullet" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="bullet" with-icons />
</div>

<!--/example-->
