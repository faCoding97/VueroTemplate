---
state:
  date: 2021-02-28
---

### datepicker

Vuero با کامپوننت «<VCalendar />» ارسال می‌شود، یک کامپوننت تقویم چند منظوره / datepicker برای فرم‌های شما. در زیر یک مثال اساسی آورده شده است. لطفاً [اسناد پلاگین] (https://vcalendar.io/) را برای جزئیات بیشتر در مورد استفاده بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref(null)
</script>

<template>
  <ClientOnly>
    <VDatePicker v-model="date" color="green" trim-weeks>
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
  <VDatePicker v-model="frontmatter.state.date" color="green" trim-weeks>
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
