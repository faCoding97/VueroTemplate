---
optionsSingle:
  - بتمن
  - رابین
  - جوکر
state:
  valueSingle: 0
---

### تک انتخابی

Vuero با `Vue Multiselect` یکپارچه شده است، یک کتابخانه اینپوت انتخابی Vue 3، چندگانه و برچسب‌ها.You can check مستندات افزونه در
[Github](https://github.com/vueform/multiselect) قابل دسترسی است.
می‌توانید گردی کامپوننت `<Multiselect />` را با افزودن کلاس `is-curved` یا `is-rounded` به کامپوننت پدر `<VField />` تغییر دهید.

<!--code-->

```vue
<script setup lang="ts">
const valueSingle = 0
const optionsSingle = ['بتمن', 'رابین', 'جوکر']
</script>

<template>
  <VField v-slot="{ id }" class="is-curved-select">
    <VControl>
      <Multiselect
        v-model="valueSingle"
        :attrs="{ id }"
        :options="optionsSingle"
        placeholder="انتخاب یک گزینه"
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
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="انتخاب یک گزینه"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="انتخاب یک گزینه"
        />
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.state.valueSingle"
          :options="frontmatter.optionsSingle"
          placeholder="انتخاب یک گزینه"
        />
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
