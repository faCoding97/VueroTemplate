---
state:
  selected: 'value_2'
---

### VRadio

Vuero دکمه‌های رادیویی با استایل پیش‌فرض را در 2 سبک اصلی ارائه می‌کند، `outlined` (پیش‌فرض) و `solid` .
این دکمه های رادیویی همچنین از تمام رنگ های اصلی پشتیبانی می کنند.
اصلاح کننده های موجود عبارتند از : `primary`, `success`,`info`, `warning`, `danger`.

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
        name="outlined_radio"
      />

      <VRadio
        v-model="selected"
        value="value_2"
        label="انتخاب  2"
        name="outlined_radio"
        color="primary"
      />

      <VRadio
        v-model="selected"
        value="value_3"
        label="انتخاب  3"
        name="outlined_radio"
        color="info"
      />

      <VRadio
        v-model="selected"
        value="value_4"
        label="انتخاب  4"
        name="outlined_radio"
        color="success"
      />

      <VRadio
        v-model="selected"
        value="value_5"
        label="انتخاب  5"
        name="outlined_radio"
        color="warning"
      />

      <VRadio
        v-model="selected"
        value="value_6"
        label="انتخاب  6"
        name="outlined_radio"
        color="danger"
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
      name="outlined_radio"
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_2"
      label="انتخاب  2"
      name="outlined_radio"
      color="primary"
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_3"
      label="انتخاب  3"
      name="outlined_radio"
      color="info"
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_4"
      label="انتخاب  4"
      name="outlined_radio"
      color="success"
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_5"
      label="انتخاب  5"
      name="outlined_radio"
      color="warning"
    />
    <VRadio
      v-model="frontmatter.state.selected"
      value="value_6"
      label="انتخاب  6"
      name="outlined_radio"
      color="danger"
    />
  </VControl>
</VField>

<!--/example-->
