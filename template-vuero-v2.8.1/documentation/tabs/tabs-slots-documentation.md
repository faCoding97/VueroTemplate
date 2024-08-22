---
disable_code: true
slimscroll: true
---

### اسلات های (Slots) VTabs

اسلات های کامل موجود برای کامپوننت `<VTabs />` در اینجا آمده است:

| اسلات                  | ویژگی                                                                                                                                                        | توضیحات              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| #tab<br />**required** | <span class="is-array">`<{ activeValue: string }>`</span>                                                                                                    | محتوای تب درونی      |
| #tab-link              | <span class="is-array">`<{`<br/>` tab: VTabsItem,`<br/>` index: number,`<br/>` activeValue: string,`<br/>` toggle: (value: string) => void,`<br/>`}>`</span> | محتوای پیوند تب کامل |
| #tab-link-label        | <span class="is-array">`<{`<br/>` tab: VTabsItem,`<br/>` index: number,`<br/>` activeValue: string,`<br/>` toggle: (value: string) => void,`<br/>`}>`</span> | برچسب پیوند تب       |
