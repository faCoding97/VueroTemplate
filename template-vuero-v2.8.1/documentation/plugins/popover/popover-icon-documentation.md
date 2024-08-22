### popover آیکون

Popover ها می توانند هر نوع محتوایی، از جمله کامپوننت های Vuero موجود را در خود جای دهند. شما به راحتی می توانید یک `<VIconBox />` در پاپ اور خود اضافه کنید.

<!--code-->

```vue
<template>
  <Tippy>
    <VButton>روی من هاور کن !</VButton>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <VIconBox size="small" color="primary">
            <i class="lnil lnil-crown-alt-1"></i>
          </VIconBox>
          <h4 class="dark-inverted">پاپ اور هاور</h4>
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
              <VIconBox size="small" color="primary">
                <i class="iconify" data-icon="feather:x" />
              </VIconBox>
              <h4 class="dark-inverted">پاپ اور هاور</h4>
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
                <VIconBox size="small" color="info">
                    <i class="lnil lnil-crown-alt-1"></i>
                </VIconBox>
                <h4 class="dark-inverted">پاپ اور هاور</h4>
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
                <VIconBox size="small" color="orange">
                    <i class="lnil lnil-crown-alt-1"></i>
                </VIconBox>
                <h4 class="dark-inverted">پاپ اور هاور</h4>
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
                <VIconBox size="small" color="green">
                    <i class="lnil lnil-crown-alt-1"></i>
                </VIconBox>
                <h4 class="dark-inverted">پاپ اور هاور</h4>
          </div>
          <div class="popover-body">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->
