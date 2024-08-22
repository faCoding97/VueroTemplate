### اینپوت غیرفعال

یک `Vinput` را می توان در حالت غیرفعال نشان داد. برای اعمال این سبک، به سادگی ویژگی `disabled` را به المنت اینپوت هدف اضافه کنید.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <VInput type="text" placeholder="نام کاربری" disabled />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VInput
      type="text"
      placeholder="نام کاربری"
      disabled
    />
  </VControl>
</VField>

<!--/example-->
