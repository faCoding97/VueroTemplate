### منوی زمینه

کامپوننت `<VDropdown />` همچنین می‌تواند به عنوان یک منوی زمینه با نگه داشتن یک آیکون نمایش داده شود.
آیکون می‌تواند هر چیزی که می‌خواهید با مجموعه پراپس `icon` خاص باشد. لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه‌گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VDropdown icon="feather:more-vertical">
    <template #content>
      <a href="#" class="dropdown-item"> آیتم کشویی </a>
      <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
      <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
      <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item"> با یک تقسیم کننده </a>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <VDropdown icon="feather:more-horizontal">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با یک تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown icon="feather:more-vertical">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با یک تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown icon="feather:help-circle" up>
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با یک تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
