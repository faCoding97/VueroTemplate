### پخش کننده ویدئو 16:9

ما یک بسته بندی vue سفارشی برای کتابخانه `Plyr` پخش‌کننده ویدیوی vanilla js نوشتیم. تنظیم آن واقعا آسان است. نسبت ویدیو را با استفاده از پراپ `ratio` تغییر دهید. نسبت‌های موجود `square`، `4by3` و `16by9` هستند.

<!--code-->

```vue
<template>
  <VPlyr
    ratio="16by9"
    source="https://www.youtube.com/embed/lE5VNpP8JqA?modestbranding=1&rel=0&showinfo=0"
    poster="/video/poster-2c.jpg"
    embed
  />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VPlyr class="ml-1"
    ratio="16by9"
    source="https://www.youtube.com/embed/lE5VNpP8JqA?modestbranding=1&rel=0&showinfo=0"
    poster="/video/poster-2c.jpg"
    embed
  />
</div>

<!--/example-->
