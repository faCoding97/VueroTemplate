<template>
  <VDropdown
    icon="feather:more-vertical"
    class="is-pushed-mobile"
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
            class="lnil lnil-pencil"
          />
        </div>
        <div class="meta">
          <span class="dark-inverted">ویرایش</span>
          <span>ویرایش سابقه</span>
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
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span class="dark-inverted">حذف </span>
          <span> حذف سابقه</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
