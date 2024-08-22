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
            class="lnil lnil-coins"
          />
        </div>
        <div class="meta">
          <span>سرمایه گذاری</span>
          <span>خرید سهام بیشتر</span>
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
            class="lnil lnil-dollar-up"
          />
        </div>
        <div class="meta">
          <span>مقایسه</span>
          <span>مقایسه با دیگران</span>
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
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-wallet-alt-1"
          />
        </div>
        <div class="meta">
          <span>کیف پول</span>
          <span>باز کردن کیف پول سهام</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
