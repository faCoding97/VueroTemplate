---
tagsOptions:
  - value: batman
    label: بتمن
  - value: robin
    label: رابین
  - value: joker
    label: جوکر
tagsValue: []
---

### اینپوت تگ ها

کامپوننت `<Multisect />` را می توان به یک کامپوننت اینپوت تگ کاملاً کاربردی تبدیل کرد.
برای انجام این کار، هنگام نمونه‌برداری از افزونه، پراپ `mode` را روی `tags` تنظیم کنید.
همچنین می توانید جستجو را با استفاده از پراپ `:searchable="true"` فعال کنید و با استفاده از پراپ `:create-tag="true"` اجازه ایجاد تگ های جدید را بدهید.

<!--code-->

```vue
<script setup lang="ts">
const tagsValue = []
const tagsOptions = [
  { value: 'batman', label: 'بتمن' },
  { value: 'robin', label: 'رابین' },
  { value: 'joker', label: 'جوکر' },
]
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        v-model="tagsValue"
        :attrs="{ id }"
        mode="tags"
        :searchable="true"
        :create-tag="true"
        :options="tagsOptions"
        placeholder="افزودن تگ"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsValue"
          mode="tags"
          :searchable="true"
          :create-tag="true"
          :options="frontmatter.tagsOptions"
          placeholder="افزودن تگ"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsValue"
          mode="tags"
          :searchable="true"
          :create-tag="true"
          :options="frontmatter.tagsOptions"
          placeholder="افزودن تگ"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsValue"
          mode="tags"
          :searchable="true"
          :create-tag="true"
          :options="frontmatter.tagsOptions"
          placeholder="افزودن تگ"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
