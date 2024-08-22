### VTooltip

Vuero یک دستورالعمل همه کاره v-tooltip بسیار ساده ارائه می دهد.
مثال زیر نسخه پیش فرض و پایه است.

۶ موقعیت پیش‌فرض وجود دارد که با اصلاح‌کننده‌ها قابل دسترسی است: `top-left`،
`top-right`، `.bottom-left`، `.bottom`، `.bottom-right`و `.top-center`.

<!--code-->

```vue {4,10,16,22,28,34}
<template>
  <VTags>
    <VTag v-tooltip.left="'من یک تولتیپ بالا-چپ هستم'" color="solid" label="Top Left" />

    <VTag v-tooltip="'من یک تولتیپ بالا-وسط هستم'" color="solid" label="Top Center" />

    <VTag
      v-tooltip.right="'من یک تولتیپ بالا-راست هستم'"
      color="solid"
      label="Top Right"
    />

    <VTag
      v-tooltip.bottom.left="'من یک تولتیپ پایین-چپ هستم'"
      color="solid"
      label="Bottom Left"
    />

    <VTag
      v-tooltip.bottom="'من یک تولتیپ پایین-وسط هستم'"
      color="solid"
      label="Bottom Center"
    />

    <VTag
      v-tooltip.bottom.right="'من یک تولتیپ پایین-راست هستم'"
      color="solid"
      label="Bottom Right"
    />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VTags>
  <VTag
    v-tooltip.left="'من یک تولتیپ بالا-چپ هستم'"
    color="solid"
    label="Top Left"
  />
  <VTag
    v-tooltip="'من یک تولتیپ بالا-وسط هستم'"
    color="solid"
    label="Top Center"
  />
  <VTag
    v-tooltip.right="'من یک تولتیپ بالا-راست هستم'"
    color="solid"
    label="Top Right"
  />
  <VTag
    v-tooltip.bottom.left="'من یک تولتیپ پایین-چپ هستم'"
    color="solid"
    label="Bottom Left"
  />
  <VTag
    v-tooltip.bottom="'من یک تولتیپ پایین-وسط هستم'"
    color="solid"
    label="Bottom Center"
  />
  <VTag
    v-tooltip.bottom.right="'من یک تولتیپ پایین-راست هستم'"
    color="solid"
    label="Bottom Right"
  />
</VTags>

<!--/example-->
