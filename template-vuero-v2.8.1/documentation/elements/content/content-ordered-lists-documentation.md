### لیست های مرتب

لیست های مرتب شده `ol` نیز با استفاده از یک div با کلاس content تولید می شوند.
گلوله های لیست مرتب شده را می توان با ویژگی type کنترل کرد.
انواع تایپ ها عبارتند از `type="1"`, `type="A"`, `type="a"`, `type="I"`, `type="i"`

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="content">
        <ol type="1">
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol type="A">
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol class="is-light" type="a">
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol class="is-light" type="I">
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol class="is-light" type="i">
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ol>
      </div>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-one-fifth">
    <div class="content">
      <ol type="1">
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol type="A">
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol class="is-light" type="a">
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol class="is-light" type="I">
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol class="is-light" type="i">
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ol>
    </div>
  </div>
</div>

<!--/example-->
