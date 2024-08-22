### اندازه های مدال

کامپوننت `<VModal />` می تواند اندازه های مختلفی داشته باشد.برای تغییر اندازه مدال از اندازه `true` استفاده کنید. اندازه‌های موجود عبارتند از: `small`، پیش‌فرض،
`medium`، `big` و `large`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const centeredActionsOpen = ref(false)
</script>

<template>
  <VButton bold @click="centeredActionsOpen = true"> باز کردن مدال </VButton>

  <VModal
    :open="centeredActionsOpen"
    size="small"
    actions="center"
    @close="centeredActionsOpen = false"
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
