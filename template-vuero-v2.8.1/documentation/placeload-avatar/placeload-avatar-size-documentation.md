### اندازه

اندازه کامپوننت `<VPlaceloadAvatar />` را برای مطابقت با رابط کاربری خود کنترل کنید. می‌توانید ویژگی‌های `size` را بر اساس نیاز خود تنظیم کنید

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VPlaceloadAvatar class="mx-1" size="small" />
    <VPlaceloadAvatar class="mx-1" size="medium" />
    <VPlaceloadAvatar class="mx-1" size="large" />
    <VPlaceloadAvatar class="mx-1" size="big" />
    <VPlaceloadAvatar class="mx-1" size="xl" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VPlaceloadAvatar class="mx-1" size="small" />
  <VPlaceloadAvatar class="mx-1" size="medium" />
  <VPlaceloadAvatar class="mx-1" size="large" />
  <VPlaceloadAvatar class="mx-1" size="big" />
  <VPlaceloadAvatar class="mx-1" size="xl" />
</VFlex>

<!--/example-->
