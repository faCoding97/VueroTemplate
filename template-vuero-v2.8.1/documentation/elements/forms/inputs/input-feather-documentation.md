### Feather Icons

Vuero `VInput` کاملاً با هر آیکونی از [icones.js] (https://icones.js.org/) سازگار است.
برای نشان دادن یک آیکون از کامپوننت `<VControl />` از `icon` یا `iconify` استفاده کنید.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="feather:github">
      <VInput type="text" class="is-rounded" placeholder="لینک گیتهاب" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl icon="feather:github">
    <VInput
      type="text"
      class="is-rounded"
      placeholder="لینک گیتهاب"
    />
  </VControl>
</VField>

<!--/example-->
