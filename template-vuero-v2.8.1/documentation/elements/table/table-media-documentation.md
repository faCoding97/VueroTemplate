---
disable_example: true
---

### جدول رسانه

Vuero یک جدول اصلی Html5 ارائه می دهد که توسط Bulma طراحی شده است.
شما به سادگی باید کلاس جدول را به یک المنت جدول html5 اضافه کنید.
به راحتی می توانید المنت های رسانه ای مانند آواتارهای vuero را در ردیف های جدول خود اضافه کنید.

<!--code-->

```vue
<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th scope="col" class="is-media"></th>
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
        <td class="is-media">
          <VAvatar picture="/demo/avatars/8.gif" />
        </td>
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
        <td class="is-media">
          <VAvatar picture="/demo/avatars/1.gif" />
        </td>
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
        <td class="is-media">
          <VAvatar picture="/demo/avatars/4.gif" />
        </td>
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
        <td class="is-media">
          <VAvatar initials="JD" color="info" />
        </td>
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
        <td class="is-media">
          <VAvatar picture="/demo/avatars/3.gif" />
        </td>
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
