### آواتار مربعی

آواتارها می توانند به جای شکل دایره، شکل مربع داشته باشند، با افزودن پراپ `squared` به کامپوننت آواتار.
برای جزئیات بیشتر در مورد استفاده به کد مراجعه کنید.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar picture="/demo/avatars/7.jpg" size="small" squared />
    <VAvatar picture="/images/avatars/svg/vuero-1.svg" squared />
    <VAvatar picture="/demo/avatars/11.jpg" size="medium" squared />
    <VAvatar picture="/demo/avatars/21.jpg" size="large" squared />
    <VAvatar picture="/demo/avatars/13.jpg" size="big" squared />
    <VAvatar picture="/demo/avatars/5.jpg" size="xl" squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" squared />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" squared />
  <VAvatar picture="/demo/avatars/11.jpg" size="medium" squared />
  <VAvatar picture="/demo/avatars/21.jpg" size="large" squared />
  <VAvatar picture="/demo/avatars/13.jpg" size="big" squared />
  <VAvatar picture="/demo/avatars/5.jpg" size="xl" squared />
</VFlex>

<!--/example-->
