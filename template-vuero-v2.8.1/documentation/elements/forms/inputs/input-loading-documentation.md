### لودینگ اینپوت

یک `VInput` را می توان در حالت بارگیری نشان داد.To
برای اعمال این استایل، به سادگی پراپ `loading` را به کامپوننت بسته بندی `<VControl />` اضافه کنید.

<!--code-->

```vue
<template>
  <VField>
    <VControl loading>
      <VInput type="text" placeholder="نام کاربری" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl loading>
    <VInput
      type="text"
      placeholder="نام کاربری"
    />
  </VControl>
</VField>

<!--/example-->
