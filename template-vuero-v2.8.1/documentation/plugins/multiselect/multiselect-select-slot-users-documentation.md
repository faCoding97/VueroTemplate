---
selectSlotOptions:
  - value: alice
    name: آلیا خرسندی
    icon: /demo/avatars/7.jpg
  - value: erik
    name: علی زمانی
    icon: /images/avatars/svg/vuero-1.svg
  - value: melany
    name: ملانی محمدی
    icon: /demo/avatars/25.jpg
  - value: tara
    name: تارا سهرابی
    icon: /demo/avatars/13.jpg
  - value: mary
    name: مریم حسینی
    icon: /demo/avatars/5.jpg
  - value: irina
    name: الناز تهامی
    icon: /demo/avatars/23.jpg
  - value: jonathan
    name: مهدیار نادری
    icon: /demo/avatars/32.jpg
selectSlotValue:
---

### کاربران با جستجو

کامپوننت `<Multisect />` را می توان با یک الگوی سفارشی برای نمایش تصاویر برای گزینه ها و گزینه انتخاب شده استفاده کرد. 2 اصلاح کننده Css برای گردی تصاویر عبارتند از : `is-curved` و `is-rounded`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selectSlotValue = ref()
const selectSlotOptions = [
  {
    value: 'alice',
    name: 'آلیا خرسندی',
    icon: '/demo/avatars/7.jpg',
  },
  {
    value: 'erik',
    name: 'علی زمانی',
    icon: '/images/avatars/svg/vuero-1.svg',
  },
  {
    value: 'melany',
    name: 'melany Wallace',
    icon: '/demo/avatars/25.jpg',
  },
  {
    value: 'tara',
    name: 'تارا سهرابی',
    icon: '/demo/avatars/13.jpg',
  },
  {
    value: 'mary',
    name: 'مریم حسینی',
    icon: '/demo/avatars/5.jpg',
  },
  {
    value: 'irina',
    name: 'الناز تهامی',
    icon: '/demo/avatars/23.jpg',
  },
  {
    value: 'jonathan',
    name: 'مهدیار نادری',
    icon: '/demo/avatars/32.jpg',
  },
]
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        v-model="selectSlotValue"
        :attrs="{ id }"
        placeholder="یک عضو را انتخاب کنید"
        label="name"
        :options="selectSlotOptions"
        :searchable="true"
        track-by="name"
        :max-height="145"
      >
        <template #singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="select-label-icon" :src="value.icon" alt="" />
            {{ value.name }}
          </div>
        </template>
        <template #option="{ option }">
          <img class="select-option-icon" :src="option.icon" alt="" />
          {{ option.name }}
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
    <VField v-slot="{ id }" class="is-image-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="یک عضو را انتخاب کنید"
          label="name"
          :options="frontmatter.selectSlotOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon" :src="value.icon" /> 
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon" :src="option.icon" /> 
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-select is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="یک عضو را انتخاب کنید"
          label="name"
          :options="frontmatter.selectSlotOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon is-curved" :src="value.icon" /> 
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon is-curved" :src="option.icon" /> 
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-select is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="یک عضو را انتخاب کنید"
          label="name"
          :options="frontmatter.selectSlotOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon is-rounded" :src="value.icon" />
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon is-rounded" :src="option.icon" />
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
