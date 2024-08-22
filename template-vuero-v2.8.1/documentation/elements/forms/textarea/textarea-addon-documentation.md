---
state:
  textarea: ''
---

### افزونه های VTextarea

`VTextarea` که توسط یک کنترل و یک فیلد پیچیده می شود، می تواند یک افزونه پایینی داشته باشد. می توانید از آن برای نمایش نوار ابزار یا هر نوع عملکرد کاربر استفاده کنید.
از پراپ `textaddon` در `<VField />` و کامپوننت دوم `<VControl />` استفاده کنید. لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <VField textaddon>
    <VControl>
      <VTextarea
        v-model="textarea"
        rows="4"
        placeholder="یک پیام طولانی تر..."
      ></VTextarea>
    </VControl>

    <VControl textaddon>
      <div class="start">
        <div class="avatar-stack">
          <VAvatar picture="/demo/avatars/7.jpg" size="small" />
          <VAvatar initials="JO" color="info" size="small" />
          <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" />
        </div>
      </div>
      <div class="end">
        <VButton color="primary" raised>ارسال نظر</VButton>
      </div>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField textaddon>
  <VControl>
    <VTextarea
      v-model="frontmatter.state.textarea"
      rows="4"
      placeholder="یک پیام طولانی تر..."
    ></VTextarea>
  </VControl>
  <VControl textaddon>
    <div class="start">
      <div class="avatar-stack">
        <VAvatar picture="/demo/avatars/7.jpg" size="small" />
        <VAvatar initials="JO" color="info" size="small" />
        <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" />
      </div>
    </div>
    <div class="end">
      <VButton color="primary" raised>ارسال نظر</VButton>
    </div>
  </VControl>
</VField>

<!--/example-->
