### رنگ های Tooltip

تولتیپ Vuero می تواند رنگ های مختلفی داشته باشد که با یک کلاس CSS ساده قابل تغییر است. Available color
کلاس‌های رنگی موجود عبارتند از: `.light`، `.اصلی`،
`.info`، `.موفقیت`، `.warning`و`.error`.

<!--code-->

```vue {4,10,16,22,28,34,40}
<template>
  <VTags>
    <VTag v-tooltip="'من یک راهنمای رنگ default هستم'" color="solid" label="پیش فرض" />

    <VTag v-tooltip.light="'من یک راهنمای رنگ light  هستم'" color="solid" label="Light" />

    <VTag
      v-tooltip.primary="'من یک راهنمای رنگ primary  هستم'"
      color="solid"
      label="Primary"
    />

    <VTag v-tooltip.info="'من یک راهنمای رنگ info  هستم'" color="solid" label="Info" />

    <VTag
      v-tooltip.success="'من یک راهنمای رنگ موفقیت هستم'"
      color="solid"
      label="Success"
    />

    <VTag
      v-tooltip.warning="'من یک راهنمای رنگ warning  هستم'"
      color="solid"
      label="Warning"
    />

    <VTag v-tooltip.error="'من یک راهنمای رنگ error هستم'" color="solid" label="Error" />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VTags>
  <VTag
    v-tooltip="'من یک راهنمای رنگ default هستم'"
    color="solid"
    label="پیش فرض"
  />
  <VTag
    v-tooltip.light="'من یک راهنمای رنگ light  هستم'"
    color="solid"
    label="Light"
  />
  <VTag
    v-tooltip.primary="'من یک راهنمای رنگ primary  هستم'"
    color="solid"
    label="Primary"
  />
  <VTag
    v-tooltip.info="'من یک راهنمای رنگ info  هستم'"
    color="solid"
    label="Info"
  />
  <VTag
    v-tooltip.success="'من یک راهنمای رنگ موفقیت هستم'"
    color="solid"
    label="Success"
  />
  <VTag
    v-tooltip.warning="'من یک راهنمای رنگ warning  هستم'"
    color="solid"
    label="Warning"
  />
  <VTag
    v-tooltip.error="'من یک راهنمای رنگ error هستم'"
    color="solid"
    label="Error"
  />
</VTags>

<!--/example-->
