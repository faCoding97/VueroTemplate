---
state:
  value: true
---

### برچسب بلاک

ممکن است در برخی موارد مجبور شوید یک برچسب به سوئیچ های خود اضافه کنید.
اگر چنین است، از کامپوننت `VSwitchBlock` استفاده کنید، که یک طرح بندی خوب و تمیز flexbox را ارائه می دهد. برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <VField>
    <VControl>
      <VSwitchBlock v-model="value" label="برخی گزینه ها" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VField>
    <VControl>
      <VSwitchBlock
        v-model="frontmatter.state.value"
        label="برخی گزینه ها"
      />
    </VControl>
  </VField>
</div>

<!--/example-->
