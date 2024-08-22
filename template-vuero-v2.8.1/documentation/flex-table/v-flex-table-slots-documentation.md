---
disable_code: true
slimscroll: true
---

### اسلات های VFlexTable

اسلات های کامل موجود برای کامپوننت `<VFlexTable />` در اینجا آمده است:

| اسلات          | ویژگی                                                                                                                                  | توضیحات                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| #header        | <span class="is-null">`null`</span>                                                                                                    | All ناحیه سرصفحه        |
| #header-column | <span class="is-array">`<{ column: VFlexTableColumn }>`</span>                                                                         | محتوای سلول سرصفحه      |
| #body          | <span class="is-null">`null`</span>                                                                                                    | All body area           |
| #body-row-pre  | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | نمایش محتوا قبل از ردیف |
| #body-row      | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | محتوای ردیف             |
| #body-row-post | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | نمایش محتوا بعد از ردیف |
| #body-cell     | <span class="is-array">`<{`<br/>` row: any,`<br/>` column: VFlexTableColumn,`<br/>` index: number,`<br/>` value: any,`<br/>`}>`</span> | محتوای سلول             |
