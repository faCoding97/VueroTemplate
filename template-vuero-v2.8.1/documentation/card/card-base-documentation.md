---
disable_example: true
---

### VCard

کارت های Vuero بسیار متنوع هستند و می توانند در هر نوع طرح بندی استفاده شوند.
Vuero 3 کارت اصلی Html را با کلاس های زیر ارائه می دهد: `.s-card`،
`.r-card` و `.l-card`. تفاوت اصلی هر یک از آنها border radius است که ظاهر و احساس منحصر به فردی به هر یک از آنها می دهد.

<!--code-->

```vue
<template>
  <VCard radius="small">
    <h3 class="title is-5 mb-2">Iam an S-Card</h3>
    <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
      شرایط فعلی تکنولوژی مورد نیاز
    </p>
  </VCard>

  <VCard>
    <h3 class="title is-5 mb-2">Iam an R-Card</h3>
    <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
      شرایط فعلی تکنولوژی مورد نیاز
    </p>
  </VCard>

  <VCard radius="large">
    <h3 class="title is-5 mb-2">Iam an L-Card</h3>
    <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
      شرایط فعلی تکنولوژی مورد نیاز
    </p>
  </VCard>
</template>
```

<!--/code-->
