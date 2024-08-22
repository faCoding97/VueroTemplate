### موبایل ریسپانسیو

`<VBlock />` را می‌توان با افزودن پزاپ `mResponsive` به کامپوننت، برای نمای تلفن همراه ریسپانسیو کرد.
هنگامی که روی حالت ریسپانسیو تنظیم می شود، المنت های بلاک فلکس روی هم قرار می گیرند تا در فضای موجود قرار بگیرند. اندازه صفحه خود را تغییر دهید تا آن را در عمل ببینید.

<!--code-->

```vue
<template>
  <VBlock title="آنا ب." subtitle="طراح UX " center m-responsive>
    <template #icon>
      <VAvatar
        size="medium"
        picture="/demo/avatars/19.jpg"
        badge="/images/icons/flags/germany.svg"
      />
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
      <VBlock title="آنا ب." subtitle="طراح UX " center mResponsive>
        <template #icon>
          <VAvatar
            size="medium"
            picture="/demo/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
          />
        </template>
        <template #action>
          <VButton color="primary" elevated>مشاهده</VButton>
        </template>
      </VBlock>
    </div>
  </div>
</div>

<!--/example-->
