<template>
  <VDropdown
    class="is-pushed-mobile"
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
            class="lnil lnil-briefcase"
          />
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>مشاهده جزئیات پروژه</span>
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
          <span>ویرایش جزئیات پروژه</span>
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
            class="lnil lnil-add-files"
          />
        </div>
        <div class="meta">
          <span>تسک جدید</span>
          <span>افزودن تسک جدید</span>
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
          <span>حذف</span>
          <span>حذف از لیست</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
