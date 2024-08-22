---
disable_example: true
---

### جدول بیسیک

Vuero یک جدول اصلی Html5 ارائه می دهد که توسط Bulma طراحی شده است.
شما به سادگی باید کلاس `.table` را به یک المنت جدول html5 اضافه کنید.
همچنین می‌توانید کلاس `.is-hoverable` را برای برجسته کردن ردیف‌ها در هاور اضافه کنید.

<!--code-->

```vue
<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th scope="col">نام</th>
        <th scope="col">نام خانوادگی</th>
        <th scope="col">موقعیت</th>
        <th scope="col" class="is-end">
          <div class="dark-inverted is-flex is-justify-content-flex-end">اقدامات</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>تینا</td>
        <td>باکری</td>
        <td>رئیس بخش فروش</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>علی</td>
        <td>احمدی</td>
        <td>مدیر اجرایی ارشد</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>سام</td>
        <td>والایی</td>
        <td>مهندس نرم افزار</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>ژاله</td>
        <td>نکویی</td>
        <td>مدیریت منابع انسانی</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>میثم</td>
        <td>جانپناهی</td>
        <td>حسابدار</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
```

<!--/code-->
