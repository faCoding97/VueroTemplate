### استک متوسط

آواتارهای Vuero را می توان در یک خط کمی روی هم قرار داد.
از کامپوننت `<VAvatarStack />` استفاده کنید. کامپوننت 2 پراپ دارد:
`avatars` و `size`. اندازه های موجود normal ، `small` و `medium` هستند.

<!--code-->

```vue
<script setup lang="ts">
const users = [
  {
    id: 0,
    picture: '/demo/avatars/7.jpg',
    initials: 'AC',
    color: 'info',
  },
  {
    id: 1,
    picture: null,
    initials: 'JP',
    color: 'info',
  },
  // etc...
]
</script>

<template>
  <VAvatarStack :avatars="users" size="medium" />
</template>
```

<!--/code-->

<!--example-->
<div class="avatar-stack">
    <VAvatar picture="/demo/avatars/7.jpg" size="medium" />
    <VAvatar initials="JO" color="info" size="medium" />
    <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="medium" />
    <VAvatar picture="/demo/avatars/5.jpg" size="medium" />
    <VAvatar initials="CP" color="success" size="medium" />
    <VAvatar picture="/demo/avatars/5.jpg" size="medium" />
    <div class="v-avatar is-medium">
        <span class="avatar is-more">
            <span class="inner">
                <span>+2</span>
            </span>
        </span>
    </div>
</div>

<!--/example-->
