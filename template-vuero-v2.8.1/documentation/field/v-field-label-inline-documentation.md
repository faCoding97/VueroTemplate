### برچسب Inline

می‌توانید ویژگی `horizontal ` `VField` را تنظیم کنید تا برچسب inline شود.

<!--code-->

```vue
<template>
  <VField label="نام کاربری" horizontal>
    <VControl fullwidth>
      <VInput type="text" placeholder="John" />
    </VControl>
  </VField>
  <VField label="نام خانوادگی" horizontal>
    <VControl fullwidth>
      <VInput type="text" placeholder="Doe" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField label="نام کاربری" horizontal>
  <VControl fullwidth>
    <VInput type="text" placeholder="John" />
  </VControl>
</VField>
<VField label="نام خانوادگی" horizontal>
  <VControl fullwidth>
    <VInput type="text" placeholder="Doe" />
  </VControl>
</VField>

<!--/example-->
