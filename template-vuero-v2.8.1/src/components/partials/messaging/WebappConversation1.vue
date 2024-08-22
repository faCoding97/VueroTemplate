<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div
    id="navbar-conversation-1"
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
        کیانا ک.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/11.jpg"
          alt=""
          data-user-popover="13"
          @error.once="onceImageErrored(150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/11.jpg"
            alt=""
            data-user-popover="13"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
            ارسال شده در 1:03 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            سلام علی! چه خبر؟
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/7.png"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
           فکر می کنم وقت آن رسیده که اسلایدهایی را که در مورد آنها صحبت کردیم مرور کنیم.
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
          ارسال شده در 1:22 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
         آره میدونم، خب من از این بابت احساس بدی دارم 
            <span
              role="img"
              aria-label="Faces with Tears of Joy"
            >😂</span>.
          </div>
          <div class="chat-msg-text">
            من تا ساعت 4 صبح روی آن کار می کردم.
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/11.jpg"
            alt=""
            data-user-popover="13"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
          ارسال شده در 1:22 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
       اوه خدای من! اینقدر به خودت فشار نیاور!
          </div>
          <div class="chat-msg-text">
         فردا باید کمی استراحت کنی
          </div>
          <div class="chat-msg-text">
        جلسه ما برای چه ساعتی برنامه ریزی شده بود؟
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
            ارسال شده در 1:23 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
           فکر میکنم 3:15 بعد از ظهر
          </div>
          <div class="chat-msg-text">
          بذار برنامه رو چک کنم
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
