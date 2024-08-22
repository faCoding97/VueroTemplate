---
state:
  selected: 'value_2'
---

### مربعی Solid

Vuero دکمه‌های رادیویی با استایل پیش‌فرض را در 2 سبک اصلی `outlined` و `solid` ارائه می‌کند.این دکمه های رادیویی همچنین از تمام رنگ های اصلی پشتیبانی می کنند.
اصلاح کننده های موجود عبارتند از : `is-primary`, `is-success`, `is-info`,
`is-warning`, `is-danger`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('value_2')
</script>

<template>
  <VField>
    <VControl>
      <VRadio
        v-model="selected"
        value="value_1"
        label="انتخاب  1"
        name="solid_squared_radio"
        square
        solid
      />

      <VRadio
        v-model="selected"
        value="value_2"
        label="انتخاب  2"
        name="solid_squared_radio"
        color="primary"
        square
        solid
      />

      <VRadio
        v-model="selected"
        value="value_3"
        label="انتخاب  3"
        name="solid_squared_radio"
        color="info"
        square
        solid
      />

      <VRadio
        v-model="selected"
        value="value_4"
        label="انتخاب  4"
        name="solid_squared_radio"
        color="success"
        square
        solid
      />

      <VRadio
        v-model="selected"
        value="value_5"
        label="انتخاب  5"
        name="solid_squared_radio"
        color="warning"
        square
        solid
      />

      <VRadio
        v-model="selected"
        value="value_6"
        label="انتخاب  6"
        name="solid_squared_radio"
        color="danger"
        square
        solid
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_1"
      label="انتخاب  1"
      name="solid_squared_radio"
      square
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_2"
      label="انتخاب  2"
      name="solid_squared_radio"
      color="primary"
      square
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_3"
      label="انتخاب  3"
      name="solid_squared_radio"
      color="info"
      square
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_4"
      label="انتخاب  4"
      name="solid_squared_radio"
      color="success"
      square
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_5"
      label="انتخاب  5"
      name="solid_squared_radio"
      color="warning"
      square
      solid
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_6"
      label="انتخاب  6"
      name="solid_squared_radio"
      color="danger"
      square
      solid
    />
  </VControl>
</VField>

<!--/example-->
