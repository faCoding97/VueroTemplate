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
            class="lnil lnil-coins"
          />
        </div>
        <div class="meta">
          <span>سرمایه گذاری</span>
          <span>خرید سهام بیشتر</span>
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
            class="lnil lnil-bank"
          />
        </div>
        <div class="meta">
          <span>تجارت</span>
          <span>مشاهده فرصت ها</span>
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
            class="lnil lnil-reload"
          />
        </div>
        <div class="meta">
          <span>بازخوانی</span>
          <span>بازخوانی داده</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
