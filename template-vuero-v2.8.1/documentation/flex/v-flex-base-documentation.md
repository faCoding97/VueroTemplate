### VFlex

Vuero با `VFlex` و `VFlexItem` عرضه می‌شود که کامپوننت های ابزاری هستند تا **CSS flexbox layout** را به راحتی بنویسید.
کامپوننت `VFlex` نشان دهنده فلکس کانتینر است و می تواند حاوی هر چیزی در اسلات خود باشد.
کامپوننت `VFlexItem` به شما امکان می دهد بهترین کنترل را داشته باشید که چگونه آیتم در داخل پدر `VFlex` قرار می گیرد.

> می توانید یک [راهنمای کامل در css-tricks.com] پیدا کنید (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<!--code-->

```vue
<template>
  <VFlex>
    <!-- use any components inside --->
    <VCard></VCard>

    <!-- use VFlexItem to have more control --->
    <VFlexItem>
      <VAvatar initials="J." />
    </VFlexItem>
  </VFlex>
</template>
```

<!--/code-->
