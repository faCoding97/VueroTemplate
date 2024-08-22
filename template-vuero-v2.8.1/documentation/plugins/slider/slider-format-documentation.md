---
state:
  value: 54
---

### فرمت تولتیپ

کامپوننت `<Slider />`اجازه می دهد تا یک تابع قالب بندی را به ویژگی `format` آن منتقل کنید. می توانید مقدار tooltip را با فرمتی که می خواهید برگردانید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(54)
const format = (value) => {
  return `${value}%`
}
</script>

<template>
  <VField v-slot="{ id }" class="has-curved-tooltip">
    <VControl>
      <Slider :id="id" v-model="value" :format="format" />
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
        <Slider
          :id="id" 
          v-model="frontmatter.state.value" 
          :format="(value) => value + '%'" 
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
