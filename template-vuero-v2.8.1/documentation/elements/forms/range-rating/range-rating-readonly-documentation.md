---
state:
  input: 2
---

### فقط خواندنی و غیرفعال

برای اینکه کامپوننت رتبه‌بندی فقط خواندنی یا غیرفعال باشد، از `readonly`و disabled`استفاده کنید.
`readonly` با غیرفعال کردن تعامل کاربر، کامپوننت رتبه‌بندی را فقط خواندنی می‌کند، در حالی که prop`disabled` با غیرفعال کردن تغییرات مقدار، کامپوننت رتبه‌بندی را غیرفعال می‌کند.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <div
    class="is-flex is-justify-content-space-between is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="Readonly" readonly />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="Disabled" disabled />
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div>
  <div
    class="is-flex is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating v-model="frontmatter.state.input" label="Readonly" readonly />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="frontmatter.state.input" label="Disabled" disabled />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
