---
state:
  markdown: '## سلام Vuero
  
  
  این یک محتوای پیش نمایش **Markdown** است.'
---

<!--lint disable list-item-spacing-->

### VMarkdownEditor

Vuero کامپوننت `<VMarkdownEditor />` را ارسال می کند که یک ویرایشگر Markdown قابل دسترسی را با یک پیش نمایش زنده با استفاده از `<VMarkdownPreview />` ترکیب می کند.
این کامپوننت در زیر هود از [`textarea-markdown-editor`](https://github.com/Resetand/textarea-markdown-editor) استفاده می کند.
برای ارائه یک ویرایشگر Markdown قدرتمند برای vue 3 با پشتیبانی از دستورات قابل توسعه، api را در معرض دید قرار داد.

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## سلام Vuero\n\nاین یک محتوای پیش نمایش **Markdown** است.')
</script>

<template>
  <VMarkdownEditor v-model="markdown" autogrow />
</template>
```

<!--/code-->

<!--example-->

<VMarkdownEditor v-model="frontmatter.state.markdown" autogrow />

<!--/example-->
