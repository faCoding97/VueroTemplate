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
            class="lnil lnil-eye"
          />
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>مشاهده این پروژه</span>
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
          <span>ویرایش این پروژه</span>
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
            class="lnil lnil-archive"
          />
        </div>
        <div class="meta">
          <span>آرشیو</span>
          <span>آرشیو این پروژه</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
