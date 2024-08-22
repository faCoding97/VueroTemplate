### غیرفعال

اجزای `<VButton />` می توانند غیرفعال شوند و به رویدادهای اشاره گر پاسخگو نباشند.
برای تنظیم یک دکمه در حالت غیرفعال از پراپ `disabled` استفاده کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" disabled> دکمه</VButton>
    <VButton color="info" disabled> دکمه</VButton>
    <VButton color="success" disabled> دکمه</VButton>
    <VButton color="warning" disabled> دکمه</VButton>
    <VButton color="danger" disabled> دکمه</VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="primary" disabled>
      دکمه
  </VButton>
  <VButton color="info" disabled>
      دکمه
  </VButton>
  <VButton color="success" disabled>
      دکمه
  </VButton>
  <VButton color="warning" disabled>
      دکمه
  </VButton>
  <VButton color="danger" disabled>
      دکمه
  </VButton>
</VButtons>

<!--/example-->
