### ردیابی شناسه

هدف اصلی کامپوننت `VField` پیگیری یک ورودی منحصر به فرد است.
سپس می‌توان از آن برای تنظیم ویژگی‌های `for` و `aria-describedby` استفاده کرد.
می توانید زمینه فیلد جدیدی را با استفاده از ویژگی `subcontrol` در کامپوننت های `Control` و `Field` ایجاد کنید.

<!--code-->

```vue
<template>
  <VField v-slot="{ id }" grouped>
    <VLabel class="has-fullwidth">فیلد {{ id }} را متمرکز کنید</VLabel>
    <VControl v-slot="{ id }" subcontrol>
      <VInput type="text" placeholder="فوکوس دریافت نخواهد کرد" />
      <p class="help">شناسه فیلد : {{ id }}</p>
    </VControl>
    <VControl v-slot="{ id }" subcontrol>
      <VInput type="text" placeholder="فوکوس دریافت خواهد کرد" />
      <p class="help">شناسه فیلد : {{ id }}</p>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped v-slot="{ id }">
  <VLabel class="has-fullwidth">فیلد {{ id }} را متمرکز کنید</VLabel>
  <VControl subcontrol v-slot="{ id }">
    <VInput type="text" placeholder="فوکوس دریافت نخواهد کرد" />
    <p class="help">شناسه فیلد : {{ id }}</p>
  </VControl>
  <VControl v-slot="{ id }" subcontrol>
    <VInput type="text" placeholder="فوکوس دریافت خواهد کرد" />
    <p class="help">شناسه فیلد : {{ id }}</p>
  </VControl>
</VField>

<!--/example-->
