### Font Awesome

یک کامپوننت `<VSnack />` را ارائه می دهد که می تواند برای نشان دادن یک پیل (pill) با یک تصویر استفاده شود. برای درج محتوای خود از پراپ `slots` موجود استفاده کنید. برای جزئیات بیشتر نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<template>
  <VSnack title="خرید" white icon="fas fa-shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="خرید" color="primary" icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white icon="fas fa-thermometer-half">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="خرید" white icon="fas fa-shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="خرید" color="primary" icon="fas fa-smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white icon="fas fa-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" icon="fas fa-building">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white icon="fas fa-radiation">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack
    title="سلامتی"
    color="danger"
    white
    icon="fas fa-thermometer-half"
  >
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
