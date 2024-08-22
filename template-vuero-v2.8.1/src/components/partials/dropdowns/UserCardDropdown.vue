<template>
  <VDropdown
    icon="feather:more-vertical"
    spaced
    right
  >
    <template #content>
      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-lock"
          />
        </div>
        <div class="meta">
          <span>مجوزها</span>
          <span>ویرایش مجوز</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-bubble"
          />
        </div>
        <div class="meta">
          <span>پیام</span>
          <span>ارسال پیام</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-share"
          />
        </div>
        <div class="meta">
          <span>به اشتراک گذاری</span>
          <span>اشتراک این پروفایل</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از گرید</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
