### آیکون وسط چین

می‌توانید تراز فلکس شدن کامپوننت `<VBlock />` را با استفاده از پراپ `center` تنظیم کنید.
این ویژگی `flex` `align-items: center;` را به کامپوننت اعمال می‌کند.

<!--code-->

```vue
<template>
  <VBlock title="تسک های تیم" subtitle="مشاهده همه تسک ها" center>
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
      <VBlock title="تسک های تیم" subtitle="مشاهده همه تسک ها" center>
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
