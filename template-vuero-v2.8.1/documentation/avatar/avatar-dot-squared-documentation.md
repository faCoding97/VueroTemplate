### نقطه مربعی

به عنوان مثال، اگر می‌خواهید وضعیت کاربری را نشان دهید، آواتارها می‌توانند یک نقطه کوچک داشته باشند که به آنها متصل باشد. پراپ `dot` را به کامپونت آواتار هدف اضافه کنید. برای جزئیات بیشتر در مورد استفاده به کد مراجعه کنید.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar picture="/demo/avatars/7.jpg" size="small" dot squared />
    <VAvatar picture="/images/avatars/svg/vuero-1.svg" dot squared />
    <VAvatar picture="/demo/avatars/11.jpg" size="medium" dot squared />
    <VAvatar picture="/demo/avatars/21.jpg" size="large" dot squared />
    <VAvatar picture="/demo/avatars/13.jpg" size="big" dot squared />
    <VAvatar picture="/demo/avatars/5.jpg" size="xl" dot squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" dot squared />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" dot squared />
  <VAvatar picture="/demo/avatars/11.jpg" size="medium" dot squared />
  <VAvatar picture="/demo/avatars/21.jpg" size="large" dot squared />
  <VAvatar picture="/demo/avatars/13.jpg" size="big" dot squared />
  <VAvatar picture="/demo/avatars/5.jpg" size="xl" dot squared />
</VFlex>

<!--/example-->
