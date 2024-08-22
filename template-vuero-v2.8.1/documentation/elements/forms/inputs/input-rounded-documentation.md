### اینپوت گرد شده

شما به راحتی می توانید شکل `VInput` را در داخل فیلد تغییر دهید.
به سادگی کلاس `is-rounded` را به المنت `input` Html اضافه کنید.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <VInput type="text" class="is-rounded" placeholder="نام کاربری" />
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
      class="is-rounded"
      placeholder="نام کاربری"
    />
  </VControl>
</VField>

<!--/example-->
