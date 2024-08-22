---
state:
  currency: '$'
  amount: ''
---

### افزونه های دو جهته

اینپوت ها ها می توانند در هر دو طرف افزونه داشته باشند. حتی می‌توانید یک المنت انتخابی را به کامپوننت `<VControl />` خود متصل کنید. لطفاً برای جزئیات بیشتر در مورد استفاده به مثال کد مراجعه کنید.

Note that if you need multiple inputs
(like a `<VSelect>` addons for currency selection),
you should wrap this other input with `<VControl subcontrol>` or
`<VField subcontrol>` component.
توجه داشته باشید که اگر به چندین اینپوت نیاز دارید (مانند افزونه های `<VSelect>` برای انتخاب ارز)، باید این اینپوت دیگر را با کامپوننت `<VControl subcontrol>` یا `<VField subcontrol>` بپیچید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const currency = ref('$')
</script>

<template>
  <VField addons>
    <!-- currency selector with subcontrol -->
    <VControl subcontrol>
      <VSelect v-model="currency">
        <VOption value="$">$</VOption>
        <VOption value="£">£</VOption>
        <VOption value="€">€</VOption>
      </VSelect>
    </VControl>

    <!-- amount input -->
    <VControl expanded>
      <VInput v-model="amount" type="text" placeholder="مقدار پول" />
    </VControl>

    <!-- submit -->
    <VControl>
      <VButton color="primary">ارسال پرداخت</VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl subcontrol>
    <VSelect v-model="frontmatter.state.currency">
      <VOption value="$">$</VOption>
      <VOption value="£">£</VOption>
      <VOption value="€">€</VOption>
    </VSelect>
  </VControl>
  <VControl expanded>
    <VInput v-model="frontmatter.state.amount" type="text" placeholder="مقدار پول" />
  </VControl>
  <VControl>
    <VButton color="primary">ارسال پرداخت</VButton>
  </VControl>
</VField>

<!--/example-->
