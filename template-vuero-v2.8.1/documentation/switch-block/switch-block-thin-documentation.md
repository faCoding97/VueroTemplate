### Thin Switch

هنگامی که شما نیاز به نمایش چنین کنترلی در فرم های خود دارید، Vuero چک باکس های سوئیچ نازک خوبی را ارائه می دهد. از اصلاح کننده `thin` روی کامپوننت `VSwitchBlock` استفاده کنید.
لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField horizontal>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin color="primary" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin color="success" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin color="info" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin color="warning" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="primary" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="success" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="info" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="warning" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="danger" checked />
  </VControl>
</VField>

<!--/example-->
