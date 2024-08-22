### افزونه های ابتدا

اگر نیاز به نمایش اطلاعات متنی دارید، اینپوت ها می‌توانند افزونه‌هایی داشته باشند.

می‌توانید یک افزونه را در ابتدای یک `<VField />` با پراپ `addons` ضمیمه کنید.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl>
      <VButton static>+1</VButton>
    </VControl>
    <VControl expanded>
      <VInput type="text" class="input" placeholder="نام کاربری" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl>
    <VButton static>+1</VButton>
  </VControl>
  <VControl expanded>
    <VInput type="text" class="input" placeholder="نام کاربری" />
  </VControl>
</VField>

<!--/example-->
