### بالا رفتن (Elevation)

کاپوننت های `<VButton />` را می توان با استفاده از باکس شدو(box shadow) بالا برد.
برای نشان دادن باکس شدو (Box shadow) در هاور از پراپ `raised` استفاده کنید یا برای تنظیم باکس شدو (Box shadow) دائمی از پراپ `elevated` استفاده کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" raised> دکمه</VButton>
    <VButton color="info" raised> دکمه</VButton>
    <VButton color="success" raised> دکمه</VButton>
    <VButton color="warning" raised> دکمه</VButton>
    <VButton color="danger" elevated> دکمه</VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
    <VButton color="primary" raised>
        Button
    </VButton>
    <VButton color="info" raised>
        Button
    </VButton>
    <VButton color="success" raised>
        Button
    </VButton>
    <VButton color="warning" raised>
        Button
    </VButton>
    <VButton color="danger" elevated>
        Button
    </VButton>
</VButtons>

<!--/example-->
