### لودینگ (Loading)

یک `VTextarea` را می توان در حالت بارگذاری نشان داد. برای این کار، باید آن را داخل یک المنت کنترل بپیچید. سپس، به سادگی پراپ `loading` را به کامپوننت بسته بندی `<VControl />` اضافه کنید.
لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
const loading = ref(true)
</script>

<template>
  <VField>
    <VControl :loading="loading">
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
  <VControl loading>
    <VTextarea
      rows="4" 
      placeholder="یک پیام طولانی تر..."
    ></VTextarea>
  </VControl>
</VField>

<!--/example-->
