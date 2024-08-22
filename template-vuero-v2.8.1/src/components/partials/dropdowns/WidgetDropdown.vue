<template>
  <VDropdown
    icon="feather:more-vertical"
    right
    spaced
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
            class="lnil lnil-reload"
          />
        </div>
        <div class="meta">
          <span>ریلود</span>
          <span> ریلود  ویجت</span>
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
            class="lnil lnil-cogs"
          />
        </div>
        <div class="meta">
          <span>پیکربندی</span>
          <span>پیکربندی ویجت</span>
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
            class="lnil lnil-cog"
          />
        </div>
        <div class="meta">
          <span>تنظیمات</span>
          <span>تنظیمات ویجت</span>
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
          <span>از دید حذف کنید</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
