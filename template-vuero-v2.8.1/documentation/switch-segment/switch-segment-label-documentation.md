---
state:
  value: true
---

### برچسب

ممکن است در برخی موارد مجبور شوید یک برچسب به سوئیچ های خود اضافه کنید.
اگر چنین است، از کامپوننت `VSwitchSegment` استفاده کنید که ویژگی‌های `labelTrue` و `labelFalse` را ارائه می‌کند. برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <VField horizontal>
    <VControl>
      <VSwitchSegment
        v-model="value"
        label-true="روشن"
        label-false="خاموش"
        color="primary"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl>
    <VSwitchSegment
      v-model="frontmatter.state.value"
      label-true="روشن"
      label-false="خاموش"
      color="primary"
    />
  </VControl>
</VField>

<!--/example-->
