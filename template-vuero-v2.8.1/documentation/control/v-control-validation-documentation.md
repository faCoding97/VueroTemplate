### اعتبارسنجی

Vuero سبک‌های اعتبارسنجی `VControl` را ارائه می‌کند تا با هر نوع کتابخانه اعتبارسنجی فرمی که می‌توانید در پروژه خود استفاده کنید، مطابقت دارد.
از پراپس نشان داده شده در نمونه های کد برای رسیدگی به اعتبارسنجی استفاده کنید.

<!--code-->

```vue
<template>
  <VField>
    <VControl icon="feather:user" is-valid>
      <VInput type="text" placeholder="نام کاربری" value="Superman" />
      <p class="help has-text-success">این نام کاربری در دسترس است</p>
    </VControl>
  </VField>
  <VField>
    <VControl icon="feather:lock" has-error>
      <VInput type="text" placeholder="رمز عبور" value="passwd" />
      <p class="help has-text-danger">رمز عبور باید دارای 8 کاراکتر باشد</p>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<form method="post" novalidate @submit.prevent>
  <VField>
    <VControl icon="feather:user" is-valid>
      <VInput
        type="text"
        placeholder="نام کاربری"
        value="Superman"
        autocomplete="username"
      />
      <p class="help has-text-success">این نام کاربری در دسترس است</p>
    </VControl>
  </VField>
  <VField>
    <VControl icon="feather:lock" has-error>
      <VInput
        type="text"
        placeholder="رمز عبور"
        value="passwd"
        autocomplete="current-password"
      />
      <p class="help has-text-danger">رمز عبور باید دارای 8 کاراکتر باشد</p>
    </VControl>
  </VField>
</form>

<!--/example-->
