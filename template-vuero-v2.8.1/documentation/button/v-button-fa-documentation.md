### Font Awesome

`<VButton />` components work well with Font Awesome Icons.
اجزای `<VButton />` به خوبی با آیکون های Font Awesome کار می کنند.
Add an icon name inside the `icon` prop to set a Font Awesome icon.
برای تنظیم آیکون Font Awesome یک نام آیکون را در قسمت `icon` اضافه کنید.
همچنین می توانید با استفاده از کامپوننت `<VIconButton />` دکمه های مربع و دایره را با یک آیکون ایجاد کنید.
لطفاً برای نمونه های دقیق به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" icon="fab fa-twitter" elevated> توئیت کن </VButton>
    <VButton color="success" icon="fas fa-check" raised rounded>ذخیره تغییرات </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="primary" icon="fab fa-twitter" elevated>
    توئیت کن
  </VButton>
  <VButton color="success" icon="fas fa-check" raised rounded>
   ذخیره تغییرات
  </VButton>
</VButtons>

<!--/example-->
