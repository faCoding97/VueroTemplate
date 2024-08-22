### گزینه های مدال

رفتار کامپوننت `<VModal />` را می توان سفارشی کرد. برای غیرفعال کردن اسکرول صفحه هنگامی که مدال باز است، از پراپ `noscroll` استفاده کنید.
همچنین می‌توانید از `noclose` برای جلوگیری از بسته شدن مدال در صورتی که کاربر روی پوشش پس‌زمینه کلیک کند، استفاده کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <VButton bold @click="isOpen = true"> Open Modal </VButton>

  <VModal
    :open="isOpen"
    size="small"
    actions="center"
    noscroll
    noclose
    @close="isOpen = false"
  >
    <template #content>
      <VPlaceholderSection
        title="دریافت پرمیوم"
        subtitle="قفل ویژگی‌ها و ابزارهای تجاری بیشتر را با استفاده از دریافت پرمیوم باز کنید"
      />
    </template>
    <template #action>
      <VButton color="primary" raised>تایید</VButton>
    </template>
  </VModal>
</template>
```

<!--/code-->
