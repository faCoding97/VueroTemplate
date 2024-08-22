---
state:
  input: []
---

### چند انتخابه

Vuero `VSelect` می تواند ویژگی `multiple` داشته باشد.
لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string[]>([])
</script>

<template>
  <VField>
    <VControl>
      <VSelect v-model="input" multiple size="8">
        <VOptgroup label="Marvel">
          <VOption value="Spider-Man">اسپایدر-من</VOption>
          <VOption value="Professor X" disabled>پروفسور X</VOption>
          <VOption value="Deadpool">ددپول</VOption>
        </VOptgroup>
        <VOptgroup label="DC">
          <VOption value="Batman">بتمن</VOption>
          <VOption value="Superman">سوپرمن</VOption>
          <VOption value="Green Lantern">فانوس سبز </VOption>
        </VOptgroup>
        <VOptgroup label="Looney Tunes" disabled>
          <VOption value="Bugs Bunny">بانی خرگوشه </VOption>
          <VOption value="Daffy Duck">اردک ابله </VOption>
          <VOption value="Marvin the Martian">ماروین مریخی </VOption>
        </VOptgroup>
      </VSelect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VSelect v-model="frontmatter.state.input" multiple size="8">
      <VOptgroup label="Marvel">
        <VOption value="Spider-Man">اسپایدر-من</VOption>
        <VOption value="Professor X" disabled>پروفسور X</VOption>
        <VOption value="Deadpool">ددپول</VOption>
      </VOptgroup>
      <VOptgroup label="DC">
        <VOption value="Batman">بتمن</VOption>
        <VOption value="Superman">سوپرمن</VOption>
        <VOption value="Green Lantern">فانوس سبز </VOption>
      </VOptgroup>
      <VOptgroup label="Looney Tunes" disabled>
        <VOption value="Bugs Bunny">بانی خرگوشه </VOption>
        <VOption value="Daffy Duck">اردک ابله </VOption>
        <VOption value="Marvin the Martian">ماروین مریخی </VOption>
      </VOptgroup>
    </VSelect>
    <p class="help">دکمه <kbd>Ctrl</kbd> (ویندوز) / <kbd>Command</kbd> (Mac) را برای انتخاب چندین گزینه نگه دارید.</p>
  </VControl>
</VField>

<!--/example-->
