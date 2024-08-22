### Placeload

کامپوننت های `<VButton />` می توانند وضعیت بارگذاری مکان داشته باشند.
برای تغییر وضعیت آن از پراپ `placeload` روی کامپوننت استفاده کنید.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton placeload="40px"> دکمه</VButton>
    <VButton placeload="40px" color="primary"> دکمه</VButton>
    <VButton placeload="40px" color="info"> دکمه</VButton>
    <VButton placeload="40px" color="success"> دکمه</VButton>
    <VButton placeload="40px" color="warning"> دکمه</VButton>
    <VButton placeload="40px" color="danger"> دکمه</VButton>
    <VButton placeload="40px" color="white"> دکمه</VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons class="placeload-wrap">
    <VButton placeload="40px"> دکمه</VButton>
    <VButton placeload="40px" color="primary"> دکمه</VButton>
    <VButton placeload="40px" color="info"> دکمه</VButton>
    <VButton placeload="40px" color="success"> دکمه</VButton>
    <VButton placeload="40px" color="warning"> دکمه</VButton>
    <VButton placeload="40px" color="danger"> دکمه</VButton>
    <VButton placeload="40px" color="white"> دکمه</VButton>
</VButtons>

<!--/example-->
