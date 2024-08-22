### Font Awesome solid

یک کامپوننت `<VSnack />` را ارائه می دهد که می تواند برای نشان دادن یک پیل (pill) با یک تصویر استفاده شود. برای درج محتوای خود از پراپ `slots` موجود استفاده کنید.
اگر می‌خواهید یک آیکون سالید نشان دهید، پراپ `solid` را به کامپوننت اضافه کنید.برای جزئیات بیشتر نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<template>
  <VSnack title="خرید" color="primary" solid icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white solid icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" solid icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white solid icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white solid icon="fas fa-thermometer-half">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="خرید" color="primary" solid icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white solid icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" solid icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white solid icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white solid icon="fas fa-thermometer-half">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
