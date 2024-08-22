---
state:
  input: 7
---

### برچسب قابل دسترسی

برای افزودن یک برچسب به کامپوننت رتبه‌بندی، از پایه `label` استفاده کنید. همچنین می‌توانید از اسلات `label` برای سفارشی کردن برچسب استفاده کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <VField>
    <VControl>
      <VRangeRating v-model="input" label="امتیاز دهی" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VRangeRating
      v-model="frontmatter.state.input"
      label="امتیاز دهی"
    />
  </VControl>
</VField>

<!--/example-->
