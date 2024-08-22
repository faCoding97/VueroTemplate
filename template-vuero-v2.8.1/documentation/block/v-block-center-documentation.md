### تراز در مرکز (Centered align)

می‌توانید تراز فلکس شدن کامپوننت `<VBlock />` را با استفاده از پراپ `center` تنظیم کنید.
این ویژگی `flex` `align-items: center;` را به کامپوننت اعمال می‌کند.

<!--code-->

```vue
<template>
  <VBlock title="آنا ب." subtitle="طراح UX " center>
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
      <VBlock title="آنا ب." subtitle="طراح UX " center>
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
