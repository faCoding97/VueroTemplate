### VTabs

Vuero تب های ناوبری مدل‌دار ارائه می‌کند که می‌توانید از آنها برای ایجاد طرح‌بندی‌های زیبا و بهینه‌سازی شده استفاده کنید.تب ها با اجرای جاوا اسکریپت کار می کنند.
برای جزئیات بیشتر نشانه گذاری را بررسی کنید.

<!--code-->

```vue
<template>
  <VTabs
    selected="team"
    :tabs="[
      { label: 'تیم', value: 'team' },
      { label: 'پروژه ها', value: 'projects' },
      { label: 'تسک ها', value: 'tasks' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
        می باشد
      </p>
      <p v-else-if="activeValue === 'projects'">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
        می باشد
      </p>
      <p v-else-if="activeValue === 'tasks'">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
        می باشد
      </p>
      <p v-else>Default content</p>
    </template>
  </VTabs>
</template>
```

<!--/code-->

<!--example-->

<VTabs selected="team" :tabs="[{ label: 'تیم', value: 'team' },{ label: 'پروژه ها', value: 'projects' },{ label: 'تسک ها', value: 'tasks' }]">
  <template #tab="{ activeValue, ...rest }">
    <p v-if="activeValue === 'team'">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
    </p>
    <p v-else-if="activeValue === 'projects'">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
    </p>
    <p v-else-if="activeValue === 'tasks'">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
    </p>
    <p v-else>
      azeaze {{ { rest, activeValue } }}
    </p>
  </template>
</VTabs>

<!--/example-->
