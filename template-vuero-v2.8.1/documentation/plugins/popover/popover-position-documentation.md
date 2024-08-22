### موقعیت های Popover

پاپ اورهای `<Tippy />` می توانند موقعیت های مختلفی داشته باشند. برای تنظیم قرار دادن پاپ اور خود از پراپ `placement` استفاده کنید
گزینه های موچود عبارتند از : `top`, `top-end`, `bottom`,
`bottom-end`, `left`, `left-end`, `right` و `right-end`.

<!--code-->

```vue
<template>
  <Tippy placement="top">
    <VButton>بالا</VButton>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <h4 class="dark-inverted">بالا</h4>
        </div>
        <div class="popover-body">
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
      </div>
    </template>
  </Tippy>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <Tippy placement="top">
    <VButton class="mx-1">بالا</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">بالا</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="top-end">
    <VButton class="mx-1"> بالا انتها</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> بالا انتها</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="bottom">
    <VButton class="mx-1"> پایین </VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> پایین </h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="bottom-end">
    <VButton class="mx-1"> پایین انتها</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> پایین انتها</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="left">
    <VButton class="mx-1"> چپ</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> چپ</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="left-end">
    <VButton class="mx-1"> چپ انتها</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> چپ انتها</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="right">
    <VButton class="mx-1"> راست </VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> راست </h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy placement="right-end">
    <VButton class="mx-1"> راست انتها</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted"> راست انتها</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->
