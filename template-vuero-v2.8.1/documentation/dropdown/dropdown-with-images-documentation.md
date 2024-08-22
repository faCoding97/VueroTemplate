### منو همراه با تصاویر

موارد منوی `<VDropdown />` می‌توانند تصاویر و طرح‌بندی اصلی‌تری داشته باشند.
از پراپ `spaced` با نشانه گذاری ارائه شده در مثال کد استفاده کنید.
تصاویر داخلی را می توان با افزودن کلاس `is-rounded` به المنت تصویر گرد کرد.

<!--code-->

```vue
<template>
  <VDropdown title="دراپ داون با تصویر" spaced>
    <template #content>
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/images/avatars/svg/vuero-1.svg" alt="" />
        <div class="meta">
          <span>علی ز.</span>
          <span>ایران، اصفهان</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media is-active">
        <img class="item-img" src="/demo/avatars/7.jpg" alt="" />
        <div class="meta">
          <span>آلیا خ.</span>
          <span>ایران،گرگان</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/demo/avatars/25.jpg" alt="" />
        <div class="meta">
          <span>ملانی و.</span>
          <span>ایران، رشت</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/demo/avatars/9.jpg" alt="" />
        <div class="meta">
          <span>آنا ب</span>
          <span>ایران، همدان</span>
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
    <VDropdown title="دراپ داون با تصویر" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
          />
          <div class="meta">
            <span>علی ز.</span>
            <span>ایران، اصفهان</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <img
            class="item-img"
            src="/demo/avatars/7.jpg"
            alt=""
          />
          <div class="meta">
            <span>آلیا خ.</span>
            <span>ایران،گرگان</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/demo/avatars/25.jpg"
            alt=""
          />
          <div class="meta">
            <span>ملانی و.</span>
            <span>ایران، رشت</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/demo/avatars/9.jpg"
            alt=""
          />
          <div class="meta">
            <span>آنا ب</span>
            <span>ایران، همدان</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="دراپ داون با تصویر گرد شده" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
          />
          <div class="meta">
            <span>علی ز.</span>
            <span>ایران، اصفهان</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/7.jpg"
            alt=""
          />
          <div class="meta">
            <span>آلیا خ.</span>
            <span>ایران،گرگان</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/25.jpg"
            alt=""
          />
          <div class="meta">
            <span>ملانی و.</span>
            <span>ایران، رشت</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/9.jpg"
            alt=""
          />
          <div class="meta">
            <span>آنا ب</span>
            <span>ایران، همدان</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
