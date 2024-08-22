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
            class="lnil lnil-whiteboard-alt-2"
          />
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>نمایش تابلوی پروژه</span>
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
          <span>ویرایش</span>
          <span>ویرایش پروژه</span>
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
            class="lnil lnil-checkmark-circle"
          />
        </div>
        <div class="meta">
          <span>تسک ها</span>
          <span>نمایش تسک های معلق</span>
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
            class="lnil lnil-hierchy-alt"
          />
        </div>
        <div class="meta">
          <span>تیم</span>
          <span>نمایش تیم پروژه</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
