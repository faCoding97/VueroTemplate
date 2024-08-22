### حالت تیره (Dark)

`<VIconWrap />` را با پراپ های `dark`, `darkPrimary`
و `darkCardBordered` سفارشی کنید.  
برای جزئیات بیشتر در مورد استفاده به کد مراجعه کنید.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap icon="feather:star" dark="1" />
    <VIconWrap icon="feather:star" dark="2" />
    <VIconWrap icon="feather:star" />
    <VIconWrap icon="feather:star" dark="4" />
    <VIconWrap icon="feather:star" dark="5" />
    <VIconWrap icon="feather:star" dark="6" />
  </VFlex>
  <VFlex class="mt-2" column-gap="3px">
    <VIconWrap icon="feather:star" dark="1" dark-card-bordered />
    <VIconWrap icon="feather:star" dark="1" />
    <VIconWrap icon="feather:star" dark="6" dark-card-bordered />
    <VIconWrap icon="feather:star" dark="6" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap icon="feather:star" dark="1" />
    <VIconWrap icon="feather:star" dark="2" />
    <VIconWrap icon="feather:star" />
    <VIconWrap icon="feather:star" dark="4" />
    <VIconWrap icon="feather:star" dark="5" />
    <VIconWrap icon="feather:star" dark="6" />
  </VFlex>
  <VFlex class="mt-2" column-gap="3px">
    <VIconWrap icon="feather:star" dark="1" dark-card-bordered />
    <VIconWrap icon="feather:star" dark="1" />
    <VIconWrap icon="feather:star" dark="6" dark-card-bordered />
    <VIconWrap icon="feather:star" dark="6" />
  </VFlex>
</div>

<!--/example-->
