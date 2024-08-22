<template>
  <VDropdown
    icon="feather:more-vertical"
    class="end-action"
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
            class="lnil lnil-whiteboard-alt-2"
          />
        </div>
        <div class="meta">
          <span>گزارشات</span>
          <span>مشاهده گزارش های دقیق</span>
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
            class="lnil lnil-pencil"
          />
        </div>
        <div class="meta">
          <span>ویرایش</span>
          <span>ویرایش این پروفایل</span>
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
            class="lnil lnil-bubble"
          />
        </div>
        <div class="meta">
          <span>پیام</span>
          <span>ارسال  پیام مستقیم</span>
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
            class="lnil lnil-gift-alt-1"
          />
        </div>
        <div class="meta">
          <span>هدیه</span>
          <span>ارسال  هدیه</span>
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
            class="lnil lnil-cog"
          />
        </div>
        <div class="meta">
          <span>تنظیمات</span>
          <span>پیکربندی تنظیمات</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
