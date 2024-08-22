### وی دراپ‌داون (VDropdown)

می‌توانید از یک کامپوننت `<VDropdown />` برای نمایش منویی استفاده کنید
گزینه های شما را حفظ خواهد کرد. پراپس `right` را به کامپوننت ارسال کنید تا تراز شود
آن را به سمت راست به جای چپ، که پیش فرض است. برای تبدیل کردن آن به صورت حذفی از پراپس `up` استفاده کنید.

<!--code-->

```vue
<template>
  <VDropdown title="دکمه کشویی" right up>
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
    <VDropdown title="دکمه کشویی">
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
    <VDropdown title="کشویی راست" right>
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
    <VDropdown title="کشویی بالا" up>
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
