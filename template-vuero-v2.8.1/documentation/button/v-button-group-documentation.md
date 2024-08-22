### گروه دکمه

می توانید به راحتی کامپوننت های `<VButton />` را تراز کرده و با قرار دادن آنها در داخل یک المنت `<VButtons />` آنها را با هم گروه بندی کنید.
می توانید هر سبک دکمه ای را با هم ترکیب کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton icon="feather:eye"> مشاهده </VButton>
    <VButton icon="feather:edit-2"> مشاهده </VButton>
    <VButton color="primary" icon="fas fa-check" elevated> تایید </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton icon="feather:eye">
    مشاهده
  </VButton>
  <VButton icon="feather:edit-2">
    مشاهده
  </VButton>
  <VButton color="primary" icon="fas fa-check" elevated>
    تایید
  </VButton>
</VButtons>

<!--/example-->
