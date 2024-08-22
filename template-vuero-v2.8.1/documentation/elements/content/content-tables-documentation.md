### جدول

همچنین می‌توانید از کلاس `content` برای بسته‌بندی المنت `table` html برای اعمال حداقل سبک‌ها در رابط کاربری جدول خود استفاده کنید.
لطفاً برای یافتن نمونه‌های جدول و طرح‌بندی پیشرفته‌تر به بخش اجزای Vuero مراجعه کنید.

<!--code-->

```vue
<template>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th>قهرمان ها</th>
          <th>قدرت</th>
          <th>دسترسی</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>سوپرمن</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
          </td>
          <td>
            <span class="tag is-rounded is-success">در دسترس</span>
          </td>
        </tr>
        <tr>
          <td>بتمن</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </td>
          <td>
            <span class="tag is-rounded">غیر قابل دسترس</span>
          </td>
        </tr>
        <tr>
          <td>ددپول</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </td>
          <td>
            <span class="tag is-rounded">غیر قابل دسترس</span>
          </td>
        </tr>
        <tr>
          <td>اسپان</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star"></i>
          </td>
          <td>
            <span class="tag is-rounded is-success">در دسترس</span>
          </td>
        </tr>
        <tr>
          <td>گالاکتوس</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
          </td>
          <td>
            <span class="tag is-rounded">غیر قابل دسترس</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="content">
  <table>
    <thead>
      <tr>
        <th>قهرمان ها</th>
        <th>قدرت</th>
        <th>دسترسی</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>سوپرمن</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
        </td>
        <td>
          <span class="tag is-rounded is-success">در دسترس</span>
        </td>
      </tr>
      <tr>
        <td>بتمن</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </td>
        <td>
          <span class="tag is-rounded">غیر قابل دسترس</span>
        </td>
      </tr>
      <tr>
        <td>ددپول</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </td>
        <td>
          <span class="tag is-rounded">غیر قابل دسترس</span>
        </td>
      </tr>
      <tr>
        <td>اسپان</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star"></i>
        </td>
        <td>
          <span class="tag is-rounded is-success">در دسترس</span>
        </td>
      </tr>
      <tr>
        <td>گالاکتوس</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
        </td>
        <td>
          <span class="tag is-rounded">غیر قابل دسترس</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!--/example-->
