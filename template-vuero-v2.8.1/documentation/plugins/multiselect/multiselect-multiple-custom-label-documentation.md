---
optionMultipleObject:
  batman: بتمن
  robin: رابین
  joker: جوکر
valueMultipleObject:
  - robin
---

### برچسب پیش فرض

وقتی انتخاب گزینه‌ها را شروع می‌کنید، کامپوننت `<Multisect />` در حالت چندگانه دارای یک برچسب پیش‌فرض است. می‌توانید نحوه قالب‌بندی پیام را با استفاده از اسلات سفارشی `#multiplelabel` برای پیکربندی پیام خود تغییر دهید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Multiselect from '@vueform/multiselect'
const valueMultipleObject = ref(['robin'])
const optionMultipleObject = ref({
  batman: 'بتمن',
  robin: 'رابین',
  joker: 'جوکر',
})
</script>

<template>
  <VField v-slot="{ id }" class="demo-field mb-6">
    <VControl>
      <Multiselect
        v-model="valueMultipleObject"
        :attrs="{ id }"
        mode="multiple"
        placeholder="کاراکتر خود را انتخاب کنید"
        :options="optionMultipleObject"
      >
        <template #multiplelabel="{ values }">
          <div class="multiselect-multiple-label">
            {{ values.length }} شخصیت انتخاب شده
          </div>
        </template>
      </Multiselect>
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
          placeholder="کاراکتر خود را انتخاب کنید"
          :options="frontmatter.optionMultipleObject"
        >
          <template #multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
              {{ values.length }}شخصیت انتخاب شده
            </div>
          </template>
        </Multiselect>
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
          placeholder="کاراکتر خود را انتخاب کنید"
          :options="frontmatter.optionMultipleObject"
        >
          <template #multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
              {{ values.length }} شخصیت انتخاب شده
            </div>
          </template>
        </Multiselect>
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
          placeholder="کاراکتر خود را انتخاب کنید"
          :options="frontmatter.optionMultipleObject"
        >
          <template #multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
              {{ values.length }} شخصیت انتخاب شده
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
