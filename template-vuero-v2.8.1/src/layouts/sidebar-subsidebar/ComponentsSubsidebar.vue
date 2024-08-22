<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">
        کامپوننت ها
      </h3>
      <div
        class="panel-close"
        tabindex="0"
        role="button"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:x"
        />
      </div>
    </div>
    <div
      class="inner"
      data-simplebar
    >
      <ul>
        <li>
          <RouterLink to="/components/">
            کامپوننت هاب
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/content">
            محتوا
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/components/table">
            جدول
          </RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">نمایش</span>
        </li>
        <li>
          <RouterLink to="/components/avatar/">
            وی آواتار (VAvatar)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/avatar/stack">
            وی آواتاراستک (VAvatarStack)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/block">
            وی بلاک(VBlock)
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/components/icon-box">
            وی آیکون‌باکس(VIconBox)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/icon-wrap">
            وی‌آیکون‌رپ(VIconWrap)
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/snack">
            VSnack <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tag">
            وی تگ(VTag)
          </RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">چیدمان</span>
        </li>
        <li>
          <RouterLink to="/components/flex">
            وی‌فلکس (VFlex )<small>و VFlexItem</small>
            <VTag
              label="v2.0"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/grid">
            وی‌گرید (VGrid )<small>و VGridItem</small>
            <VTag
              label="v2.0"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/breadcrumb">
            وی بردکرامب (VBreadcrumb)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tabs">
            وی تبز (VTabs) <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/pagination">
            وی‌فلکس‌پجینیشن(VFlexPagination)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-preview">
            VMarkdownPreview <VTag
              label="v2.6"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-editor">
            VMarkdownEditor <VTag
              label="v2.6"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
           وی فلکس  تیبل(VFlexTable)
            <VTag
              label="v2.2"
              class="ml-2"
              color="primary"
              outlined
              curved
            />
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/flextable/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
          کاربرد بیسیک
          </RouterLink>
          <RouterLink
            to="/components/flextable/columns"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            ستون های سفارشی
          </RouterLink>
          <RouterLink
            to="/components/flextable/slots"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            استفاده از اسلات
          </RouterLink>
          <RouterLink
            to="/components/flextable/render"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
           رندر فانکشن (پیشرفته)
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VFlexTableWrapper
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/async"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
          همگام سازی داده (پیشرفته)
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            آکاردئون
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/accordion/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی آکاردئون (VAccordion)
          </RouterLink>
          <RouterLink
            to="/components/collapse"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی کالپس (VCollapse)
          </RouterLink>
          <RouterLink
            to="/components/accordion/image"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VAccordionImage
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            کارت ها
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/card/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی کارد(VCard)
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/components/card/action"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
           وی کارداکشن(VCardAction)
   <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/components/card/advanced"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VCardAdvanced
          </RouterLink>
          <RouterLink
            to="/components/card/media"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
               وی‎‌کارد مدیا(VCardMedia)
    <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/components/card/social"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
             وی‎‌کارد سوشیال(VCardSocial)
     </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            نگهدارنده های مکان
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/components/placeholder-page"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPlaceholderPage
          </RouterLink>
          <RouterLink
            to="/components/placeholder-section"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPlaceholderSection
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <VCollapseLinks>
          <template #header>
            افزونه ها
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/components/plugins/notif"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Notyf
          </RouterLink>
          <RouterLink
            to="/components/plugins/tippy"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Tippy
          </RouterLink>
          <RouterLink
            to="/components/plugins/billboard-js"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VBillboardJS
          </RouterLink>
          <RouterLink
            to="/components/plugins/photos-swipe"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPhotosSwipe
          </RouterLink>
          <RouterLink
            to="/components/plugins/plyr"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPlyr
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
