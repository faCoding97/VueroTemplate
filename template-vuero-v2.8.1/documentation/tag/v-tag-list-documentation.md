### لیست افزونه ها

کامپوننت های `<VTag />` با افزونه‌ها را می‌توان در فهرستی با فاصله بهینه سازمان‌دهی کرد. کامپوننت خود را درون یک المنت `<VField grouped multiline />` قرار دهید.
برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField grouped multiline>
    <VControl>
      <VTags addons>
        <VTag label="Bulma CSS" color="primary" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="React JS" color="info" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="Javascript" color="warning" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="Vue JS" color="primary" />
        <VTag remove />
      </VTags>
    </VControl>
    <VControl>
      <VTags addons>
        <VTag label="Angular" color="danger" />
        <VTag remove />
      </VTags>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->
<VField grouped multiline>
  <VControl>
    <VTags addons>
      <VTag label="Bulma CSS" color="primary" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="React JS" color="info" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="Javascript" color="warning" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="Vue JS" color="primary" />
      <VTag remove />
    </VTags>
  </VControl>
  <VControl>
    <VTags addons>
      <VTag label="Angular" color="danger" />
      <VTag remove />
    </VTags>
  </VControl>
</VField>

<!--/example-->
