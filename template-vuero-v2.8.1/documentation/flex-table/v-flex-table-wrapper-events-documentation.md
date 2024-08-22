---
disable_code: true
slimscroll: true
---

### رویداد های VFlexTableWrapper

رویدادهای کامل موجود برای کامپوننت `<VFlexTableWrapper />` در اینجا آمده است:

| رویداد                                                                                       | کال بک (Callback)                                          | توضیحات                                                                                              |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| @update:sort                                                                                 | <span class="is-function">`(value: string) => void`</span> | این اتفاق وقوع می‌یابد زمانی که یک ترتیب مرتب سازی به‌روزرسانی می‌شود<br />**Requires `sort` props** |
| @update:searchTerm                                                                           | <span class="is-function">`(value: string) => void`</span> |
| این اتفاق در هنگام به‌روزرسانی یک عبارت جستجو رخ می‌دهد<br />**Requires `searchTerm` props** |
| @update:page                                                                                 | <span class="is-function">`(value: number) => void`</span> | اتفاق می افتد زمانی که یک صفحه به روز میشود<br />**Requires `page` props**                           |
| @update:limit                                                                                | <span class="is-function">`(value: number) => void`</span> | وقوع میابد زمانی که یک محدودیت به روز رسانی میشود<br />**Requires `limit` props**                    |
