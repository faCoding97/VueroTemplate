### رنگ های دراپ داون

می‌توانید `<VDropdown />` را با استفاده از ویژگی «color» سفارشی کنید.
برای گزینه‌های سفارشی‌سازی کامل، به اسناد پراپس Dropdown مراجعه کنید.

<!--code-->

```vue
<template>
  <VDropdown title="Primary" color="primary">
    <template #content>
      <a href="#" class="dropdown-item"> آیتم کشویی </a>
      <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
      <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
      <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item"> با تقسیم کننده </a>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <VDropdown title="Primary" color="primary">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Danger" color="danger">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Warning" color="warning">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Info" color="info">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Success" color="success">
      <template #content>
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با تقسیم کننده </a>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
