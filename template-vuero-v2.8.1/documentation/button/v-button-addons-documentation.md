### افزونه ها

می‌توانید به راحتی افزونه‌های `<VButton />`ایجاد کنید و با قرار دادن آنها در داخل یک المنت `<div class="field is-grouped"><div>` آنها را با هم گروه‌بندی کنید.
می توانید هر سبک دکمه ای را با هم ترکیب کنید.

<!--code-->

```vue
<template>
  <VField addons>
    <VControl>
      <VButton icon="fas fa-align-left"> چپ </VButton>
    </VControl>
    <VControl>
      <VButton icon="fas fa-align-center"> وسط </VButton>
    </VControl>
    <VControl>
      <VButton icon="fas fa-align-right"> راست </VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl>
    <VButton icon="fas fa-align-left"> چپ </VButton>
  </VControl>
  <VControl>
    <VButton icon="fas fa-align-center"> وسط </VButton>
  </VControl>
  <VControl>
    <VButton icon="fas fa-align-right"> راست </VButton>
  </VControl>
</VField>

<!--/example-->
