### تست (toast) اطلاعات

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
      type: 'info',
      background: themeColors.info,
      icon: {
        className: 'fas fa-info-circle',
        tagName: 'i',
        text: '',
      },
    },
  ],
})
const infoToast = () => {
  notyf.open({
    type: 'info',
    message: 'این اطلاعات مفیدی است که ممکن است به آن نیاز داشته باشید.',
  })
}
</script>

<template>
  <VButton bold @click="infoToast">Info Toast</VButton>
</template>
```

<!--/code-->
