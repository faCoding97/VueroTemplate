### آیکون های کوچک

کامپوننت های `<VSnack />` میتوانند در سایز های کوچکتر نمایش داده شوند.
از پراپ `size="small"` در کامپوننت برای نمایش نسخه کوچکتر آن استفاده کنید .

<!--code-->

```vue
<template>
  <VSnack title="خرید" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="خرید" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white size="small" icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white size="small" icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white size="small" icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
  <VSnack title="خرید" white size="small" icon="feather:shopping-cart">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="خرید" color="primary" size="small" icon="feather:smile">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="پشتیبانی" color="success" white size="small" icon="feather:life-buoy">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="بیزینس" color="info" size="small" icon="feather:briefcase">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="هشدار" color="warning" white size="small" icon="feather:alert-octagon">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
  <VSnack title="سلامتی" color="danger" white size="small" icon="feather:thermometer">
    <i class="iconify" data-icon="feather:plus"></i>
  </VSnack>
</div>

<!--/example-->
