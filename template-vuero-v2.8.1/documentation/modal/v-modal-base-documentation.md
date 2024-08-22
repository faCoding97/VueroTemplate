### VModal

Vuero با یک کامپوننت ساده و همه کاره `<VModal />` عرضه می شود.
کامپوننت VModal دارای 2 اسلات موجود است: یکی برای `content`،
بنابراین می توانید هر چیزی را که می خواهید داخل آن قرار دهید، و یکی برای `action` اولیه. برای جزئیات بیشتر، نمونه کد را بررسی کنید.

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
