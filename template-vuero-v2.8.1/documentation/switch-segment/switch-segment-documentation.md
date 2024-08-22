### VSwitchSegment

هنگامی که شما نیاز به نمایش چنین کنترلی در فرم های خود دارید، Vuero بخش سوئیچ با استایل زیبا را ارائه می دهد. کامپوننت `VSwitch Segment` Vuero دارای چندین اصلاح کننده رنگ است. اصلاح کننده های موجود شامل `primary`, `success`,
`info`, `warning` و `danger` میباشند.
لطفاً برای جزئیات بیشتر در مورد استفاده به نشانه گذاری مراجعه کنید.

<!--code-->

```vue
<template>
  <VField horizontal>
    <VControl subcontrol>
      <VSwitchSegment />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="primary" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="success" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="info" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="warning" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl subcontrol>
    <VSwitchSegment />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="primary" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="success" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="info" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="warning" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="danger" checked />
  </VControl>
</VField>

<!--/example-->
