---
state:
  date: 2021-02-28T16:20:00.000Z
---

### DateTimepicker

`<VCalendar />` را می توان در صورت نیاز به انتخابگر محدوده تاریخ تبدیل کرد. برای جزئیات بیشتر در مورد استفاده، نمونه کد را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref(new Date())
</script>

<template>
  <ClientOnly>
    <VDatePicker v-model="date" mode="dateTime">
      <template #default="{ inputValue, inputEvents }">
        <VField>
          <VControl icon="feather:calendar">
            <input
              class="input v-input"
              type="text"
              :value="inputValue"
              v-on="inputEvents"
            />
          </VControl>
        </VField>
      </template>
    </VDatePicker>
  </ClientOnly>
</template>
```

<!--/code-->

<!--example-->

<ClientOnly>
  <VDatePicker v-model="frontmatter.state.date" color="green" mode="dateTime">
    <template #default="{ inputValue, inputEvents }">
      <VField>
        <VControl icon="feather:calendar">
          <input class="input v-input" type="text" :value="inputValue" v-on="inputEvents" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</ClientOnly>

<!--/example-->
