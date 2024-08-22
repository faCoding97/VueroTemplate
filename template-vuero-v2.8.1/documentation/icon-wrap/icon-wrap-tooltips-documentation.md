### تولتیپ

میتوانید دستور `v-tooltip` را به کامپوننت `<VIconWrap />` اضافه کنید.  
برای جزئیات بیشتر در مورد استفاده به کد مراجعه کنید.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap
      v-tooltip.rounded="'من یک تولتیپ گرد شده هستم'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap
      v-tooltip.rounded="'من یک تولتیپ گرد شده هستم'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <VIconWrap
      v-tooltip.info.rounded="'من یک تولتیپ گرد شده هستم'"
      icon="bi:question-lg"
      color="info"
    />
  </VFlex>
</div>

<!--/example-->
