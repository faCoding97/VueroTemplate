---
items:
  - src: http://via.placeholder.com/600x400
    thumbnail: http://via.placeholder.com/60x40
    w: 600
    h: 400
    alt: 'optional alt attribute for thumbnail image'
  - src: http://via.placeholder.com/1200x900
    thumbnail: http://via.placeholder.com/120x90
    w: 1200
    h: 900
  - src: http://via.placeholder.com/800x600
    thumbnail: http://via.placeholder.com/80x60
    w: 800
    h: 600
---

### گالری تصاویر بند انگشتی

ما یک بسته‌بندی سفارشی Vue برای کتابخانه `Photo Swipe` نوشتیم، بنابراین ایجاد یکپارچه گالری‌های تصویر را برای شما آسان می‌کند. آرایه ای از `items` را برای ایجاد گالری خود ارسال کنید.

<!--code-->

```vue
<script setup lang="ts">
const items = [
  {
    src: 'http://via.placeholder.com/600x400',
    thumbnail: 'http://via.placeholder.com/60x40',
    w: 600,
    h: 400,
    alt: 'optional alt attribute for thumbnail image',
  },
  {
    src: 'http://via.placeholder.com/1200x900',
    thumbnail: 'http://via.placeholder.com/120x90',
    w: 1200,
    h: 900,
  },
  {
    src: 'http://via.placeholder.com/800x600',
    thumbnail: 'http://via.placeholder.com/80x60',
    w: 800,
    h: 600,
  },
]
</script>

<template>
  <VPhotosSwipe :items="items" />
</template>
```

<!--/code-->

<!--example-->

<VPhotosSwipe :items="frontmatter.items" />

<!--/example-->
