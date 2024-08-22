### دکمه های هاور

کامپوننت `<VDropdown />` همچنین می‌تواند هنگام هاور یا بعد از هر رویداد سفارشی باز شود.
لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VDropdown>
    <template #button="{ open, toggle }">
      <VButton
        icon="feather:help-circle"
        class="is-trigger"
        @mouseenter="open"
        @focusin="open"
        @click="toggle"
      >
        Hover me!
      </VButton>
    </template>

    <template #content="{ close }">
      <div @mouseleave="close" @focusout="close">
        <a href="#" class="dropdown-item"> آیتم کشویی </a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
        <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> با تقسیم کننده </a>
      </div>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <VDropdown>
      <template #button="{ open, toggle }">
        <VButton
          icon="feather:alert-triangle"
          class="is-trigger"
          color="warning"
          @mouseenter="open"
          @focusin="open"
          @click="toggle"
        >
          هاور کن!
        </VButton>
      </template>
      <template #content="{ close }">
        <div @mouseleave="close" @focusout="close">
          <a href="#" class="dropdown-item"> آیتم کشویی </a>
          <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
          <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
          <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> با تقسیم کننده </a>
        </div>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Primary button" up>
      <template #button="{ open, toggle }">
        <VButton
          icon="feather:help-circle"
          class="is-trigger"
          @mouseenter="open"
          @focusin="open"
          @click="toggle"
        >
          هاور کن!
        </VButton>
      </template>
      <template #content="{ close }">
        <div @mouseleave="close" @focusout="close">
          <a href="#" class="dropdown-item"> آیتم کشویی </a>
          <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
          <a href="#" class="dropdown-item is-active"> آیتم کشویی فعال</a>
          <a href="#" class="dropdown-item"> آیتم کشویی دیگر </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> با تقسیم کننده </a>
        </div>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
