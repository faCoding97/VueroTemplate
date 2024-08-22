### زیرنویس

برای ایجاد یک زیرنویس، می‌توانید کلاس `subtitle` را به هر المنت html اضافه کنید.
اندازه‌های زیرنویس را می‌توان با اصلاح‌کننده‌های شماره‌دار با استفاده از الگوی `is-*` کنترل کرد که در آن `*` عددی بین 4 و 6 را نشان می‌دهد.

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-3">
      <h1 class="title is-3 toc-ignore">این یک عنوان میباشد</h1>
      <p class="subtitle is-4">این یک زیرنویس حجیم است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 toc-ignore">این یک عنوان میباشد</h2>
      <p class="subtitle is-4">این یک زیرنویس بزرگ است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 toc-ignore">این یک عنوان میباشد</h2>
      <p class="subtitle is-5">این یک زیرنویس متوسط است</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 toc-ignore">این یک عنوان میباشد</h2>
      <p class="subtitle is-6">این یک زیرنویس کوچکتر است</p>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-3">
    <h1 class="title is-3 toc-ignore">  این یک عنوان میباشد</h1>
    <p class="subtitle is-4">این یک زیرنویس حجیم است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 toc-ignore">  این یک عنوان میباشد</h2>
    <p class="subtitle is-4">این یک زیرنویس بزرگ است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 toc-ignore">  این یک عنوان میباشد</h2>
    <p class="subtitle is-5">این یک زیرنویس متوسط است</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 toc-ignore">  این یک عنوان میباشد</h2>
    <p class="subtitle is-6">این یک زیرنویس کوچکتر است</p>
  </div>
</div>

<!--/example-->
