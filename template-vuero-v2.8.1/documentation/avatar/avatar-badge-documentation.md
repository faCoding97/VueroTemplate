### نشان (badge )آواتار

آواتارهای Vuero می توانند تصاویر نشان را به خود متصل کنند.
به سادگی یک URL تصویر با نسبت 1:1 را با استفاده از پراپ `badge` به کامپوننت آواتار اضافه کنید

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar
      picture="/demo/avatars/7.jpg"
      size="small"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      picture="/images/avatars/svg/vuero-1.svg"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      picture="/demo/avatars/11.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="medium"
    />
    <VAvatar
      picture="/demo/avatars/21.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="large"
    />
    <VAvatar
      picture="/demo/avatars/13.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="big"
    />
    <VAvatar
      picture="/demo/avatars/5.jpg"
      badge="/images/icons/flags/united-states-of-america.svg"
      size="xl"
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->
<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar picture="/demo/avatars/11.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="medium" />
  <VAvatar picture="/demo/avatars/21.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="large" />
  <VAvatar picture="/demo/avatars/13.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="big" />
  <VAvatar picture="/demo/avatars/5.jpg" badge="/images/icons/flags/united-states-of-america.svg" size="xl" />
</VFlex>

<!--/example-->
