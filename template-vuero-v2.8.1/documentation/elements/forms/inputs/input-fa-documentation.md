### Font Awesome

Vuero `VInput` کاملاً با آیکون های Font Awesome 5 سازگار است.
برای نشان دادن یک آیکون از پراپ `iconed` در کامپوننت `<VControl />` استفاده کنید.
شما همچنین باید یک نوع آیکون را با استفاده از `icon` یا `iconify` ارائه دهید.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="fab fa-twitter">
      <VInput type="text" class="is-rounded" placeholder="نام کاربری" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="fab fa-twitter">
    <VInput
      type="text"
      class="is-rounded"
      placeholder="نام کاربری"
    />
  </VControl>
</VField>

<!--/example-->
