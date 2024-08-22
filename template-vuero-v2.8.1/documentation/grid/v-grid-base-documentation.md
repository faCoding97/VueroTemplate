### VGrid

Vuero با `VGrid` و `VGridItem` عرضه می‌شود که کامپوننت های ابزاری هستند تا **CSS grid layout** را به راحتی بنویسید.
کامپوننت `VGrid` نشان دهنده گرید کانتینر است و می تواند حاوی هر چیزی در اسلات خود باشد.
کامپوننت `VGridItem` اجازه می دهد تا بهترین کنترل را داشته باشد که چگونه آیتم در داخل پدر `VGrid` قرار می گیرد.

> می توانید یک [راهنمای کامل در css-tricks.com] پیدا کنید (https://css-tricks.com/snippets/css/complete-guide-grid)

<!--code-->

```vue
<template>
  <VGrid>
    <!-- use any components inside --->
    <VCard></VCard>

    <!-- use VGridItem to have more control --->
    <VGridItem>
      <VAvatar initials="J.">
    </VGridItem>
  </VGrid>
</template>
```

<!--/code-->
