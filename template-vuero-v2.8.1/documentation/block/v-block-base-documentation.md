### VBlock

Vuero یک کامپوننت رسانه بلاک انعطاف پذیر همه کاره به نام `<VBlock />` ارائه می دهد.
VBlock دارای 2 اسلات نامگذاری شده است. یکی برای المنت `icon`، که می تواند هر چیزی که می خواهید باشد، و یکی برای `action`.

<!--code-->

```vue
<template>
  <VBlock title="آنا ب." subtitle="طراح UX ">
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
      <VBlock title="آنا ب." subtitle="طراح UX ">
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
