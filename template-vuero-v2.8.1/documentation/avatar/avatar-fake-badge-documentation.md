### نشان جعلی

هنگامی که URL تصویر ارائه شده خالی است، کامپوننت آواتار به یک آواتار جعلی برمی گردد. آواتارهای جعلی نیز می توانند نشان داشته باشند.
برای جزئیات بیشتر در مورد استفاده، نمونه کد را ببینید.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar
      initials="CT"
      size="small"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar initials="CT" badge="/images/icons/flags/united-states-of-america.svg" />
    <VAvatar
      initials="CT"
      size="medium"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      initials="CT"
      size="large"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      initials="CT"
      size="big"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      initials="CT"
      size="xl"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="small" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="medium" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="large" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="big" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="xl" badge="/images/icons/flags/united-states-of-america.svg" />
</VFlex>

<!--/example-->
