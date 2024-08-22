### VCardSocial

کامپوننت `<VCardSocial />`یک تقویت کننده و پورت Vue از کامپوننت bulma card کلاسیک است، روشی درجه یک و آسان برای نمایش محتوای رسانه. این کامپوننت دارای چندین ویژگی برای ارسال در محتوایی است که می خواهید نمایش دهید.
برای جزئیات بیشتر، نمونه کد را بررسی کنید.
برای جزئیات بیشتر، نمونه کد را بررسی کنید.

<!--code-->

```vue
<template>
  <VCardSocial
    title="توییت ویژه"
    network="twitter"
    avatar="/demo/avatars/19.jpg"
    username="@gretak"
    :hashtags="['#bulmaio', '#css', '#responsive']"
    share-label="Retweet"
    like-label="لایک"
  >
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
    گرافیک است mauris.
  </VCardSocial>
</template>
```

<!--/code-->
