---
tagsStackedUsersOptions:
  - value: alice
    name: آلیا خرسندی
    image: /demo/avatars/7.jpg
  - value: erik
    name: علی زمانی
    image: /images/avatars/svg/vuero-1.svg
  - value: melany
    name: ملانی محمدی
    image: /demo/avatars/25.jpg
  - value: tara
    name: تارا سهرابی
    image: /demo/avatars/13.jpg
  - value: mary
    name: مریم حسینی
    image: /demo/avatars/5.jpg
  - value: irina
    name: الناز تهامی
    image: /demo/avatars/23.jpg
  - value: jonathan
    name: مهدیار نادری
    image: /demo/avatars/32.jpg
tagsStackedUsersValue: []
---

### کاربران انباشته شده (Stacked users)

شما می توانید `mode="tags"` را با یک الگوی سفارشی ترکیب کنید. به این ترتیب می توانید المنت های تگ سفارشی را با یک تصویر در داخل نشان دهید.شکل تگ از اصلاح کننده کلاس select به ارث می رسد.برای نمایش تصاویر انباشته، کلاس `is-stacked` را به المنت `is-image-tags` اضافه کنید.

<!--code-->

```vue
<script setup lang="ts">
const tagsStackedUsersValue = []
const tagsStackedUsersOptions = [
  {
    value: 'alice',
    name: 'آلیا خرسندی',
    image: '/demo/avatars/7.jpg',
  },
  {
    value: 'erik',
    name: 'علی زمانی',
    image: '/images/avatars/svg/vuero-1.svg',
  },
  {
    value: 'melany',
    name: 'melany Wallace',
    image: '/demo/avatars/25.jpg',
  },
  {
    value: 'tara',
    name: 'تارا سهرابی',
    image: '/demo/avatars/13.jpg',
  },
  {
    value: 'mary',
    name: 'مریم حسینی',
    image: '/demo/avatars/5.jpg',
  },
  {
    value: 'irina',
    name: 'الناز تهامی',
    image: '/demo/avatars/23.jpg',
  },
  {
    value: 'jonathan',
    name: 'مهدیار نادری',
    image: '/demo/avatars/32.jpg',
  },
]
</script>

<template>
  <VField v-slot="{ id }" class="is-image-tags">
    <VControl>
      <Multiselect
        v-model="tagsStackedUsersValue"
        :attrs="{ id }"
        mode="tags"
        placeholder="انتخاب عضو"
        track-by="name"
        label="name"
        :search="true"
        :options="tagsStackedUsersOptions"
        :max-height="145"
      >
        <template #tag="{ option, remove, disabled }">
          <div class="multiselect-tag is-user">
            <img :src="option.image" alt="" />
            {{ option.name }}
            <i v-if="!disabled" @click.prevent @mousedown.prevent.stop="remove(option)" />
          </div>
        </template>
      </Multiselect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-tags is-stacked">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsStackedUsersValue"
          mode="tags"
          placeholder="انتخاب عضو"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsStackedUsersOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" alt="" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-tags is-stacked is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsStackedUsersValue"
          mode="tags"
          placeholder="انتخاب عضو"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsStackedUsersOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" alt="" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-tags is-stacked is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsStackedUsersValue"
          mode="tags"
          placeholder="انتخاب عضو"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsStackedUsersOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" alt="" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
