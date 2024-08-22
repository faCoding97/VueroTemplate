---
state:
  value:
    - 20
    - 50
    - 70
  merge: 10
---

### ادغام تولتیپ

کامپوننت `<Slider />` می‌تواند به‌طور خودکار چندین تولتیپ را هنگامی که به آستانه خاصی رسید، ادغام کند.
مقدار `merge` را مشخص کنید و آن را به پراپ `:merge` ارسال کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref([20, 50, 70])
const merge = 10
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Slider :id="id" v-model="value" :merge="merge" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns mt-2">
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-5 px-4 is-slider-info">
      <VControl>
        <Slider 
          :id="id"
          v-model="frontmatter.state.value" 
          :merge="frontmatter.state.merge"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
