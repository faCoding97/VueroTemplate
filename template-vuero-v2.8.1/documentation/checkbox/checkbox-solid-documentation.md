---
state:
  options: false
---

### مقدار آبجکت پیچیده

می‌توانید با استفاده از `trueValue` و `falseValue` از مقادیر آبجکت پیچیده (Complex object value) برای ذخیره وضعیت چک باکس استفاده کنید.
توجه داشته باشید که چک باکس جایگزین با ویژگی `solid` استایل میشود. این چک باکس‌ها همچنین از همه رنگ‌های اصلی پشتیبانی می‌کنند.
اصلاح کننده های موجود عبارتند از : `primary`, `success`, `info`,
`warning`, `danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(false)
</script>

<template>
  <VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option1', label: 'Option 1' }"
        label="گزینه  1"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option2', label: 'Option 2' }"
        label="گزینه  2"
        color="primary"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option3', label: 'Option 3' }"
        label="گزینه  3"
        color="info"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option4', label: 'Option 4' }"
        label="گزینه  4"
        color="success"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option5', label: 'Option 5' }"
        label="گزینه  5"
        color="warning"
        solid
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        :true-value="{ name: 'option6', label: 'Option 6' }"
        label="گزینه  6"
        color="danger"
        solid
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField class="is-flex">
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option1', label: 'Option 1' }"
      label="گزینه  1"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option2', label: 'Option 2' }"
      label="گزینه  2"
      color="primary"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option3', label: 'Option 3' }"
      label="گزینه  3"
      color="info"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option4', label: 'Option 4' }"
      label="گزینه  4"
      color="success"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option5', label: 'Option 5' }"
      label="گزینه  5"
      color="warning"
      solid
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      :trueValue="{ name: 'option6', label: 'Option 6' }"
      label="گزینه  6"
      color="danger"
      solid
    />
  </VControl>
</VField>

<!--/example-->
