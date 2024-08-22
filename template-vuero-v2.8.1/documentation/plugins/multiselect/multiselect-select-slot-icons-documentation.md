---
selectSlotIconOptions:
  - value: logistics
    name: لجستیک
    icon: fas fa-box
  - value: business
    name: بیزینس
    icon: fas fa-briefcase
  - value: relaxation
    name: آرامش
    icon: fas fa-couch
  - value: development
    name: توسعه
    icon: fas fa-code
  - value: travel
    name: سفر
    icon: fas fa-compass
  - value: discussions
    name: بحث
    icon: fas fa-comment-alt
  - value: shopping
    name: خرید
    icon: fas fa-shopping-bag
selectSlotIconValue: []
---

### آیکون با جستجو

کامپوننت `<Multisect />` را می توان با یک الگوی سفارشی برای نمایش آیکون ها برای گزینه ها و گزینه انتخاب شده استفاده کرد. از جستجوی مقادیر پشتیبانی میکند.

<!--code-->

```vue
<script setup lang="ts">
const selectSlotIconValue
const selectSlotIconOptions = [
  {
    name: 'لجستیک',
    value: 'logistics',
    icon: 'fas fa-box',
  },
  {
    name: 'بیزینس',
    value: 'business',
    icon: 'fas fa-briefcase',
  },
  {
    name: 'آرامش',
    value: 'relaxation',
    icon: 'fas fa-couch',
  },
  {
    name: 'توسعه',
    value: 'development',
    icon: 'fas fa-code',
  },
  {
    name: 'سفر',
    value: 'travel',
    icon: 'fas fa-compass',
  },
  {
    name: 'بحث',
    value: 'discussions',
    icon: 'fas fa-comment-alt',
  },
  {
    name: 'خرید',
    value: 'shopping',
    icon: 'fas fa-shopping-bag',
  },
]
</script>

<template>
  <VField v-slot="{ id }" class="is-icon-select">
    <VControl>
      <Multiselect
        v-model="selectSlotIconValue"
        :attrs="{ id }"
        placeholder="یک عضو را انتخاب کنید"
        label="name"
        :options="selectSlotIconOptions"
        :searchable="true"
        track-by="name"
        :max-height="145"
      >
        <template #singlelabel="{ value }">
          <div class="multiselect-single-label">
            <div class="select-label-icon-wrap">
              <i :class="value.icon"></i>
            </div>
            <span class="select-label-text">
              {{ value.name }}
            </span>
          </div>
        </template>
        <template #option="{ option }">
          <div class="select-option-icon-wrap">
            <i :class="option.icon"></i>
          </div>
          <span class="select-option-text">
            {{ option.name }}
          </span>
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
    <VField v-slot="{ id }" class="is-icon-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotIconValue"
          placeholder="یک عضو را انتخاب کنید"
          label="name"
          :options="frontmatter.selectSlotIconOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <div class="select-label-icon-wrap">
                <i :class="value.icon"></i>
              </div>
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <div class="select-option-icon-wrap">
                <i :class="option.icon"></i>
              </div>
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-icon-select is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotIconValue"
          placeholder="یک عضو را انتخاب کنید"
          label="name"
          :options="frontmatter.selectSlotIconOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <div class="select-label-icon-wrap">
                <i :class="value.icon"></i>
              </div>
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <div class="select-option-icon-wrap">
                <i :class="option.icon"></i>
              </div>
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-icon-select is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotIconValue"
          placeholder="یک عضو را انتخاب کنید"
          label="name"
          :options="frontmatter.selectSlotIconOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <div class="select-label-icon-wrap">
                <i :class="value.icon"></i>
              </div>
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <div class="select-option-icon-wrap">
                <i :class="option.icon"></i>
              </div>
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
