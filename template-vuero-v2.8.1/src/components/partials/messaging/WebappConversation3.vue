<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div
    id="navbar-conversation-3"
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
       کار گروهی
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/avatars/svg/vuero-1.svg"
          alt=""
          data-user-popover="3"
          @error.once="onceImageErrored(150)"
        >
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="onceImageErrored(150)"
        >
        <img
          class="chat-area-profile"
          src="/demo/avatars/19.jpg"
          alt=""
          data-user-popover="17"
          @error.once="onceImageErrored(150)"
        >
        <span>
          <span>4</span>
        </span>
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
           ارسال شده در 4:15 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
          تازگی ها این ابزار مارکتینگ رو پیدا کردم
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/demo-apps/1.jpg"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            >
          </div>
          <div class="chat-msg-text">
           ویژگی ها زیبا به نظر می رسند. آیا می توانیم آن را امتحان کنیم؟ کسی می خواهد بررسی کند؟
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
           ارسال شده در 4:15 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
         مطمئنا، من به سرعت نگاهی خواهم انداخت.
          </div>
          <div class="chat-msg-text">
        من همچنین قصد دارم به برنامه های موجود نگاه کنم.
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/19.jpg"
            alt=""
            data-user-popover="17"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال شده در 4:27 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
           من این یکی را می شناسم، ما در شرکت قبلی خود از آن استفاده می کردیم. قابل اعتماد و سریع است
            <span
              role="img"
              aria-label="Smiling Face with Smiling Eyes"
            >😊</span>.
          </div>
          <div class="chat-msg-text">
         منظورم این است که ارزش امتحان کردن را دارد و ما در حال حاضر به آن نیاز داریم.
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
           ارسال شده در 4:31 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
          بله، اما من باید موارد استفاده را تست کنم.
          </div>
          <div class="chat-msg-text">
           قبل از اطمینان نمی توان ثبت نام کرد
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/12.jpg"
            alt=""
            data-user-popover="2"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال شده در 4:32 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
          هاها، علی نترس
          </div>
        </div>
      </div>
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
           ارسال شده در 4:32 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
           بله، علی دوباره به حالت مرغ می رود
            <span
              role="img"
              aria-label="Faces with Tears of Joy"
            >😂😂😂</span>
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
           ارسال شده در 4:33 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
           اوم، من فقط نمی توانم کمکی به آن کنم
            <span
              role="img"
              aria-label="Face with Tears of Joy"
            >😂</span>
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/32.jpg"
            alt=""
            data-user-popover="28"
            @error.once="onceImageErrored(150)"
          >
          <div class="chat-msg-date">
           ارسال شده در 4:39 ب.ظ
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
          این خنده دارتر و خنده دارتر می شود. شما باید عاشق این تیم باشید
            <span
              role="img"
              aria-label="Smiling Face with Hearts"
            >🥰</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
