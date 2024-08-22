---
state:
  markdown: '## سلام Vuero
  
  
  این یک محتوای پیش نمایش **Markdown** است.'
---

<!--lint disable list-item-spacing-->

### VMarkdownPreview

کامپوننت `<VMarkdownPreview />`Vuero را ارسال می کند که کد منبع Markdown را به HTML تبدیل می کند و بلاک های کد را با استفاده از shiki برجسته می کند.
این کامپوننت از [`unifiedjs`](https://github.com/unifiedjs/unified)، یک جعبه ابزار قدرتمند برای پردازش و دستکاری متن و فایل‌های علامت‌گذاری، برای تجزیه و تبدیل کد منبع Markdown استفاده می‌کند.
unifiedjs دارای چندین مزیت است، از جمله:

- پشتیبانی از طیف گسترده‌ای از افزونه‌ها که قابلیت‌های اضافی مانند برجسته‌سازی سینتکس (syntax )و فرمت کردن کد را فعال می‌کنند.
- توسعه پذیری، به توسعه دهندگان اجازه می دهد تا پلاگین های سفارشی را برای رفع نیازهای خاص خود ایجاد کنند

[`shiki`](https://github.com/shikijs/shiki) یک کتابخانه برجسته syntax با کارایی بالا است که برای افزودن برجسته‌سازی syntax به بلاک‌های کد در HTML تولید شده استفاده می‌شود. برخی از مزایای استفاده از shiki عبارتند از:

- سریع و سبک وزن، با یک بسته نرم افزاری کوچک
- از طیف گسترده ای از زبان های برنامه نویسی پشتیبانی می کند
- قابل سفارشی سازی، به توسعه دهندگان این امکان را می دهد که از بین طرح ها و سبک های رنگی مختلف انتخاب کنند

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## سلام Vuero\n\nاین یک محتوای پیش نمایش **Markdown** است.')
</script>

<template>
  <VFlex column-gap="1rem">
    <VFlexItem flex-grow="1">
      <VField>
        <VControl>
          <VTextarea v-model="markdown" autogrow />
        </VControl>
      </VField>
    </VFlexItem>

    <VFlexItem flex-grow="1">
      <VMarkdownPreview :source="markdown" />
    </VFlexItem>
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex column-gap="1rem">
  <VFlexItem flex-grow="1">
    <VField>
      <VControl>
        <VTextarea v-model="frontmatter.state.markdown" autogrow />
      </VControl>
    </VField>
  </VFlexItem>
  <VFlexItem flex-grow="1">
    <VMarkdownPreview :source="frontmatter.state.markdown" />
  </VFlexItem>
</VFlex>

<!--/example-->
