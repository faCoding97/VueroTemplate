### عنوان ها

برای ایجاد عنوان، می‌توانید کلاس `title` را به هر المنت html اضافه کنید.
اندازه عنوان را می توان با اصلاح کننده های شماره گذاری شده با استفاده از الگوی `is-*` کنترل کرد که در آن `*` عددی بین 3 و 6 را نشان می دهد.
عناوین همچنین می‌توانند با استفاده از `is-thin` نازک‌تر، با استفاده از `is-bold` پررنگ‌تر یا با استفاده از کلاس‌های اصلاح‌کننده `is-bolder` پررنگ‌تر باشند.

<!--code-->

```vue
<template>
  <div class="columns is-multiline">
    <div class="column is-3">
      <h1 class="title is-3 is-narrow toc-ignore">این یک عنوان میباشد</h1>
      <p>این عنوان حجیم است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow toc-ignore">این یک عنوان میباشد</h2>
      <p>این عنوان بزرگی است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow toc-ignore">این یک عنوان میباشد</h2>
      <p>این عنوان متوسط است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow toc-ignore">این یک عنوان میباشد</h2>
      <p>این عنوان کوچکتر است</p>
    </div>
    <div class="column is-3">
      <h1 class="title is-3 is-narrow toc-ignore is-bold">این یک عنوان میباشد</h1>
      <p>این عنوان حجیم بولد است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow toc-ignore is-bold">این یک عنوان میباشد</h2>
      <p>این عنوان بزرگ بولد است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow toc-ignore is-bold">این یک عنوان میباشد</h2>
      <p>این عنوان متوسط بولد است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow toc-ignore is-bold">این یک عنوان میباشد</h2>
      <p>این عنوان کوچکتر بولد است</p>
    </div>
    <div class="column is-3">
      <h1 class="title is-3 is-narrow toc-ignore is-bolder">این یک عنوان میباشد</h1>
      <p>این عنوان حجیم بولدتر است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow toc-ignore is-bolder">این یک عنوان میباشد</h2>
      <p>این عنوان بزرگ بولدتر است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow toc-ignore is-bolder">این یک عنوان میباشد</h2>
      <p>این عنوان متوسط بولدتر است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow toc-ignore is-bolder">این یک عنوان میباشد</h2>
      <p>این عنوان کوچکتر بولدتر است</p>
    </div>
    <div class="column is-3">
      <h1 class="title is-3 is-narrow toc-ignore is-thin">این یک عنوان میباشد</h1>
      <p>این عنوان حجیم نازک است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow toc-ignore is-thin">این یک عنوان میباشد</h2>
      <p>این عنوان بزرگ نازک است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow toc-ignore is-thin">این یک عنوان میباشد</h2>
      <p>این عنوان متوسط نازک است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow toc-ignore is-thin">این یک عنوان میباشد</h2>
      <p>این عنوان کوچکتر نازک است</p>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns is-multiline">
  <div class="column is-3">
    <h1 class="title is-3 is-narrow toc-ignore">  این یک عنوان میباشد</h1>
    <p>این عنوان حجیم است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow toc-ignore">  این یک عنوان میباشد</h2>
    <p>این عنوان بزرگی است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow toc-ignore">  این یک عنوان میباشد</h2>
    <p>این عنوان متوسط است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow toc-ignore">  این یک عنوان میباشد</h2>
    <p>این عنوان کوچکتر است</p>
  </div>
  <div class="column is-3">
    <h1 class="title is-3 is-narrow toc-ignore is-bold">  این یک عنوان میباشد</h1>
    <p>این عنوان حجیم بولد است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow toc-ignore is-bold">  این یک عنوان میباشد</h2>
    <p>این عنوان بزرگ بولد است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow toc-ignore is-bold">  این یک عنوان میباشد</h2>
    <p>این عنوان متوسط بولد است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow toc-ignore is-bold">  این یک عنوان میباشد</h2>
    <p>این عنوان کوچکتر بولد است</p>
  </div>
  <div class="column is-3">
    <h1 class="title is-3 is-narrow toc-ignore is-bolder">
        این یک عنوان میباشد
    </h1>
    <p>این عنوان حجیم بولدتر است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow toc-ignore is-bolder">
        این یک عنوان میباشد
    </h2>
    <p>این عنوان بزرگ بولدتر است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow toc-ignore is-bolder">
        این یک عنوان میباشد
    </h2>
    <p>این عنوان متوسط بولدتر است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow toc-ignore is-bolder">
        این یک عنوان میباشد
    </h2>
    <p>این عنوان کوچکتر بولدتر است</p>
  </div>
  <div class="column is-3">
    <h1 class="title is-3 is-narrow toc-ignore is-thin">  این یک عنوان میباشد</h1>
    <p>این عنوان حجیم نازک  است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow toc-ignore is-thin">  این یک عنوان میباشد</h2>
    <p>این عنوان بزرگ نازک  است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow toc-ignore is-thin">  این یک عنوان میباشد</h2>
    <p>این عنوان متوسط نازک  است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow toc-ignore is-thin">  این یک عنوان میباشد</h2>
    <p>این عنوان کوچکتر نازک  است</p>
  </div>
</div>

<!--/example-->
