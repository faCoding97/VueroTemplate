### پخش کننده ویدئو 1:1

ما یک بسته بندی vue سفارشی برای کتابخانه `Plyr` پخش‌کننده ویدیوی vanilla js نوشتیم. تنظیم آن واقعا آسان است. نسبت ویدیو را با استفاده از پراپ `ratio` تغییر دهید. نسبت‌های موجود `square`، `4by3` و `16by9` هستند.

<!--code-->

```vue
<template>
  <VPlyr
    ratio="square"
    source="https://www.youtube.com/embed/lE5VNpP8JqA?modestbranding=1&rel=0&showinfo=0"
    poster="/video/poster-1c.jpg"
    embed
  />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VPlyr class="ml-1"
    ratio="square"
    source="https://www.youtube.com/embed/lE5VNpP8JqA?modestbranding=1&rel=0&showinfo=0"
    poster="/video/poster-1c.jpg"
    reversed
    embed
  />
</div>

<!--/example-->
