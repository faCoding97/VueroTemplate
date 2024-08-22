### متن کمکی

شما می توانید به راحتی یک متن راهنما اضافه کنید تا کاربران را در هنگام تعامل با فرم های شما راهنمایی کند. برای تزریق رشته متن کمکی خود، از پراپ `help` کامپوننت `<VField />` استفاده کنید. See the code example
for more details about usage.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <VInput type="text" placeholder="نام کاربری" />
      <p class="help">انتخاب نام کاربری مناسب</p>
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
    />
    <p class="help">انتخاب نام کاربری مناسب</p>
  </VControl>
</VField>

<!--/example-->
