---
state:
  clicked: 0
---

### VButton

اگر نمی‌خواهید از دکمه ساده Html استفاده کنید، Vuero یک کامپوننت `<VButton />` ارائه می‌کند.
VButton ها را می توان با استفاده از `bold` و `rounded` روی کامپوننت پررنگ و گرد کرد.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const clicked = ref(0)
</script>

<template>
  <VButtons>
    <VButton @click="clicked++"> کلیک شده : {{ clicked }} </VButton>
    <VButton bold @click="clicked++"> کلیک شده : {{ clicked }} </VButton>
    <VButton rounded @click="clicked++"> کلیک شده : {{ clicked }} </VButton>
    <VButton bold rounded @click="clicked++"> کلیک شده : {{ clicked }} </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton @click="frontmatter.state.clicked++">
  کلیک شده : {{ frontmatter.state.clicked }}
  </VButton>
  <VButton bold @click="frontmatter.state.clicked++">
  کلیک شده : {{ frontmatter.state.clicked }}
  </VButton>
  <VButton rounded @click="frontmatter.state.clicked++">
  کلیک شده : {{ frontmatter.state.clicked }}
  </VButton>
  <VButton bold rounded @click="frontmatter.state.clicked++">
  کلیک شده : {{ frontmatter.state.clicked }}
  </VButton>
</VButtons>

<!--/example-->
