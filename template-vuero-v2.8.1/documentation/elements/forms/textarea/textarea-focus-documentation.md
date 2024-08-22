---
state:
  textarea: ''
---

### رنگ های فوکوس (Focus)

مانند سایر کنترل‌های فرم، `VTextarea»` می‌تواند هنگام فوکوس کردن، رنگ‌های حاشیه متفاوتی داشته باشد.به سادگی کلاس اصلاح کننده رنگ مناسب را اضافه کنید.
کلاس های موجود شامل `is-primary-focus`, `is-success-focus`,
`is-info-focus`, `is-warning-focus`, `is-danger-focus` میباشند.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <!-- is-primary-focus -->
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        class="is-primary-focus"
        rows="2"
        placeholder="Primary..."
      ></VTextarea>
    </VControl>
  </VField>

  <!-- is-success-focus -->
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        class="is-success-focus"
        rows="2"
        placeholder="Success..."
      ></VTextarea>
    </VControl>
  </VField>

  <!-- is-info-focus -->
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        class="textarea is-info-focus"
        rows="2"
        placeholder="Info..."
      ></VTextarea>
    </VControl>
  </VField>

  <!-- is-warning-focus -->
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        class="textarea is-warning-focus"
        rows="2"
        placeholder="Warning..."
      ></VTextarea>
    </VControl>
  </VField>

  <!-- is-danger-focus -->
  <VField>
    <VControl>
      <VTextarea
        v-model="textarea"
        class="textarea is-danger-focus"
        rows="2"
        placeholder="Danger..."
      ></VTextarea>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VField>
    <VControl>
      <VTextarea
        v-model="frontmatter.state.textarea"
        class="textarea is-primary-focus"
        rows="2"
        placeholder="Primary..."
      ></VTextarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VTextarea
        v-model="frontmatter.state.textarea"
        class="textarea is-success-focus"
        rows="2"
        placeholder="Success..."
      ></VTextarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VTextarea
        v-model="frontmatter.state.textarea"
        class="textarea is-info-focus"
        rows="2"
        placeholder="Info..."
      ></VTextarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VTextarea
        v-model="frontmatter.state.textarea"
        class="textarea is-warning-focus"
        rows="2"
        placeholder="Warning..."
      ></VTextarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VTextarea
        v-model="frontmatter.state.textarea"
        class="textarea is-danger-focus"
        rows="2"
        placeholder="Danger..."
      ></VTextarea>
    </VControl>
  </VField>
</div>

<!--/example-->
