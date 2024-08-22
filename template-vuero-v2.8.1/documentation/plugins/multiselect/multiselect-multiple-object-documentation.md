---
optionMultipleObject:
  batman: بتمن
  robin: رابین
  joker: جوکر
valueMultipleObject:
  - robin
---

### آبجکت گزینه ها

کامپوننت `<Multiselect />` می‌تواند داده‌ها را با پراپس `options` خود دریافت کند.
می‌توانید `Array` یا `Object` را به پراپس `options` ارسال کنید.
همچنین می‌توانید حالت `multiple` را با تنظیم پراپ `mode` روی `mode="multiple"` فعال کنید.

<!--code-->

```vue
<script setup lang="ts">
const valueMultipleObject = ['robin']
const optionMultipleObject = {
  batman: 'بتمن',
  robin: 'رابین',
  joker: 'جوکر',
}
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        v-model="valueMultipleObject"
        :attrs="{ id }"
        mode="multiple"
        :options="optionMultipleObject"
        placeholder="انتخاب گزینه ها"
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
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="انتخاب گزینه ها"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="انتخاب گزینه ها"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.valueMultipleObject"
          mode="multiple"
          :options="frontmatter.optionMultipleObject"
          placeholder="انتخاب گزینه ها"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
