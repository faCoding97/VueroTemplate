### محتوا

می توانید محتوا را در کامپوننت `<VCardAction />` اضافه کنید. مانند هر اسلات کامپوننت دیگری عمل خواهد کرد.

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
    <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
      شرایط فعلی تکنولوژی مورد نیاز
    </p>
  </VCardAction>
</template>
```

<!--/code-->
