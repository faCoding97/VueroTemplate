---
state:
  flipped: false
---

### VCreditCard

Vuero با کامپوننت `<VCreditCard />`، یک پیش‌نمایش کارت اعتباری سفارشی، عرضه می‌شود. برای جزئیات بیشتر کد را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const flipped = ref(null)
</script>

<template>
  <VField>
    <VControl>
      <VCreditCard color="grey" :flipped="flipped" @flip="flipped = !flipped" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField class="credit-card">
  <VControl>
    <VCreditCard
      color="grey"
      :flipped="frontmatter.state.flipped"
      @flip="frontmatter.state.flipped = !frontmatter.state.flipped"
    />
  </VControl>
</VField>

<!--/example-->
