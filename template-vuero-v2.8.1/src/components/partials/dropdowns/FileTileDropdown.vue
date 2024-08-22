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
            class="lnil lnil-cloud-download"
          />
        </div>
        <div class="meta">
          <span>دانلود</span>
          <span>دانلود این فایل</span>
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
            class="lnil lnil-cloud-upload"
          />
        </div>
        <div class="meta">
          <span>آپدیت</span>
          <span>آپدیت نسخه جدید</span>
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
            class="lnil lnil-lock"
          />
        </div>
        <div class="meta">
          <span>مجوزها</span>
          <span>مدیریت مجوزهای فایل</span>
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
            class="lnil lnil-share"
          />
        </div>
        <div class="meta">
          <span>به اشتراک گذاری</span>
          <span>به اشتراک گذاری این فایل</span>
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
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span>حذف </span>
          <span>حذف  این فایل</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
