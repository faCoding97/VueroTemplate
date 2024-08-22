### رنگ های VProgress

Vuero یک کامپوننت `<VProgress />` خوب و تمیز ارائه می دهد که
تقریباً در همه جا، در طیف گسترده ای از طرح بندی ها قابل استفاده است.
برای تغییر رنگ نوار پیشرفت، از پراپ `color` استفاده کنید.
5 اصلاح کننده رنگ موجود است: `primary`، `success`، `info`،
`warning` و `danger`.

<!--code-->

```vue
<template>
  <VProgress size="tiny" :value="70" />
  <VProgress size="tiny" color="success" :value="55" />
  <VProgress size="tiny" color="info" :value="45" />
  <VProgress size="tiny" color="warning" :value="60" />
  <VProgress size="tiny" color="danger" :value="38" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <VProgress size="tiny" :value="70" />
        <VProgress size="tiny" color="success" :value="55" />
        <VProgress size="tiny" color="info" :value="45" />
        <VProgress size="tiny" color="warning" :value="60" />
        <VProgress size="tiny" color="danger" :value="38" />
    </div>
</div>

<!--/example-->
