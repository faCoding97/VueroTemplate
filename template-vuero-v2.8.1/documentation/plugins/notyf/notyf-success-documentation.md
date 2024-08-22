### تست (toast) موفقیت

Vuero با `Notyf` یکپارچه شده است، یک کتابخانه toasting جاوا اسکریپت ساده وانیلا .
می‌توانید اسناد افزونه را در<a href="https://github.com/caroso1222/notyf" target="_blank">گیتهاب</a> بررسی کنید. تست موفقیت یکی از 2 تست پیش فرض notyf است.

<!--code-->

```vue
<script setup lang="ts">
import { Notyf } from 'notyf'

const notyf = new Notyf()
const successToast = () => {
  notyf.success('تغییرات شما با موفقیت ذخیره شد!')
}
</script>

<template>
  <VButton bold @click="successToast">تست موفقیت</VButton>
</template>
```

<!--/code-->
