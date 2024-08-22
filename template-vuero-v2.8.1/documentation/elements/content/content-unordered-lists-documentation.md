### لیست های نامرتب

به‌طور پیش‌فرض، استفاده از فهرست `ul` نامرتب، فهرست html ایجاد نمی‌کند.
این بخشی از مشخصات Bulma است. برای ایجاد لیست نامرتب، آن را در داخل یک `div` با کلاس `content` قرار دهید. فهرست‌ها همچنین می‌توانند دارای اصلاح‌کننده `is-light` برای تغییر رنگ متن باشند.

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="content">
        <ul>
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ul>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ul class="is-light">
          <li>قهوه</li>
          <li>چای</li>
          <li>شیر</li>
        </ul>
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
      <ul>
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ul>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ul class="is-light">
        <li>قهوه</li>
        <li>چای</li>
        <li>شیر</li>
      </ul>
    </div>
  </div>
</div>

<!--/example-->
