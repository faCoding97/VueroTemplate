### افزونه های VTags

اجزای `<VTag />` را می توان در یک المنت افزودنی تگ با هم پیچیده کرد.
برای انجام این کار، 2 کامپوننت تگ را در یک المنت `<VTags addons />` قرار دهید.
برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VTags addons>
    <VTag label="پکیج" />
    <VTag label="بولما" color="primary" />
  </VTags>
  <VTags addons>
    <VTag label="علی زمانی" color="primary" />
    <VTag remove />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VTags addons>
      <VTag label="پکیج" />
      <VTag label="بولما" color="primary" />
    </VTags>
    <VTags addons>
      <VTag label="علی زمانی" color="primary" />
      <VTag remove />
    </VTags>
  </VControl>
</VField>

<!--/example-->
