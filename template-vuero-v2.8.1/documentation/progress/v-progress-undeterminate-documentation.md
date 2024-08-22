### پیشرفت نامشخص

در برخی موارد استفاده خاص، ممکن است بخواهید پیشرفت نامشخصی را نشان دهید.
اگر می خواهید نوارهای پیشرفت شما وضعیت نامشخصی را نشان دهد،
شما فقط باید پراپ `value` را حذف کنید. CSS بقیه موارد را انجام خواهد داد

<!--code-->

```vue
<template>
  <VProgress size="tiny" />
  <VProgress size="tiny" color="success" />
  <VProgress size="tiny" color="info" />
  <VProgress size="tiny" color="warning" />
  <VProgress size="tiny" color="danger" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <VProgress size="tiny" />
        <VProgress size="tiny" color="success" />
        <VProgress size="tiny" color="info" />
        <VProgress size="tiny" color="warning" />
        <VProgress size="tiny" color="danger" />
    </div>
</div>

<!--/example-->
