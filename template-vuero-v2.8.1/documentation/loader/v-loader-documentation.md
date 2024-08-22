### VLoader

Vuero با یک کامپوننت ساده و همه کاره `<VLoader />` عرضه می شود.
این لودر بیشتر مبتنی بر CSS است و با ارسال یک مقدار `true` به پراپ `active` فعال می شود.می‌توانید اندازه لودر را با استفاده از `size` تغییر دهید.
4 اندازه موجود است: `small` default, `large` و `xl`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}
</script>

<template>
  <VLoader size="large" :active="isLoaderActive">
    <!-- content ... --->
  </VLoader>
</template>
```

<!--/code-->
