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

### تصاویر شاخص منحنی

ما یک بسته‌بندی سفارشی Vue برای کتابخانه `Photo Swipe` نوشتیم، بنابراین ایجاد یکپارچه گالری‌های تصویر را برای شما آسان می‌کند. border radius تصاویر کوچک قابل تنظیم است. مقدار `5` را به `thumbnailRadius` ارسال کنید تا مرزهای منحنی نشان داده شود.

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
  <VPhotosSwipe :items="items" thumbnail-radius="5" />
</template>
```

<!--/code-->

<!--example-->

<VPhotosSwipe :items="frontmatter.items" thumbnailRadius="5" />

<!--/example-->
