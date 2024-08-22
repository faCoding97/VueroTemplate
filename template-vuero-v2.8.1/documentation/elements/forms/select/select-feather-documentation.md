---
state:
  input: ''
---

### Feather Icons

Vuero `VSelect` می تواند به آیکون ها متصل شود.
آنها به خوبی با Feather Icons کار می کنند. می توانید یک المنت آیکون را در داخل سلکت اضافه کنید.
لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl class="has-icons-left" icon="feather:globe">
      <VSelect v-model="input">
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
  <VControl class="has-icons-left" icon="feather:globe">
    <VSelect v-model="frontmatter.state.input">
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
