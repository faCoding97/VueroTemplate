### Line Icons

Vuero `VInput` کاملاً با Line Icons سازگار است.
برای نشان دادن یک آیکون، از `icon` یا `iconify` در کامپوننت `<VControl />` استفاده کنید.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="lnil lnil-briefcase">
      <VInput type="text" placeholder="شرکت" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="lnil lnil-briefcase">
    <VInput
      type="text"
      placeholder="شرکت"
    />
  </VControl>
</VField>

<!--/example-->
