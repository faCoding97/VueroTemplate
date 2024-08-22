---
state:
  value: 54
---

### تولتیپ منحنی (Curved)

از کلاس `has-curved-tooltip` در کامپوننت `<VField />` برای نمایش یک تولتیپ منحنی شکل استفاده کنید. از مقادیر بزرگتر از تولتیپ گرد پشتیبانی می کند.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField v-slot="{ id }" class="has-curved-tooltip">
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
    <VField v-slot="{ id }" class="pt-5 px-4 has-curved-tooltip">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
