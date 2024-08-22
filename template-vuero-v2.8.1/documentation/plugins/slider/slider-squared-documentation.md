---
state:
  value: 36
---

### تولتیپ مربعی

از کلاس `has-squared-tooltip` در کامپوننت `<VField />` برای نشان دادن یک تولتیپ مربعی شکل استفاده کنید. از مقادیر بزرگتر از تولتیپ گرد پشتیبانی می کند.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField v-slot="{ id }" class="has-squared-tooltip">
    <VControl>
      <Slider :id="id" v-model="value" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-5 px-4 has-squared-tooltip">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
