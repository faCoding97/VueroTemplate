### رنگ ها

کامپوننت های `<VButton />` می توانند رنگ های متفاوتی داشته باشند.
برای تغییر رنگ آن، از پراپ `color` روی کامپوننت استفاده کنید.
مقادیر رنگ موجود عبارتند از : `primary`, `info`, `success`, `warning`,
`danger` و `white`.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary"> دکمه </VButton>
    <VButton color="info"> دکمه </VButton>
    <VButton color="success"> دکمه </VButton>
    <VButton color="warning"> دکمه </VButton>
    <VButton color="danger"> دکمه </VButton>
    <VButton color="white"> دکمه </VButton></VButtons
  >
</template>
```

<!--/code-->

<!--example-->

<VButtons>
    <VButton color="primary">
        دکمه
    </VButton>
    <VButton color="info">
        دکمه
    </VButton>
    <VButton color="success">
        دکمه
    </VButton>
    <VButton color="warning">
        دکمه
    </VButton>
    <VButton color="danger">
        دکمه
    </VButton>
    <VButton color="white">
        دکمه
    </VButton>
</VButtons>

<!--/example-->
