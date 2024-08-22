### افزونه های گرد شده

از آنجایی که افزونه های اینپوت المنت دکمه هستند، کلاس های اصلاح کننده معمولی برای آنها اعمال می شود.
می‌توانید از `rounded` در اینپوت و دکمه داخل المنت افزونه برای ایجاد یک فیلد گرد با افزونه‌ها استفاده کنید.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl expanded>
      <VInput type="text" class="input is-rounded" placeholder="جستجوی ریپازیتوری" />
    </VControl>
    <VControl>
      <VButton color="primary" rounded>جستجو</VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl expanded>
    <VInput type="text" class="input is-rounded" placeholder="جستجوی ریپازیتوری" />
  </VControl>
  <VControl>
    <VButton color="primary" rounded>جستجو</VButton>
  </VControl>
</VField>

<!--/example-->
