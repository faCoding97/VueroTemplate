---
state:
  value: ''
---

### VIMaskInput

Vuero با کامپوننت `<IMask Input />` عرضه می‌شود، یک بسته‌بندی در اطراف [کتابخانه جاوا اسکریپت imask] عالی (https://imask.js.org/).
برای جزئیات بیشتر کد را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <VIMaskInput
        :id="id"
        v-model="value"
        autocomplete="cc-csc"
        class="input"
        :options="{
          mask: '000',
        }"
        placeholder="کد 3 قمی"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField v-slot="{ id }">
  <VControl>
    <v-i-mask-input
      :id="id"
      v-model="frontmatter.state.value"
      autocomplete="cc-csc"
      class="input"
      :options="{
        mask: '000',
      }"
      placeholder="کد 3 قمی"
    />
  </VControl>
</VField>

<!--/example-->
