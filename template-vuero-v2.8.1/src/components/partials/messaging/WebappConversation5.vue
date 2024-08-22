<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div
    id="navbar-conversation-5"
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
        الهام ص.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/23.jpg"
          alt=""
          data-user-popover="21"
          @error.once="onceImageErrored(150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/23.jpg"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
            ارسال در 11:12 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            کمی زمان داری؟
          </div>
          <div class="chat-msg-text">
            در مورد چیزی که دارم روی آن کار می کنم به کمک نیاز دارم.
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
           ارسال در 11:14 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            البته
          </div>
          <div class="chat-msg-text">
            من به دفتر شما مراجعه می کنم.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
