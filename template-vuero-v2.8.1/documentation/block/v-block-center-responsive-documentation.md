### تبلت ریسپانسیو

`<VBlock />` را می توان با افزودن پراپ `tResponsive` به کامپوننت کامپوننت ، برای نمای پرتره تبلت ریسپانسیو کرد. هنگامی که روی حالت ریسپانسیو تنظیم می شود، عناصر بلاک فلکس روی هم قرار می گیرند تا در فضای موجود قرار بگیرند. اندازه صفحه خود را تغییر دهید تا آن را در عمل ببینید.

<!--code-->

```vue
<template>
  <VBlock
    title="تسک های تیم"
    subtitle="مشاهده همه تسک ها"
    center
    m-responsive
    t-responsive
  >
    <template #icon>
      <VIconBox color="info" size="medium" rounded>
        <i class="iconify" data-icon="feather:chrome"></i>
      </VIconBox>
    </template>
    <template #action>
      <VButton color="primary" elevated>مشاهده</VButton>
    </template>
  </VBlock>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <VBlock 
        title="تسک های تیم" 
        subtitle="مشاهده همه تسک ها" 
        center 
        m-responsive
        t-responsive
      >
        <template #icon>
          <VIconBox color="info" size="medium" rounded>
            <i class="iconify" data-icon="feather:chrome"></i>
          </VIconBox>
        </template>
        <template #action>
          <VButton color="primary" elevated>مشاهده</VButton>
        </template>
      </VBlock>
    </div>
  </div>
</div>

<!--/example-->
