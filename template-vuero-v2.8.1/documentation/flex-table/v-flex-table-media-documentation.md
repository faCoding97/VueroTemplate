### ستون های رسانه

نمایش رسانه‌ها در سلول‌ها علاوه بر ویژگی `grow` در ستون‌ها، می‌تواند با `media` بهبود یابد.
برای جزئیات بیشتر در مورد استفاده، نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    id: 0,
    username: 'علی ز.',
    position: 'مدیر پروژه',
    picture: '/images/avatars/svg/vuero-1.svg',
    badge: '/images/icons/flags/united-states-of-america.svg',
    location: 'ایران، البرز',
    industry: 'نرم افزار',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/demo/avatars/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ...
    ],
  },
  // and more data ...
]

const columns = {
  username: {
    label: 'کاربر(رسانه)',
    grow: true,
    media: true,
  },
  position: 'موقعیت',
  status: {
    label: 'وضعیت',
  },
  contacts: {
    label: 'مخاطبین',
    align: 'end',
    format: (value) => value.map((r: any) => r.initials).join(', '),
  },
}
</script>

<template>
  <VFlexTable rounded :data="data" :columns="columns">
    <template #body-cell="{ row, column, value }">
      <template v-if="column.key === 'username'">
        <VAvatar size="medium" :picture="row.picture" :badge="row.badge" />
        <div>
          <span class="item-name">{{ row?.name }}</span>
          <span class="item-meta">
            <strong>{{ value }}</strong>
          </span>
        </div>
      </template>

      <VAvatarStack
        v-else-if="column.key === 'contacts'"
        class="is-pushed-mobile"
        size="small"
        :avatars="row.contacts"
        :title="value"
        :limit="3"
      />
    </template>
  </VFlexTable>
</template>
```

<!--/code-->
