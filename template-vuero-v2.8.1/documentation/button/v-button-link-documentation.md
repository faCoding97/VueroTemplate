### RouterLink

`<VButton />` یک ویژگی `to` را ارائه می دهد که می تواند مانند `<RouterLink />` استفاده شود.
همچنین می‌توانید از ویژگی `href` برای ارائه تگ استاندارد `<a>` استفاده کنید. اگر از هیچ کدام استفاده نشود، `<button>` درج می شود.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton to="/"> خانه </VButton>
    <VButton bold to="/"> خانه </VButton>
    <VButton rounded href="https://vuero.cssninja.io"> خانه </VButton>
    <VButton bold rounded href="https://vuero.cssninja.io"> خانه </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton to="/">
    خانه
  </VButton>
  <VButton bold to="/">
    خانه
  </VButton>
  <VButton rounded href="https://vuero.cssninja.io">
    خانه
  </VButton>
  <VButton bold rounded href="https://vuero.cssninja.io">
    خانه
  </VButton>
</VButtons>

<!--/example-->
