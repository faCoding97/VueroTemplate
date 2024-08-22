<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div
    id="navbar-conversation-2"
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
        امید ش.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/39.jpg"
          alt=""
          data-user-popover="33"
          @error.once="onceImageErrored(150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/39.jpg"
            alt=""
            data-user-popover="33"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال شده در 9:34ق.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
          سلام اریک، من باید بازخوردی را با شما به اشتراک بگذارم.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/12.jpg"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
        اگرچه، من متخصص نیستم، اما آنها را بررسی کردم و عالی به نظر می رسند.
          </div>
          <div class="chat-msg-text">
        هر چند باید چند تغییر ایجاد کنیم.
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
           ارسال شده در 9:42 ق.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
        به نظر خوب می رسد. می‌خواهید ملاقات کنید یا  همینجا در موردش گفتگو کنیم؟   
          </div>
          <div class="chat-msg-text">
          یعنی الان آزادم
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/39.jpg"
            alt=""
            data-user-popover="33"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال شده در 9:43ق.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            نه، من یک جلسه دارم که در 5 شروع می شود.
          </div>
          <div class="chat-msg-text">
       بیا برای امروز بعدازظهر چیزی برنامه ریزی کنیم.
          </div>
          <div class="chat-msg-text">
         و توی تقویم برام دعوت نامه بفرست
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
           ارسال شده در 9:43ق.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
           عالیه، حتما همین کارو میکنم
          </div>
          <div class="chat-msg-text">
            انجام شد.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
