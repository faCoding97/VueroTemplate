### فرم های Modal

کامپوننت `<VModal />` را می توان برای هر چیزی استفاده کرد، از جمله نمایش و مدیریت فرم ها، ویژگی `is` را برای تغییر المنت مورد استفاده برای رندر تگ مدال تنظیم کنید.
از اسلات `content` `<template #content></template>` برای تزریق هر نوع محتوا به داخل مدال استفاده کنید.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
const smallFormOpen = ref(false)
</script>

<template>
  <VButton bold @click="smallFormOpen = true"> Open Modal </VButton>

  <VModal
    is="form"
    :open="smallFormOpen"
    title="Leave a Comment"
    size="small"
    actions="right"
    @submit.prevent="smallFormOpen = false"
    @close="smallFormOpen = false"
  >
    <template #content>
      <div class="modal-form">
        <div class="field">
          <label>Username *</label>
          <div class="control">
            <input type="text" class="input" placeholder="نام کاربری" />
          </div>
        </div>
        <div class="field">
          <label>Email *</label>
          <div class="control">
            <input type="text" class="input" placeholder="Email Address" />
          </div>
        </div>
        <div class="field">
          <label>Comment *</label>
          <div class="control">
            <textarea class="textarea" rows="4" placeholder="Your message..."></textarea>
          </div>
        </div>
      </div>
    </template>
    <template #action>
      <VButton type="submit" color="primary" raised>Publish</VButton>
    </template>
  </VModal>
</template>
```

<!--/code-->
