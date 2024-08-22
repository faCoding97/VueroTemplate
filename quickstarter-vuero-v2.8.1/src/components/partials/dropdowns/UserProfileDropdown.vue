<script setup lang="ts">
import { useUserSession } from '/@src/stores/userSession'

const userSession = useUserSession()
const router = useRouter()

function logout() {
  userSession.logoutUser()
  router.push('/')
}
</script>

<template>
  <VDropdown
    right
    spaced
    class="user-dropdown profile-dropdown"
  >
    <template #button="{ toggle }">
      <a
        role="button"
        tabindex="0"
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @keydown.space.prevent="toggle"
        @click="toggle"
      >
        <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <VAvatar
          size="large"
          picture="/images/avatars/svg/vuero-1.svg"
        />

        <div class="meta">
          <span>علی زمانی</span>
          <span>مدیر محصول</span>
        </div>
      </div>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-user-alt"
          />
        </div>
        <div class="meta">
          <span>پروفایل</span>
          <span>مشاهده پروفایل</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-briefcase"
          />
        </div>
        <div class="meta">
          <span>پروژه ها</span>
          <span>پروژه های من</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-users-alt"
          />
        </div>
        <div class="meta">
          <span>تیم</span>
          <span>مدیریت تیم</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cog"
          />
        </div>
        <div class="meta">
          <span>تنظیمات</span>
          <span>تنظیمات حساب کاربری</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <div class="dropdown-item is-button">
        <VButton
          class="logout-button"
          icon="feather:log-out"
          color="primary"
          role="menuitem"
          raised
          fullwidth
          @click="logout"
        >
          خروج از حساب
        </VButton>
      </div>
    </template>
  </VDropdown>
</template>
