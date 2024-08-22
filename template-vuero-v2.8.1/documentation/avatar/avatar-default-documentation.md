### VAvatar

کامپوننت های `<VAvatar />` تصاویر گردی هستند که برای رسانه ها و صفحات شخصی استفاده می شوند.اندازه آواتار را می توان با پراپ `size` کنترل کرد.
مقادیر پراپ موجود برای اندازه عبارتند از : `small`, `medium`, `large`, `big` و `xl`.
برای جزئیات بیشتر در مورد استفاده به کد مراجعه کنید.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar picture="/demo/avatars/7.jpg" size="small" />
    <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
    <VAvatar picture="/demo/avatars/11.jpg" size="medium" />
    <VAvatar picture="/demo/avatars/21.jpg" size="large" />
    <VAvatar picture="/demo/avatars/13.jpg" size="big" />
    <VAvatar picture="/demo/avatars/5.jpg" size="xl" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar picture="/demo/avatars/7.jpg" size="small" />
  <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
  <VAvatar picture="/demo/avatars/11.jpg" size="medium" />
  <VAvatar picture="/demo/avatars/21.jpg" size="large" />
  <VAvatar picture="/demo/avatars/13.jpg" size="big" />
  <VAvatar picture="/demo/avatars/5.jpg" size="xl" />
</VFlex>

<!--/example-->
