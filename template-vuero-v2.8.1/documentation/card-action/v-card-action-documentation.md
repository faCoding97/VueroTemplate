### VCardAction

کامپوننت `<VCardAction />` تقویت کننده و پورت Vue از کامپوننت bulma card کلاسیک است، روشی درجه یک و آسان برای نمایش محتوای پست. این کامپوننت دارای چندین ویژگی برای ارسال در محتوایی است که می خواهید نمایش دهید.
برای جزئیات بیشتر، نمونه کد را بررسی کنید.

<!--code-->

<!--code-->

```vue
<template>
  <VCardAction
    avatar="/demo/avatars/19.jpg"
    badge="/images/icons/flags/germany.svg"
    title="سعید ح."
    subtitle="مدیر فروش"
  >
    <template #action>
      <VTag color="green" label="در حال ترند شدن" rounded />
    </template>
  </VCardAction>
</template>
```

<!--/code-->
