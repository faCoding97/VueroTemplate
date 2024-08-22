### پاپ اور(popover) متن

Vuero با کامپوننت `<Tippy />` از کتابخانه `VTippy` ارسال می‌شود. این اجازه می دهد تا هر نوع پاپ اور را با محتوای سفارشی ایجاد کنید. می‌توانید با استفاده از پراپ `trigger="click"`، ماشه را به عنوان یک رویداد کلیک تنظیم کنید.

<!--code-->

```vue
<template>
  <div class="buttons">
    <Tippy>
      <VButton>روی من هاور کن !</VButton>
      <template #content> محتوای تولتیپ </template>
    </Tippy>

    <Tippy trigger="click">
      <VButton>روی من کلیک کن!</VButton>
      <template #content> محتوای تولتیپ </template>
    </Tippy>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <Tippy>
    <VButton class="mx-1">روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> کلیک روی پاپ اور </h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy trigger="click">
    <VButton class="mx-1">روی من کلیک کن!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> کلیک روی پاپ اور </h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->
