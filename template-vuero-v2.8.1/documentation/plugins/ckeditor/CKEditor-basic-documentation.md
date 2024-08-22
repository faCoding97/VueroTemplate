### CKEditor

هر برنامه ای به یک کامپوننت ویرایشگر متن غنی نیاز دارد. Vuero با افزونه [CK Editor](https://ckeditor.com/docs/ckeditor5/latest/index.html) همراه است. مثال زیر حالت ویرایشگر پیش فرض را نشان می دهد.تعداد بیشتری وجود دارد، اما این افزونه از وارد کردن همه تغییرات ویرایشگر پشتیبانی نمی کند. شما باید یکی را انتخاب کنید و به آن ادامه دهید.دیگر طرح‌بندی‌های موجود را می‌توانید پیدا کنید [اینجا (https://ckeditor.com/docs/ckeditor5/latest/index.html).

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const CKEditor = CKE.component
const editorData = ref(`<h2>Your HTML Content</h2>`)
const config = {
  fontFamily: {
    options: ['"Montserrat", sans-serif', '"Roboto", sans-serif'],
  },
}
</script>

<template>
  <div class="content">
    <CKEditor v-model="content" :editor="ClassicEditor" :config="config"></CKEditor>
  </div>
</template>
```

<!--/code-->
