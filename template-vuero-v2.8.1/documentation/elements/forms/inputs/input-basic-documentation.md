---
state:
  input: ''
---

### VInput

Vuero کنترل های فرم جذاب را با حداقل یک ظاهر طراحی می کند.
`VInput` همه ویژگی‌هایی را می‌پذیرد که `<input>` می‌پذیرد.
همیشه اینپوت های خود را در یک `<VField />` و `VControl />` قرار دهید تا فرم ها را سریع و کارآمد بسازید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl>
      <VInput v-model="input" type="text" placeholder="نام کاربری شما" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VInput
      v-model="frontmatter.state.input"
      type="text"
      placeholder="نام کاربری شما"
    />
  </VControl>
</VField>

<!--/example-->
