<template>
  <VDropdown
    icon="feather:more-vertical"
    spaced
    right
  >
    <template #content>
      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-user-alt"
          />
        </div>
        <div class="meta">
          <span>پروفایل</span>
          <span>مشاهده پروفایل</span>
        </div>
      </a>

      <a
        role="menuitem"
        href="#"
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
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-travel"
          />
        </div>
        <div class="meta">
          <span>انتقال</span>
          <span>انتقال به لیست دیگر</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-trash"
          />
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از لیست</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
