<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">
        المنت ها
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
          <RouterLink to="/elements/">
            المنت هاب
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/colors">
            رنگ ها
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/helpers">
            کمک کننده ها
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            آیکون ها
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
            to="/elements/icons/iconify"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Iconify
          </RouterLink>
          <RouterLink
            to="/elements/icons/line-icons-light"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Line Icons Light
          </RouterLink>
          <RouterLink
            to="/elements/icons/line-icons-regular"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Line Icons Regular
          </RouterLink>
          <RouterLink
            to="/elements/icons/font-awesome"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Font Awesome 5
          </RouterLink>
        </VCollapseLinks>

        <li class="divider with-label">
          <span class="divider-label">تعامل</span>
        </li>
        <li>
          <RouterLink to="/elements/dropdown">
            وی‌دراپ داون(VDropdown)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/loader">
            وی‌لودر(VLoader)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/placeload/">
            وی پلیسلود (VPlaceload)
            <VTag
              label="v1.2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/placeload/text">
             وی پلیسلودتکست(VPlaceloadText)
            <VTag
              label="v1.2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/placeload/avatar">
             وی پلیسلودآواتار (VPlaceloadAvatar)
            <VTag
              label="v1.2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/message">
            وی مسج  (VMessage)
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/modal">
              وی مدال (VModal)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/progress">
            وی پروگرس (VProgress)
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/tooltip">
            وی تولتیپ (VTootlip)
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            دکمه ها
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
            to="/elements/button"
            class="is-submenu"
          >
            وی باتن(VButton)
          </RouterLink>
          <RouterLink
            to="/elements/action"
            class="is-submenu"
          >
            وی اکشن(VAction)
          </RouterLink>
          <RouterLink
            to="/elements/icon-button"
            class="is-submenu"
          >
            وی آیکون باتن(VIconButton)
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            فرم ها
            <VTag
              label="v2.3"
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
            to="/elements/forms/field"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی فیلد(VField)
          </RouterLink>
          <RouterLink
            to="/elements/forms/control"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی کنترل(VControl)
          </RouterLink>
          <RouterLink
            to="/elements/forms/inputs"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی اینپوت(VInput)
          </RouterLink>
          <RouterLink
            to="/elements/forms/textarea"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی تکست اریا(VTextarea)
          </RouterLink>
          <RouterLink
            to="/elements/forms/selects"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی سلکت(VSelect)
          </RouterLink>
          <RouterLink
            to="/elements/checkbox"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی چک‌باکس(VCheckbox)
          </RouterLink>
          <RouterLink
            to="/elements/radio"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی رادیو(VRadio)
          </RouterLink>
          <!-- <RouterLink to="/elements/forms/addons" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Input Addons
          </RouterLink> -->
          <RouterLink
            to="/elements/forms/range-rating"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            وی رنج‌ریتینگ(VRangeRating)
          </RouterLink>
          <RouterLink
            to="/elements/forms/file"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
           فایل اینپوت ( File Input)
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            سوئیچ ها
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
            to="/elements/animated-checkbox"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
           وی انیمیتد‌چک‌باکس( VAnimatedCheckbox)
          </RouterLink>
          <RouterLink
            to="/elements/switch-block"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
           وی سوئیچ‌بلاک( VSwitchBlock)
          </RouterLink>
          <RouterLink
            to="/elements/switch-segment"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VSwitchSegment
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
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
            to="/elements/addons/calendar"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VCalendar &amp; VDatePicker
          </RouterLink>
          <RouterLink
            to="/elements/addons/imask-input"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VIMaskInput
          </RouterLink>
          <RouterLink
            to="/elements/addons/filepond"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VFilePond
          </RouterLink>
          <RouterLink
            to="/elements/addons/credit-card"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VCreditCard
          </RouterLink>
          <RouterLink
            to="/elements/addons/vueform-multiselect"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            @vueform/multiselect
          </RouterLink>
          <RouterLink
            to="/elements/addons/vueform-slider"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            @vueform/slider
          </RouterLink>
          <RouterLink
            to="/elements/addons/ckeditor"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            CKEditor 5
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
