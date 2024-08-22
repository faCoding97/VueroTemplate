### VProgress

Vuero یک کامپوننت `<VProgress />` خوب و تمیز ارائه می دهد که
تقریباً در همه جا، در طیف گسترده ای از طرح بندی ها قابل استفاده است.
برای تغییر ضخامت نوار پیشرفت از پراپ `size` استفاده کنید.
3 size modifiers are available: `tiny`, `smaller` and `small`.
3 اصلاح کننده اندازه موجود است: `tiny`، `smaller` و `small`.

<!--code-->

```vue
<template>
  <VProgress size="tiny" :value="65" />
  <VProgress size="smaller" :value="90" />
  <VProgress size="small" :value="31" />
  <VProgress :value="15" />
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <VProgress size="tiny" :value="65" />
        <VProgress size="smaller" :value="90" />
        <VProgress size="small" :value="31" />
        <VProgress :value="15" />
    </div>
</div>

<!--/example-->
