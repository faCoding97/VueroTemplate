### Line Icons

یک کامپوننت `<VSnack />` را ارائه می دهد که می تواند برای نشان دادن یک پیل (pill) با یک تصویر استفاده شود. برای درج محتوای خود از پراپ `slots` موجود استفاده کنید. برای جزئیات بیشتر نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<template>
  <VSnack title="خرید" white icon="lnil lnil-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="خرید" color="primary" icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white icon="lnil lnil-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white icon="lnil lnil-warning">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white icon="lnil lnil-thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="خرید" white icon="lnil lnil-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="خرید" color="primary" icon="lnil lnil-sleep">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white icon="lnil lnil-life-ring">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" icon="lnil lnil-apartment">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white icon="lnil lnil-warning">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white icon="lnil lnil-thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
