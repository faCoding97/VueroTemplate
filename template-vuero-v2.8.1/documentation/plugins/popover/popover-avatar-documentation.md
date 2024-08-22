### popover آواتار

Popover ها می توانند هر نوع محتوایی، از جمله کامپوننت های Vuero موجود را در خود جای دهند. شما به راحتی می توانید یک `<VAvatar />` را در پاپ اور خود اضافه کنید.

<!--code-->

```vue
<template>
  <Tippy>
    <VButton>روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <VAvatar picture="/demo/avatars/7.jpg" size="small" />
          <h4 class="dark-inverted">آلیا خ.</h4>
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
  <Tippy>
    <VButton class="mx-1">روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar picture="/demo/avatars/7.jpg" size="small"/>
              <h4 class="dark-inverted">آلیا خ.</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" squared />
              <h4 class="dark-inverted">علی ز.</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar size="small" color="info" initials="HL"/>
              <h4 class="dark-inverted">هادی ل. </h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar size="small" color="h-purple" initials="Sk" squared/>
              <h4 class="dark-inverted">سارا ک.</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->
