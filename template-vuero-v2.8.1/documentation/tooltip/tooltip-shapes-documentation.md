### شکل های تولتیپ

تولتیپ Vuero بر اساس آنچه در طراحی خود نیاز دارید، می تواند اشکال مختلفی داشته باشد.
اصلاح‌کننده‌های شکل موجود عبارتند از: `.rounded` و `.bubble`.

توجه داشته باشید که تولتیپ bubble به طور پیش فرض دارای حروف بزرگ است
و فلش تولتیپ ندارد.

<!--code-->

```vue {4,10,16}
<template>
  <VTags>
    <VTag v-tooltip="'من یک تولتیپ پیشفرض هستم'" color="solid" label="پیش فرض" />
    <VTag v-tooltip.rounded="'من یک تولتیپ گرد شده هستم'" color="solid" label="Rounded" />
    <VTag v-tooltip.bubble="'من یک تولتیپ حبابی هستم'" color="solid" label="Bubble" />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VTags>
  <VTag v-tooltip="'من یک تولتیپ پیشفرض هستم'" color="solid" label="پیش فرض" />
  <VTag v-tooltip.rounded="'من یک تولتیپ گرد شده هستم'" color="solid" label="Rounded" />
  <VTag v-tooltip.bubble="'من یک تولتیپ حبابی هستم'" color="solid" label="Bubble" />
</VTags>

<!--/example-->
