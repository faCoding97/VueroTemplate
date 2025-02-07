---
state:
  date: 2021-02-28T16:20:00.000Z
---

### Timepicker

`<VCalendar />` در صورت نیاز می تواند به یک انتخابگر زمان ساده تبدیل شود.
می‌توانید ویژگی `is24hr` را برای نمایش ساعت‌ها در قالب 24 ساعته اضافه کنید.
برای جزئیات بیشتر در مورد استفاده، نمونه کد را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref(null)
</script>

<template>
  <ClientOnly>
    <VDatePicker v-model="date" mode="dateTime" is24hr>
      <template #default="{ inputValue, inputEvents }">
        <VField>
          <VControl icon="feather:clock">
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
  <VDatePicker v-model="frontmatter.state.date" color="green" mode="time" is24hr>
    <template #default="{ inputValue, inputEvents }">
      <VField>
        <VControl icon="feather:clock">
          <input class="input v-input" type="text" :value="inputValue" v-on="inputEvents" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</ClientOnly>

<!--/example-->
