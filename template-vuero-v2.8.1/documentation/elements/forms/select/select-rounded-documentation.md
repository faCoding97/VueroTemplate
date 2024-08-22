---
state:
  input: ''
---

### سلکت گرد شده

Vuero `VSelect` می‌تواند لبه‌های گرد داشته باشد.مانند سایر کنترل ها،
به سادگی کلاس is-rounded را به المنت Select wrapper اضافه کنید.
لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl>
      <VSelect v-model="input" class="is-rounded">
        <VOption value="">انتخاب قهرمان</VOption>
        <VOption value="Superman">سوپرمن</VOption>
        <VOption value="Batman">بتمن</VOption>
        <VOption value="Spiderman">اسپایدرمن</VOption>
        <VOption value="Deadpool">ددپول</VOption>
        <VOption value="Spawn">اسپان</VOption>
        <VOption value="Galactus">گالاکتوس</VOption>
      </VSelect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VSelect v-model="frontmatter.state.input" class="is-rounded">
      <VOption value="">انتخاب قهرمان</VOption>
      <VOption value="Superman">سوپرمن</VOption>
      <VOption value="Batman">بتمن</VOption>
      <VOption value="Spiderman">اسپایدرمن</VOption>
      <VOption value="Deadpool">ددپول</VOption>
      <VOption value="Spawn">اسپان</VOption>
      <VOption value="Galactus">گالاکتوس</VOption>
    </VSelect>
  </VControl>
</VField>

<!--/example-->
