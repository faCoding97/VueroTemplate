### VIconWrap

کامپوننت `<VIconWrap />` به شما امکان می دهد آیکون ها را به روشی فانتزی و رنگی نمایش دهید.
برای جزئیات بیشتر در مورد استفاده به کد مراجعه کنید.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap icon="feather:star" />
    <VIconWrap icon="feather:help-circle" color="info" has-background has-large-icon />
    <VIconWrap icon="feather:x" color="danger" />
    <VIconWrap icon="feather:code" />
    <VIconWrap picture="/images/avatars/svg/vuero-1.svg" />
    <VIconWrap picture="/demo/avatars/13.jpg" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap icon="feather:star" color="warning" />
    <VIconWrap icon="feather:code" />
    <VIconWrap icon="feather:x" color="danger" has-large-icon />
    <VIconWrap
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <VIconWrap picture="/images/avatars/svg/vuero-1.svg" />
    <VIconWrap picture="/demo/avatars/13.jpg" />
  </VFlex>
</div>

<!--/example-->
