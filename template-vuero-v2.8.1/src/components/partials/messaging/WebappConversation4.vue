<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div
    id="navbar-conversation-4"
    class="chat-area-content"
  >
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:menu"
        />
      </button>
      <div class="chat-area-title">
        آلیا خ.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/7.jpg"
          alt=""
          data-user-popover="0"
          @error.once="onceImageErrored(150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/7.jpg"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال در 10:11 ق.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            هی اریک من چند صفحه نمایش دارم که به شما نشان دهم.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/11.png"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            این یکی خیلی رنگارنگ است، من آن را دوست دارم.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/9.png"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            من منحنی های این یکی را دوست دارم.
          </div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال در 10:44 ق.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
          بنظر خوب میرسه
          </div>
          <div class="chat-msg-text">
        می خواهید همگام سازی کنید؟
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
