---
state:
  textarea: ''
---

### VTextarea

Vuero کنترل های فرم جذاب را با حداقل یک ظاهر طراحی می کند.
`VTextarea` همه ویژگی هایی را که `<textarea>` می پذیرد، می پذیرد.
می توانید طول متن کادر را با ویژگی `rows="*"` کنترل کنید.
همیشه اینپوت های خود را در یک `<VField />` و `VControl />` قرار دهید تا فرم‌ها را سریع و کارآمد بسازید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        rows="4"
        placeholder="یک پیام طولانی تر..."
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
      rows="4" 
      placeholder="یک پیام طولانی تر..." 
      v-model="frontmatter.state.textarea"
    ></VTextarea>
  </VControl>
</VField>

<!--/example-->
