<script setup lang="ts">
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div class="toolbar-notifications is-hidden-mobile">
    <div
      ref="dropdownElement"
      class="dropdown is-spaced is-dots is-right dropdown-trigger"
    >
      <div
        tabindex="0"
        class="is-trigger"
        aria-haspopup="true"
        @click="dropdown.toggle"
        @keydown.space.prevent="dropdown.toggle"
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
                نوتیفیکیشن ها
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
</template>
