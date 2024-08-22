---
state:
  value1: 78
  value2: 24
  value3: 52
  value4: 61
---

### رنگ های اسلایدر

کامپوننت `<Slider />` از چندین رنگ پشتیبانی می کند. رنگ پیش‌فرض، رنگ `$primary` است.اصلاح کننده های کلاس رنگ عبارتند از : `is-slider-info`,
`is-slider-success`, `is-slider-warning`, `is-slider-danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <VField v-slot="{ id }" class="has-rounded-tooltip is-slider-info">
    <VControl>
      <Slider :id="id" v-model="value" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns is-multiline">
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-info">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value1" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-success">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value2" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-warning">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value3" />
      </VControl>
    </VField>
  </div>
  <div class="column is-6">
    <VField v-slot="{ id }" class="pt-6 px-4 has-rounded-tooltip is-slider-danger">
      <VControl>
        <Slider :id="id" v-model="frontmatter.state.value4" />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
