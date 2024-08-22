---
disable_example: true
---

### کارت ساختار یافته

کارت‌های Vuero می‌توانند یک هدر فلکس کوچک داشته باشند که می‌توانید محتوای come را در آن قرار دهید. برای جزئیات بیشتر در مورد استفاده، نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<template>
  <VCard radius="small" elevated>
    <div class="card-head">
      <VBlock title="سعید ح." subtitle="مدیر فروش" center class="no-margin">
        <template #icon>
          <Tippy
            class="has-help-cursor"
            interactive
            :offset="[0, 10]"
            placement="top-start"
          >
            <VAvatar
              picture="/demo/avatars/19.jpg"
              badge="/images/icons/flags/germany.svg"
            />
            <template #content>
              <UserPopoverContent
                :user="{
                  id: 19,
                  avatar: '/demo/avatars/19.jpg',
                  badge: '/images/icons/flags/germany.svg',
                  username: 'نازنین گ.',
                  fullName: 'سحر نفیسی',
                  initials: 'GK',
                  color: 'h-yellow',
                  location: 'ایران ، تهران',
                  position: 'مدیر فروش',
                  bio: 'این یک توصیف کاربر خوب است که می‌توانیم از آن به عنوان محتوای آزمایشی استفاده کنیم.',
                }"
              />
            </template>
          </Tippy>
        </template>
      </VBlock>

      <UserCardDropdown />
    </div>

    <div class="card-inner">
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
        برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
    </div>
  </VCard>
</template>
```

<!--/code-->
