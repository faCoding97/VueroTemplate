### تست (toast ) نارنجی

در کنار دو نوع native `Notyf` به شما امکان می‌دهد انواع تست سفارشی ایجاد کنید. می‌توانید تمام پیش‌فرض‌های گزینه موجود، مانند `position` یا `duration` را تغییر دهید. می‌توانید نوع تست جدید را پیکربندی کنید و حتی آیکون دلخواه خود را اختصاص دهید.
برای جزئیات بیشتر، نمونه کد را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { Notyf } from 'notyf'

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'bottom',
  },
  types: [
    {
      type: 'orange',
      background: themeColors.orange,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
  ],
})
const orangeToast = () => {
  notyf.open({
    type: 'orange',
    message: 'این اطلاعات مفیدی است که ممکن است به آن نیاز داشته باشید.',
  })
}
</script>

<template>
  <VButton bold @click="orangeToast">Orange Toast</VButton>
</template>
```

<!--/code-->
