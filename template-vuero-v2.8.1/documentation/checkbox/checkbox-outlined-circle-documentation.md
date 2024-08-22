---
state:
  options: 'Option 2'
---

### دایره ای Outlined

چک باکس های Vuero می توانند به جای مربع، دایره باشند. به سادگی ویژگی `circle` را به المنت چک باکس خود اضافه کنید.
برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ref('Option 2')
</script>

<template>
  <VField class="is-flex">
    <VControl raw subcontrol>
      <VCheckbox v-model="options" true-value="Option 1" label="گزینه  1" circle />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 2"
        label="گزینه  2"
        color="primary"
        circle
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 3"
        label="گزینه  3"
        color="info"
        circle
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 4"
        label="گزینه  4"
        color="success"
        circle
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 5"
        label="گزینه  5"
        color="warning"
        circle
      />
    </VControl>
    <VControl raw subcontrol>
      <VCheckbox
        v-model="options"
        true-value="Option 6"
        label="گزینه  6"
        color="danger"
        circle
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
      trueValue="Option 1"
      label="گزینه  1"
      circle
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 2"
      label="گزینه  2"
      color="primary"
      circle
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 3"
      label="گزینه  3"
      color="info"
      circle
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 4"
      label="گزینه  4"
      color="success"
      circle
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 5"
      label="گزینه  5"
      color="warning"
      circle
    />
  </VControl>
  <VControl raw subcontrol>
    <VCheckbox
      v-model="frontmatter.state.options"
      trueValue="Option 6"
      label="گزینه  6"
      color="danger"
      circle
    />
  </VControl>
</VField>

<!--/example-->
