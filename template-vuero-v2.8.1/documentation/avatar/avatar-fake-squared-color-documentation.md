### رنگ های مربعی جعلی

آواتارهای جعلی می توانند رنگ های مختلفی برای شکستن یکنواختی داشته باشند.
می‌توانید رنگ آواتار را با انتقال یکی از مقادیر زیر به پراپ `color` تغییر دهید: `primary`, `success`, `info`, `warning`, `danger`,
`h-purple`, `h-orange`, `h-blue`, `h-green`, `h-red`, `h-yellow`.
از حالت تیره(دارک) پشتیبانی میکند.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar initials="CT" size="medium" squared />
    <VAvatar initials="CT" size="medium" color="primary" squared />
    <VAvatar initials="CT" size="medium" color="success" squared />
    <VAvatar initials="CT" size="medium" color="info" squared />
    <VAvatar initials="CT" size="medium" color="warning" squared />
    <VAvatar initials="CT" size="medium" color="danger" squared />
    <VAvatar initials="CT" size="medium" color="h-purple" squared />
    <VAvatar initials="CT" size="medium" color="h-orange" squared />
    <VAvatar initials="CT" size="medium" color="h-blue" squared />
    <VAvatar initials="CT" size="medium" color="h-green" squared />
    <VAvatar initials="CT" size="medium" color="h-red" squared />
    <VAvatar initials="CT" size="medium" color="h-yellow" squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="medium" squared/>
  <VAvatar initials="CT" size="medium" color="primary" squared />
  <VAvatar initials="CT" size="medium" color="success" squared />
  <VAvatar initials="CT" size="medium" color="info" squared />
  <VAvatar initials="CT" size="medium" color="warning" squared />
  <VAvatar initials="CT" size="medium" color="danger" squared />
  <VAvatar initials="CT" size="medium" color="h-purple" squared />
  <VAvatar initials="CT" size="medium" color="h-orange" squared />
  <VAvatar initials="CT" size="medium" color="h-blue" squared />
  <VAvatar initials="CT" size="medium" color="h-green" squared />
  <VAvatar initials="CT" size="medium" color="h-red" squared />
  <VAvatar initials="CT" size="medium" color="h-yellow" squared />
</VFlex>

<!--/example-->
