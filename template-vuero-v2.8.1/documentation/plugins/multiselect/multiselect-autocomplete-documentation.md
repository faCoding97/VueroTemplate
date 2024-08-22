---
optionsSingle:
  - بتمن
  - رابین
  - جوکر
state:
  valueSingle:
---

### تکمیل خودکار(Autocomplete)

Vuero با `Vue Multiselect` یکپارچه شده است، یک کتابخانه اینپوت انتخابی Vue 3، چندگانه و برچسب‌ها.
شما می توانید مستندات افزونه را در
[Github](https://github.com/vueform/multiselect) بررسی کنید. می‌توانید با افزودن پراپ `:searchable="true"` کامپوننت را به یک تکمیل خودکار تبدیل کنید. برای جزئیات بیشتر، نمونه کد را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
const valueSingle = []
const optionsSingle = ['بتمن', 'رابین', 'جوکر']
</script>

<template>
  <VField v-slot="{ id }" class="is-autocomplete-select">
    <VControl icon="feather:search">
      <Multiselect
        v-model="valueSingle"
        :attrs="{ id }"
        :options="optionsSingle"
        placeholder="جستجوی قهرمان ها..."
        :searchable="true"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-autocomplete-select">
      <VControl icon="feather:search">
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="جستجوی قهرمان ها..."
          :searchable="true"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select is-autocomplete-select">
      <VControl icon="feather:search">
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="جستجوی قهرمان ها..."
          :searchable="true"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select is-autocomplete-select">
      <VControl icon="feather:search">
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="جستجوی قهرمان ها..."
          :searchable="true"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
