---
state:
  input: ''
---

### VField

Vuero با `VField`، `VControl` و `VLabel` ارائه می‌شود که کامپوننت های کاربردی برای نوشتن آسان **فرم‌های قابل دسترس** هستند.
کامپوننت `VField` یک ورودی منحصر به فرد را پیگیری می کند.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VLabel>نام کاربری</VLabel>
    <VControl>
      <VInput v-model="input" type="text" placeholder="john.doe" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VLabel>نام کاربری</VLabel>
  <VControl>
    <VInput v-model="frontmatter.state.input" type="text" placeholder="john.doe" />
  </VControl>
</VField>

<!--/example-->
