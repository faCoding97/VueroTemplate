### منو همراه با آیکون

آیتم‌های منوی `<Dropdown />` می‌توانند آیکون ها و طرح‌بندی ساختارمندتری داشته باشند. از پراپس `spaced `با نشانه‌گذاری ارائه شده در مثال کد استفاده کنید.

<!--code-->

```vue
<template>
  <VDropdown title="دراپ داون با آیکون" spaced>
    <template #content>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-coins"></i>
        </div>
        <div class="meta">
          <span>سرمایه گذاری</span>
          <span>خرید سهام بیشتر</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media is-active">
        <div class="icon">
          <i class="lnil lnil-dollar-up"></i>
        </div>
        <div class="meta">
          <span>مقایسه</span>
          <span>مقایسه با دیگران</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-bank"></i>
        </div>
        <div class="meta">
          <span>تجارت</span>
          <span>مشاهده فرصت ها</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-wallet-alt-1"></i>
        </div>
        <div class="meta">
          <span>کیف پول</span>
          <span>باز کردن کیف پول سهام</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <VDropdown title="دراپ داون با آیکون" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-coins"></i>
          </div>
          <div class="meta">
            <span>سرمایه گذاری</span>
            <span>خرید سهام بیشتر</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <div class="icon">
            <i class="lnil lnil-dollar-up"></i>
          </div>
          <div class="meta">
            <span>مقایسه</span>
            <span>مقایسه با دیگران</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-bank"></i>
          </div>
          <div class="meta">
            <span>تجارت</span>
            <span>مشاهده فرصت ها</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-wallet-alt-1"></i>
          </div>
          <div class="meta">
            <span>کیف پول</span>
            <span>باز کردن کیف پول سهام</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="همراه با  unicons" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="iconify" data-icon="uil:pagelines"></i>
          </div>
          <div class="meta">
            <span>سرمایه گذاری</span>
            <span>خرید سهام بیشتر</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <div class="icon">
            <i class="iconify" data-icon="uil:meeting-board"></i>
          </div>
          <div class="meta">
            <span>مقایسه</span>
            <span>مقایسه با دیگران</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="iconify" data-icon="uil:social-distancing"></i>
          </div>
          <div class="meta">
            <span>تجارت</span>
            <span>مشاهده فرصت ها</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="iconify" data-icon="uil:palette"></i>
          </div>
          <div class="meta">
            <span>کیف پول</span>
            <span>باز کردن کیف پول سهام</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
