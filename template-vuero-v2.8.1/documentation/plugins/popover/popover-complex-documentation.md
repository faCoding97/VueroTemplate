---
user1:
  avatar: /demo/avatars/19.jpg
  badge: /images/icons/flags/germany.svg
  username: نازنین گ.
  location: ایران ، تهران
  position: مدیر فروش
  bio: این یک توصیف کاربر خوب است که می‌توانیم از آن به عنوان محتوای آزمایشی استفاده کنیم.
user2:
  avatar: /images/avatars/svg/vuero-1.svg
  badge: /images/icons/flags/united-states-of-america.svg
  username: علی ز.
  location: Las Begas, NV
  position: مدیر پروژه
  bio: این یک توصیف کاربر خوب است که می‌توانیم از آن به عنوان محتوای آزمایشی استفاده کنیم.
user3:
  avatar: /demo/avatars/7.jpg
  badge: /images/icons/flags/united-states-of-america.svg
  username: آلیا خ.
  location: ایران ، تهران
  position: مهندس نرم افزار
  bio: این یک توصیف کاربر خوب است که می‌توانیم از آن به عنوان محتوای آزمایشی استفاده کنیم.
---

### popover پروفایل

Popover ها را می توان برای نمایش اطلاعات پیچیده تری مانند پروفایل کاربر استفاده کرد. ما مثالی ارائه کرده ایم که از یک کامپوننت داخلی برای نمایش پروفایل کاربر استفاده می کند. همچنین می‌توانید پاپاور را با پراپ `interactive` تعاملی کنید.

<!--code-->

```vue
<script setup lang="ts">
const user = {
  avatar: '/demo/avatars/19.jpg',
  badge: '/images/icons/flags/germany.svg',
  username: 'نازنین گ.',
  location: 'ایران ، تهران',
  position: 'مدیر فروش',
  bio: 'این یک توصیف کاربر خوب است که می‌توانیم از آن به عنوان محتوای آزمایشی استفاده کنیم.',
}
</script>

<template>
  <Tippy class="has-help-cursor" interactive :offset="[0, 30]">
    <VAvatar :picture="user.avatar" />
    <template #content>
      <UserPopoverContent :user="user" />
    </template>
  </Tippy>
</template>
```

<!--/code-->

<!--example-->

<div>
  <Tippy class="mx-1" interactive :offset="[0, 30]">
    <VAvatar :picture="frontmatter.user1.avatar" />
    <template #content>
      <UserPopoverContent :user="frontmatter.user1" />
    </template>
  </Tippy>

  <Tippy class="mx-1" interactive :offset="[0, 30]">
    <VAvatar :picture="frontmatter.user2.avatar" />
    <template #content>
      <UserPopoverContent :user="frontmatter.user2" />
    </template>
  </Tippy>

  <Tippy class="mx-1" interactive :offset="[0, 30]">
    <VAvatar :picture="frontmatter.user3.avatar" />
    <template #content>
      <UserPopoverContent :user="frontmatter.user3" />
    </template>
  </Tippy>
</div>

<!--/example-->
