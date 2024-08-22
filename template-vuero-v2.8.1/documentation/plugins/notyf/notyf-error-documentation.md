### تست (toast) خطا

Vuero با `Notyf` یکپارچه شده است، یک کتابخانه toasting جاوا اسکریپت ساده وانیلا .
می توانید مستندات افزونه را بررسی کنید
<a href="https://github.com/caroso1222/notyf" target="_blank">گیتهاب</a>.
تست خطا یکی از 2 تست پیش فرض notyf است.

<!--code-->

```vue
<script setup lang="ts">
import { Notyf } from 'notyf'

const notyf = new Notyf()
const errorToast = () => {
  notyf.error('به نظر می رسد مشکلی پیش آمده است')
}
</script>

<template>
  <VButton bold @click="errorToast">Error Toast</VButton>
</template>
```

<!--/code-->
