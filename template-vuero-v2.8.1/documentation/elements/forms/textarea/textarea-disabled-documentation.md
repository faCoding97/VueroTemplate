---
state:
  textarea: ''
  disabled: true
---

### غیرفعال

`VTextarea` را می توان در حالت غیرفعال نشان داد.برای این کار، باید آن را درون یک کامپوننت `<VControl />` بپیچید. به سادگی ویژگی `disabled` را به المنت textarea هدف اضافه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
const disabled = ref(true)
</script>

<template>
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        rows="4"
        placeholder="یک پیام طولانی تر..."
        :disabled="disabled"
      ></VTextarea>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VTextarea
      v-model="frontmatter.state.textarea"
      rows="4"
      placeholder="یک پیام طولانی تر..."
      :disabled="frontmatter.state.disabled"
    ></VTextarea>
  </VControl>
</VField>

<!--/example-->
