### VSnack سفید

یک کامپوننت `<VSnack />` را ارائه می دهد که می تواند برای نشان دادن یک پیل (pill) با یک تصویر استفاده شود. از پراپ `image` برای وارد کردن تصویر درون کامپوننت استفاده کنید.
همچنین می‌توانید برای سفید کردن پس‌زمینه کامپوننت از پراپ `white` استفاده کنید.

<!--code-->

```vue
<template>
  <VSnack title="پشتیبانی" white image="/demo/photos/misc/buoy.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="متامووی" white image="/images/icons/logos/metamovies.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="شرکت های بزرگ" white image="/demo/avatars/7.jpg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="انگلیسی" white image="/images/icons/flags/united-states-of-america.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="اسلایسر" white image="/images/icons/logos/slicer.svg">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <VSnack title="پشتیبانی" white  image="/demo/photos/misc/buoy.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="متامووی" white  image="/images/icons/logos/metamovies.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="شرکت های بزرگ" white  image="/demo/avatars/7.jpg">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="انگلیسی" white  image="/images/icons/flags/united-states-of-america.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="اسلایسر" white  image="/images/icons/logos/slicer.svg">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
</div>

<!--/example-->
