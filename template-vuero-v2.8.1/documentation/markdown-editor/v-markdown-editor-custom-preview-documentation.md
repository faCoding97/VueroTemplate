---
markdown: '## سلام Vuero


این یک محتوای پیش نمایش **Markdown** است.'
---

### پیش نمایش سفارشی

می‌توانید از اسلات `preview` برای سفارشی کردن نحوه ارائه پیش‌نمایش استفاده کنید.

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## سلام Vuero\n\nاین یک محتوای پیش نمایش **Markdown** است.')
</script>

<template>
  <VMarkdownEditor v-model="markdown" autogrow>
    <!-- Display content after the textarea -->
    <template #after-textarea>
      <p class="help is-flex is-align-items-center">
        <VIcon icon="feather:info" class="is-size-6" />
        <span class="ml-1">Markdown syntax supported</span>
      </p>
    </template>

    <!-- Custom preview -->
    <template #preview="{ value }">
      <VCard class="mb-4">
        <pre>{{ value }}</pre>
      </VCard>

      <VCard radius="smooth">
        <VMarkdownPreview :source="value" size="medium" max-width="small" />
      </VCard>
    </template>
  </VMarkdownEditor>
</template>
```

<!--/code-->

<!--example-->

<VMarkdownEditor v-model="frontmatter.markdown" autogrow>
  <template #after-textarea>
    <p class="help is-flex is-align-items-center">
      <VIcon icon="feather:info" class="is-size-6" />
      <span class="ml-1">دستور Markdown پشتیبانی می شود</span>
    </p>
  </template>
  <template #preview="{ value }">
    <VCard class="mb-4">
      <pre>{{ value }}</pre>
    </VCard>
    <VCard radius="smooth">
      <VMarkdownPreview :source="value" size="medium" max-width="small" />
    </VCard>
  </template>
</VMarkdownEditor>

<!--/example-->
