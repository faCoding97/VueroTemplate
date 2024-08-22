### رنگ های روشن

رنگ ثابت `<VButton />` می تواند رنگ بسیار روشن تری از رنگ اصلی خود داشته باشد.
برای تنظیم یک رنگ ثابت از پراپ `color` استفاده کنید و برای ایجاد یک دکمه با رنگ روشن از پراپ اصلاح کننده `light` استفاده کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" light> دکمه</VButton>
    <VButton color="info" light> دکمه</VButton>
    <VButton color="success" light> دکمه</VButton>
    <VButton color="warning" light> دکمه</VButton>
    <VButton color="danger" light> دکمه</VButton>
    <VButton light> دکمه</VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="primary" light> دکمه</VButton>
  <VButton color="info" light> دکمه</VButton>
  <VButton color="success" light> دکمه</VButton>
  <VButton color="warning" light> دکمه</VButton>
  <VButton color="danger" light> دکمه</VButton>
  <VButton light> دکمه</VButton>
</VButtons>

<!--/example-->
