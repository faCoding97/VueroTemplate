### مربعی جعلی

هنگامی که URL تصویر ارائه شده خالی است، کامپوننت آواتار یک آواتار جعلی را نمایش میدهد. اصلاح کننده های هم اندازه موجود هستند.
برای ارسال حروف اول به کامپوننت از پراپ `initials` استفاده کنید.
برای جزئیات بیشتر در مورد استفاده، نمونه کد را ببینید.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar initials="CT" size="small" squared />
    <VAvatar initials="CT" squared />
    <VAvatar initials="CT" size="medium" squared />
    <VAvatar initials="CT" size="large" squared />
    <VAvatar initials="CT" size="big" squared />
    <VAvatar initials="CT" size="xl" squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="small" squared />
  <VAvatar initials="CT" squared />
  <VAvatar initials="CT" size="medium" squared />
  <VAvatar initials="CT" size="large" squared />
  <VAvatar initials="CT" size="big" squared />
  <VAvatar initials="CT" size="xl" squared />
</VFlex>

<!--/example-->
