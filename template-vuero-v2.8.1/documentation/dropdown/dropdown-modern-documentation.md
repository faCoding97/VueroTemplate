### دراپ داون مدرن

اگر نشانه گذاری خاصی را اضافه کنید، دکمه های `<VDropdown />` می توانند
با آیکون کارت متحرک به فهرست‌های کشویی مدرن تبدیل شود.
از پراپس `modern` در کامپوننت استفاده کنید.

<!--code-->

```vue
<template>
  <VDropdown title="Modern dropdown" modern>
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
    <VDropdown title="مدرن گرد شده" class="is-rounded" rounded modern>
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
    <VDropdown title="کشویی مدرن" modern up right>
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
