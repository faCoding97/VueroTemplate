<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { usePanels } from '/@src/stores/panels'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const panels = usePanels()
const darkmode = useDarkmode()
const emit = defineEmits(['close'])

const { locale } = useI18n()
const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'ar':
      return '/images/icons/flags/saudi-arabia.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})
</script>

<template>
  <div class="toolbar ml-auto">
    <div class="toolbar-link">
      <label class="dark-mode ml-auto">
        <input
          data-cy="dark-mode-toggle"
          type="checkbox"
          :checked="!darkmode.isDark"
          tabindex="0"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
          @change="darkmode.onChange"
        >
        <span />
      </label>
    </div>

    <a
      class="toolbar-link right-panel-trigger"
      tabindex="0"
      role="button"
      @keydown.space.prevent="panels.setActive('languages')"
      @click="panels.setActive('languages')"
    >
      <img
        :src="localFlagSrc"
        alt=""
      >
    </a>

    <div class="toolbar-notifications is-hidden-mobile">
      <div
        ref="dropdownElement"
        class="dropdown is-spaced is-dots is-right dropdown-trigger"
      >
        <div
          class="is-trigger"
          aria-haspopup="true"
          @click="dropdown.toggle"
        >
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:bell"
          />
          <span class="new-indicator pulsate" />
        </div>
        <div
          class="dropdown-menu"
          role="menu"
        >
          <div class="dropdown-content">
            <div class="heading">
              <div class="heading-left">
                <h6 class="heading-title">
                   اطلاعیه ها
                </h6>
              </div>
              <div class="heading-right">
                <RouterLink
                  class="notification-link"
                  to="/sidebar/layouts/profile-notifications"
                >
                  مشاهده همه
                </RouterLink>
              </div>
            </div>
            <ul class="notification-list">
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/7.jpg"
                      @error.once="onceImageErrored(150)"
                    >
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">سارا م .</span> نظر داد .
                    </p>
                    <p class="time">1 ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/12.jpg"
                      @error.once="onceImageErrored(150)"
                    >
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">محمد ح .</span> یک فایل را آپلود کرد.
                    </p>
                    <p class="time">2 ساعت پیش </p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/13.jpg"
                      @error.once="onceImageErrored(150)"
                    >
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">تارا س .</span>برای شما پیامی فرستاد
                    </p>
                    <p class="time">2 ساعت پیش </p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/25.jpg"
                      @error.once="onceImageErrored(150)"
                    >
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">ملانی و.</span>یک نظر گذاشت
                    </p>
                    <p class="time">3 ساعت پیش</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <a
      id="hide-chat-side"
      class="toolbar-link"
      tabindex="0"
      role="button"
      @keydown.space.prevent="emit('close')"
      @click="emit('close')"
    >
      <i
        aria-hidden="true"
        class="iconify rtl-hidden"
        data-icon="feather:chevron-left"
      />
      <i
        aria-hidden="true"
        class="iconify ltr-hidden"
        data-icon="feather:chevron-right"
      />
    </a>
  </div>
</template>
