---
state:
  input: 2
---

### VRangeRating

Vuero کامپوننت رتبه بندی اعداد را با حداقل استایلینگ ارائه می دهد.
`VRangeRating` مانند یک گروه دکمه رادیویی با سبک سفارشی عمل می کند، به این معنی که می توانید از پیمایش صفحه کلید برای انتخاب رتبه استفاده کنید.
همیشه اینپوت های خود را در یک `<VField />` و `VControl />` قرار دهید تا فرم ها را سریع و کارآمد بسازید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref(2)
</script>

<template>
  <VField>
    <VControl>
      <VRangeRating v-model="input" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VRangeRating
      v-model="frontmatter.state.input"
    />
  </VControl>
</VField>

<!--/example-->
