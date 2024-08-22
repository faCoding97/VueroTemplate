---
state:
  input: 3
---

### تنظیم اندازه

شما می توانید اندازه کامپوننت رتبه بندی را با استفاده از پراپ `size` که می باشد تنظیم کنید

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
        <VRangeRating v-model="input" label="کوچک" size="small" />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="پیش فرض" />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="متوسط" size="medium" />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="لارج" size="large" />
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-model="input" label="ایکس لارج" size="xlarge" />
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div
  class="is-flex is-flex-wrap-wrap"
  :style="{ gap: '2rem' }"
>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="کوچک" size="small" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="پیش فرض" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="متوسط" size="medium" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="لارج" size="large" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VRangeRating v-model="frontmatter.state.input" label="ایکس لارج" size="xlarge" />
    </VControl>
  </VField>
</div>

<!--/example-->
