---
state:
  option1: true
  option2: false
  option3: false
  option4: true
  option5: false
  option6: false
---

### VCheckbox

Vuero چک باکس‌های سبک پیش‌فرض را در 2 سبک اصلی، `outlined` (پیش‌فرض) و `solid` ارائه می‌کند.
این چک باکس ها همچنین از تمام رنگ های اصلی پشتیبانی می کنند.
رنگ های در دسترس شامل : `primary`, `success`, `info`,
`warning`, `danger` میباشد.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const option1 = ref(true)
const option2 = ref(false)
const option3 = ref(false)
const option4 = ref(true)
const option5 = ref(false)
const option6 = ref(false)
</script>

<template>
  <VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox v-model="option1" label="گزینه  1" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option2" label="گزینه  2" color="primary" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option3" label="گزینه  3" color="info" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option4" label="گزینه  4" color="success" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option5" label="گزینه  5" color="warning" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="option6" label="گزینه  6" color="danger" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option1" label="گزینه  1" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option2" label="گزینه  2" color="primary" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option3" label="گزینه  3" color="info" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option4" label="گزینه  4" color="success" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option5" label="گزینه  5" color="warning" />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox v-model="frontmatter.state.option6" label="گزینه  6" color="danger" />
    </VControl>
  </VField>

<!--/example-->
