### آکاردئون تصویر

یک تصویر آزمایشی و سرگرم کننده خوب فقط با CSS
کامپوننت آکاردئون: `<VAccordionImage />`.
تصاویر به سادگی روی موبایل جمع می شوند.
برای رندر کردن آکاردئون، یک **آرایه** را به کامپوننت `items` ارسال کنید.
برای جزئیات بیشتر در مورد استفاده، نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    image: 'https://source.unsplash.com/FV3GConVSss/1600x900',
    title: 'بخش اداری I',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/rRiAzFkJPMo/1600x900',
    title: 'بخش اداری II',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/tvleqH3p1os/1600x900',
    title: '12 مناظر عالی',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/-Xv7k95vOFA/1600x900',
    title: 'ملاقات تیم',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/F6NvgzU3RfM/1600x900',
    title: 'طیف های بنفش',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
  {
    image: 'https://source.unsplash.com/5E5N49RWtbA/1600x900',
    title: 'یادداشت آبی',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
  },
]
</script>

<template>
  <div class="column is-12">
    <VAccordionImage :items="accordionImagesData" />
  </div>
</template>
```

<!--/code-->
