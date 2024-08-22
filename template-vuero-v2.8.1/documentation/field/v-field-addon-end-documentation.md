### افزونه های VField

اگر نیاز به نمایش اطلاعات متنی دارید، اینپوت ها می‌توانند افزونه‌هایی داشته باشند.
می‌توانید یک افزونه را در انتهای `<VField />` با پراپ `addons` ضمیمه کنید.
برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField label="حساب جیمیل" addons>
    <VControl expanded>
      <VInput type="text" class="input" placeholder="نام کاربری" />
    </VControl>
    <VControl>
      <VButton static>@gmail.com</VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField label="حساب جیمیل" addons>
  <VControl expanded>
    <VInput
      type="text"
      class="input"
      placeholder="نام کاربری"
    />
  </VControl>
  <VControl>
    <VButton static>@gmail.com</VButton>
  </VControl>
</VField>

<!--/example-->
