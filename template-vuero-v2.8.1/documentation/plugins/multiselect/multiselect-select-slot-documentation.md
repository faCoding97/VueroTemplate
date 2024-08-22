---
selectSlotOptions:
  - value: javascript
    name: Javascript
    icon: /images/icons/stacks/js.svg
  - value: reactjs
    name: ReactJS
    icon: /images/icons/stacks/reactjs.svg
  - value: vuejs
    name: VueJS
    icon: /images/icons/stacks/vuejs.svg
selectSlotValue:
  - batman
---

### سلکت تصویر

کامپوننت `<Multisect />` را می توان با یک الگوی سفارشی برای نمایش تصاویر برای گزینه ها و گزینه انتخاب شده استفاده کرد. 2 اصلاح کننده های CSS برای گردی تصاویر عبارتند از : : `is-curved` و `is-rounded`.

<!--code-->

```vue
<script setup lang="ts">
const selectSlotValue
const selectSlotOptions = [
  {
    value: 'javascript',
    name: 'Javascript',
    icon: '/images/icons/stacks/js.svg',
  },
  {
    value: 'spiderman',
    name: 'ReactJS',
    icon: '/images/icons/stacks/reactjs.svg',
  },
  {
    value: 'vuejs',
    name: 'VueJS',
    icon: '/images/icons/stacks/vuejs.svg',
  },
]
</script>

<template>
  <VField v-slot="{ id }" class="is-image-select">
    <VControl>
      <Multiselect
        v-model="selectSlotValue"
        :attrs="{ id }"
        placeholder="انتخاب زبان"
        label="name"
        :options="selectSlotOptions"
      >
        <template #singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="select-label-icon" :src="value.icon" alt="" />
            <span class="select-label-text">
              {{ value.name }}
            </span>
          </div>
        </template>
        <template #option="{ option }">
          <img class="select-option-icon" :src="option.icon" alt="" />
          <span class="select-label-text">
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
    <VField v-slot="{ id }" class="is-image-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="انتخاب زبان"
          label="name"
          :options="frontmatter.selectSlotOptions"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon" :src="value.icon" alt="" /> 
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon" :src="option.icon" alt="" /> 
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
          placeholder="انتخاب زبان"
          label="name"
          :options="frontmatter.selectSlotOptions"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon is-curved" :src="value.icon" alt="" /> 
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon is-curved" :src="option.icon" alt="" /> 
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
          placeholder="انتخاب زبان"
          label="name"
          :options="frontmatter.selectSlotOptions"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon is-rounded" :src="value.icon" alt="" />
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon is-rounded" :src="option.icon" alt="" />
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
