### VSwitchBlock

زمانی که شما نیاز به نمایش چنین کنترلی در فرم های خود دارید، Vuero چک باکس های سوئیچ با استایل زیبا را ارائه می دهد.کامپوننت `SwitchBlock` Vuero دارای چندین تغییر دهنده رنگ است.اصلاح کننده های موجود شامل `primary`, `success`,
`info`, `warning` و `danger` میباشند.
لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField horizontal>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="primary" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="success" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="info" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="warning" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="primary" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="success" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="info" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="warning" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="danger" checked />
  </VControl>
</VField>

<!--/example-->
