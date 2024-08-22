<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div
    id="navbar-conversation-11"
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
        نازنین گ.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="onceImageErrored(150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/13.jpg"
            alt=""
            data-user-popover="6"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
            ارسال شده در 7:48 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            در اینجا چند اسکرین شات وجود دارد.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/15.png"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/9.png"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/7.png"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
            امیدوارم ازشون خوشت بیاد.
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
            ارسال شده در 10:21 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            به نظر عالی هستن!
          </div>
          <div class="chat-msg-text">
            با تشکر برای به اشتراک گذاری این!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
