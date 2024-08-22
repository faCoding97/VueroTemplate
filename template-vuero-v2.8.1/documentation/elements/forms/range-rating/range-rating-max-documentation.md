---
state:
  input: 7
---

### تغییر مقادیر حداکثر

می‌توانید حداکثر مقدار کامپوننت رتبه‌بندی را با استفاده از `max` که پیش‌فرض`۵` است، تغییر دهید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <VField>
    <VControl>
      <VRangeRating v-model="input" :max="10" />
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
      :max="10"
    />
  </VControl>
</VField>

<!--/example-->
