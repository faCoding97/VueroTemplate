### Feather icons

کامپوننت های `<VButton />` به خوبی با آیکون های Feather icon کار می کنند.
برای تنظیم آیکون Feather icon یک نام آیکون را در قسمت `icon` اضافه کنید.

همچنین می توانید با استفاده از کامپوننت `<VIconButton />` دکمه های مربع و دایره را با یک آیکون ایجاد کنید.
لطفاً برای نمونه های دقیق به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="info" icon="feather:twitter" elevated> توئیت کن </VButton>
    <VButton color="danger" icon="feather:gitlab" raised rounded> Commit Code </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="info" icon="feather:twitter" elevated>
      توئیت کن
  </VButton>
  <VButton color="danger" icon="feather:gitlab" raised rounded>
      کامیت کد
  </VButton>
</VButtons>

<!--/example-->
