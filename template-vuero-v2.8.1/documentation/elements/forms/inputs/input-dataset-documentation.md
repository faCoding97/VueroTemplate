---
state:
  color: '#8b5cf6'
  cake: ''
  date: ''
---

### تکمیل خودکار با استفاده از فهرست داده های نیتیو

می‌توانید از [`datalist`] بومی (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) استفاده کنید که به مرورگرتان اجازه دهید تکمیل خودکار را برای شما انجام دهد. فقط یک ویژگی `list` را به ورودی خود اضافه کنید و المنت `datalist` را با `id` اضافه کنید که با ویژگی `list` مطابقت دارد.

این یک راه عالی برای ارائه لیستی از گزینه ها به کاربران است.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const color = ref('#8b5cf6')
const cake = ref('')
const date = ref('')
</script>

<template>
  <div class="is-flex is-flex-wrap-wrap" :style="{ gap: '1rem' }">
    <VField>
      <VControl :style="{ width: '70px' }">
        <VInput
          v-model="color"
          list="colors-list"
          type="color"
          placeholder="انختاب رنگ"
        />
        <datalist id="colors-list">
          <option value="#84cc16"></option>
          <option value="#22c55e"></option>
          <option value="#0ea5e9"></option>
          <option value="#6366f1"></option>
          <option value="#8b5cf6"></option>
          <option value="#d946ef"></option>
          <option value="#f43f5e"></option>
          <option value="#facc15"></option>
          <option value="#fb923c"></option>
          <option value="#9ca3af"></option>
        </datalist>
      </VControl>
    </VField>
    <VField>
      <VControl class="is-flex-grow-1">
        <VInput
          v-model="cake"
          list="cake-list"
          type="text"
          placeholder="دستور غذا را انتخاب کنید"
        />
        <datalist id="cake-list">
          <option value="کیک شکلاتی "></option>
          <option value="کیک وانیلی"></option>
          <option value="کیک رد ولوت"></option>
          <option value="کیک هویج"></option>
          <option value="کیک لیمو"></option>
          <option value="کیک توت فرنگی"></option>
          <option value="کیک نارگیلی"></option>
          <option value="کیک بلک فارست"></option>
          <option value="کیک وارونه آناناس"></option>
          <option value="کیک ماربل"></option>
          <option value="کیک فونفتی "></option>
          <option value="کیک قهوه"></option>
          <option value="کیک تیرامیسو"></option>
          <option value="کیک موز"></option>
          <option value="کیک تمشک"></option>
          <option value="کیک اورئو"></option>
          <option value="کیک شکلاتی آلمانی"></option>
          <option value="کیک کدویی"></option>
          <option value="کیک بلوبری"></option>
          <option value="کیک بادام"></option>
        </datalist>
      </VControl>
    </VField>
    <VField>
      <VControl class="is-flex-grow-1">
        <VInput v-model="date" list="times-list" type="time" placeholder="انتخاب ساعت" />
        <datalist id="times-list">
          <option value="12:00"></option>
          <option value="13:00"></option>
          <option value="14:00"></option>
        </datalist>
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div
  class="is-flex is-flex-wrap-wrap"
  :style="{ gap: '1rem' }"
>
  <VField>
    <VControl :style="{ width: '70px' }">
      <VInput
        v-model="frontmatter.state.color"
        list="colors-list"
        type="color"
        placeholder="Pick a color"
      />
      <datalist id="colors-list">
        <option value="#84cc16"></option>
        <option value="#22c55e"></option>
        <option value="#0ea5e9"></option>
        <option value="#6366f1"></option>
        <option value="#8b5cf6"></option>
        <option value="#d946ef"></option>
        <option value="#f43f5e"></option>
        <option value="#facc15"></option>
        <option value="#fb923c"></option>
        <option value="#9ca3af"></option>
      </datalist>
    </VControl>
  </VField>
  <VField>
    <VControl class="is-flex-grow-1">
      <VInput
        v-model="frontmatter.state.cake"
        list="cake-list"
        type="text"
        placeholder="دستور غذا را انتخاب کنید"
      />
      <datalist id="cake-list">
        <option value="کیک شکلاتی "></option>
        <option value="کیک وانیلی"></option>
        <option value="کیک رد ولوت"></option>
        <option value="کیک هویج"></option>
        <option value="کیک لیمو"></option>
        <option value="کیک توت فرنگی"></option>
        <option value="کیک نارگیلی"></option>
        <option value="کیک بلک فارست"></option>
        <option value="کیک وارونه آناناس"></option>
        <option value="کیک ماربل"></option>
        <option value="کیک فونفتی "></option>
        <option value="کیک قهوه"></option>
        <option value="کیک تیرامیسو"></option>
        <option value="کیک موز"></option>
        <option value="کیک تمشک"></option>
        <option value="کیک اورئو"></option>
        <option value="کیک شکلاتی آلمانی"></option>
        <option value="کیک کدویی"></option>
        <option value="کیک بلوبری"></option>
        <option value="کیک بادام"></option>
      </datalist>
    </VControl>
  </VField>
  <VField>
    <VControl class="is-flex-grow-1">
      <VInput
        v-model="frontmatter.state.date"
        list="times-list"
        type="time"
        placeholder="انتخاب ساعت"
      />
      <datalist id="times-list">
        <option value="12:00"></option>
        <option value="13:00"></option>
        <option value="14:00"></option>
      </datalist>
    </VControl>
  </VField>
</div>

<!--/example-->
