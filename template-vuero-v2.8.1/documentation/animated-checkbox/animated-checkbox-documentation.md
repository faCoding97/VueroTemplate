---
state:
  options:
    - 'Option 2'
    - 'Option 7'
---

### VAnimatedCheckbox

هنگامی که شما نیاز به نمایش چنین کنترلی در فرم های خود دارید، Vuero بخش سوئیچ با استایل زیبا را ارائه می دهد.
کامپوننت `VAnimatedCheckbox` Vuero دارای چندین اصلاح کننده رنگ است.
اصلاح کننده های موجود شامل `primary`, `success`,
`info`, `warning` و `danger` میباشند.
لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2', 'Option 7'])
</script>

<template>
  <VField grouped>
    <VFlex column-gap="1rem">
      <VControl>
        <VAnimatedCheckbox v-model="frontmatter.state.options" value="Option 1" />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 2" color="primary" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 3" color="success" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 4" color="info" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 5" color="warning" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 6" color="danger" checked />
      </VControl>
      <VControl>
        <VAnimatedCheckbox v-model="options" value="Option 7" color="purple" checked />
      </VControl>
    </VFlex>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped horizontal>
  <VFlex column-gap="1rem">
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 1"
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 2"
        color="primary"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 3"
        color="success"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 4"
        color="info"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 5"
        color="warning"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 6"
        color="danger"
        checked
      />
    </VControl>
    <VControl>
      <VAnimatedCheckbox
        v-model="frontmatter.state.options"
        value="Option 7"
        color="purple"
        checked
      />
    </VControl>
  </VFlex>
</VField>

<!--/example-->
