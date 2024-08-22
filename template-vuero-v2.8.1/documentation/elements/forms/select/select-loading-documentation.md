---
state:
  input: 'Batman'
---

### لودینگ سلکت و غیرفعال

vuero `VSelect` را می توان در حالت بارگیری نشان داد. برای اعمال آن سبک، به سادگی ویژگی `loading` را به المنت بسته بندی `VControl` اضافه کنید.
ویژگی `disabled` باید مانند رفتار پیش‌فرض روی `VSelect` تنظیم شود.
لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl loading class="has-icons-left" icon="lnil lnil-basketball">
      <VSelect v-model="input" disabled>
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
  <VControl loading class="has-icons-left" icon="lnil lnil-basketball">
    <VSelect v-model="frontmatter.state.input" disabled>
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
