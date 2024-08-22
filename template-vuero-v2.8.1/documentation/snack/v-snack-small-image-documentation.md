### تصاویر کوچک

کامپوننت های `<VSnack />` میتوانند در سایز های کوچکتر نمایش داده شوند.
از پراپ `size="small"` در کامپوننت برای نمایش نسخه کوچکتر آن استفاده کنید .

<!--code-->

```vue
<template>
  <VSnack title="پشتیبانی" image="/demo/photos/misc/buoy.jpg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="متامووی" image="/images/icons/logos/metamovies.svg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="شرکت های بزرگ" image="/demo/avatars/7.jpg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack
    title="انگلیسی"
    image="/images/icons/flags/united-states-of-america.svg"
    size="small"
  >
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
  <VSnack title="اسلایسر" image="/images/icons/logos/slicer.svg" size="small">
    <i class="iconify" data-icon="feather:x"></i>
  </VSnack>
</template>
```

<!--/code-->

<!--example-->

<div class="snacks">
    <VSnack title="پشتیبانی" image="/demo/photos/misc/buoy.jpg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="متامووی" image="/images/icons/logos/metamovies.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="شرکت های بزرگ" image="/demo/avatars/7.jpg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="انگلیسی" image="/images/icons/flags/united-states-of-america.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
    <VSnack title="اسلایسر" image="/images/icons/logos/slicer.svg" size="small">
        <i class="iconify" data-icon="feather:x"></i>
    </VSnack>
</div>

<!--/example-->
