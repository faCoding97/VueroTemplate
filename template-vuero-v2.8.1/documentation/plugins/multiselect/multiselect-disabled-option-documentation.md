---
disabledOptions:
  - value: batman
    label: بتمن
  - value: robin
    label: رابین
    disabled: true
  - value: joker
    label: جوکر
disabledValue:
  - batman
---

### گزینه غیرفعال

گزینه های `<Multiselect />` را می توان غیرفعال کرد. به سادگی یک ویژگی `disabled` را در آبجکت گزینه های خود ارسال کنید.

<!--code-->

```vue
<script setup lang="ts">
const disabledValue = ['batman']
const disabledOptions = [
  { value: 'batman', label: 'بتمن' },
  { value: 'robin', label: 'رابین', disabled: true },
  { value: 'joker', label: 'جوکر' },
]
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        v-model="disabledValue"
        :attrs="{ id }"
        mode="multiple"
        :options="disabledOptions"
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
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
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
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
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
          v-model="frontmatter.disabledValue"
          mode="multiple"
          :options="frontmatter.disabledOptions"
          placeholder="انتخاب گزینه ها"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
