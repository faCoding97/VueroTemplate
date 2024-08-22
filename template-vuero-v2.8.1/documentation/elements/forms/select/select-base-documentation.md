---
state:
  input: ''
---

### VSelect

Vuero کنترل های فرم جذاب را با حداقل یک ظاهر طراحی می کند.
`VSelect` همه ویژگی هایی را که `<select>` می پذیرد، می پذیرد.
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
  <VControl>
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
