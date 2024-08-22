<template>
  <VDropdown
    class="end-action"
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
            class="lnil lnil-eye"
          />
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>مشاهده پروفایل اعضا</span>
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
            class="lnil lnil-pencil"
          />
        </div>
        <div class="meta">
          <span>ویرایش نقش</span>
          <span>ویرایش نقش اعضا</span>
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
            class="lnil lnil-trash-can-alt-1"
          />
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از تیم</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
